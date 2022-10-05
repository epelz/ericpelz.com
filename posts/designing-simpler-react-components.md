---
title: Designing Simpler React Components
date: "2016-03-22"
description: Patterns learned from porting the Asana application to React
categories: ["engineering"]
---

_Originally published on [Medium](https://medium.com/building-asana/designing-simpler-react-components-13a0061afd16) and
[blog.asana.com](https://blog.asana.com/2016/03/react-js/)
in March, 2016._

## Patterns learned from porting the Asana application to React

When using React to build large-scale applications, a number of frameworks have
flourished to easily manage state, data-fetching, routing, and other
application-level concerns. We’re not going to talk about that — instead, we’ll
focus on another essential piece: how do you design React components for use in
a large application and have it scale?

---

A goal to strive for when using any framework or language is
[simplicity](https://www.youtube.com/watch?v=rI8tNMsozo0). Over time, it is the
simpler application that is more maintainable, readable, testable, and
performant. React is no exception, and we found that one of the best ways to
manifest simplicity is by striving for
[functional purity](https://wiki.haskell.org/Functional_programming#Purity) in
components, and by developing patterns that achieve this purity by default.
Purity leads to more isolated and inherently simpler components, thereby
bringing about a less braided and simpler system.

This is something we’ve thought a lot about at Asana — before we started using
React, we had been building our in-house functionally reactive framework, Luna,
since 2008. In iterating on this framework and building our web application,
we’ve learned what worked and what caused long-term problems
([read more](https://blog.asana.com/2015/05/the-evolution-of-asanas-luna-framework/)).
Through that, we’ve developed a series of overarching design principles that can
be applied everywhere, but particularly in React.

### Immutable data representation

When your data representation is mutable, then you’ll find it very difficult to
maintain simple components. Individual components will become more complex by
detecting and handling the transition states when data changes, rather than
handling this at a higher-level component
[dedicated](https://medium.com/@learnreact/container-components-c0e67432e005#)
to re-fetching the data. Additionally, in React, immutable structures often lead
to better performance: when data changes in a mutable representation, you’ll
likely need to rely on React’s virtual DOM to determine whether components
should update; alternatively, in an immutable representation, you can use a
basic strict equality check to determine whether an update should occur.

Any time we have deviated from this and used a mutable object in props, it has
resulted in regret and refactoring.

See [here](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)
for more general benefits of using immutable data structures.

### Make liberal use of pure functions

A [pure function](https://en.wikipedia.org/wiki/Pure_function) is a function
whose return value is solely determined by its input values, without dependence
on global state or causing any side effects. In components, we often have
complicated behavior that aids but is not directly tied to our rendering. Use
pure helper functions to movethis logic outside of the component, so that the
component has fewer responsibilities and lower complexity. Additionally, this
logic can be tested in an isolated way, and is re-usable in other components. If
you notice common sets of these helper functions, then denote them as such by
organizing them into sets of modules.

We’ve encountered two main classes of these which occur in almost all of our
components:

1.  Data model helpers to derive a result from one or more objects[^1]
1.  Mutation helpers to perform client- and server-side mutations in response to
    user actions[^2]

<!-- prettier-ignore-start -->
[^1]: Example of a data model helper: determine whether a user is currently on
    vacation.

    ```typescript
        export function isOnVacation(attr: {
          // We pass in the current time, because otherwise this function would rely
          // on the Date global. Instead, the calling component will use a chronometer
          // service which is declaratively passed-in to it.
          nowTime: number;
          // We take advantage of TypeScript's structural typing, so this method can
          // take any compatible User model. This is preferable to relying on a specific
          // User interface: each calling component has a subset of the User object graph
          // that it depends on, so this makes isOnVacation usable in many components.
          user: {
            vacationStartTime(): number;
            vacationEndTime(): number;
          };
        }): boolean {
          var startTime = attr.user.vacationStartTime();
          var endTime = attr.user.vacationEndTime();

          var wasOnVacation = startTime !== 0 && startTime <= attr.nowTime;
          var stillOnVacation = endTime === 0 || endTime >= attr.nowTime;

          return wasOnVacation && stillOnVacation;
        }
    ```
[^2]: Example of a mutation helper: to "heart" a task

    ```typescript
        export function heartTask(attr: {
          datastore: DatastoreService;
          // Thin interfaces for the User/Task model which utilize TypeScript's
          // structural typing, but the type aliases are omitted for brevity.
          user: UserBase;
          task: TaskBase;
        }) {
          attr.datastore.runInBatch(() => {
            // 1. Optimistically create the object representing the heart.
            var heartRequest = new HeartCreateRequest({
              target: attr.task.dbObjectId(),
              user: attr.user.dbObjectId()
            });
            var heartId = attr.datastore.createDbObject(heartRequest);

            // 2. Send server request to update the database.
            attr.services.datastore.requestServerChange(
              “post”, “/task_heart”, {
                // server will create an identical object with the same ID.
                global_id: heartId,
                task: task.dbObjectId(),
                user: attr.user.dbObjectId()
              }
            );
          });
        });
    ```

<!-- prettier-ignore-end-->

### Use pure components, avoiding impure pitfalls

A pure component is a React component whose render function is pure (solely
determined by props and state). The default behavior in React is to always
re-render the entire component tree, even if props/state do not change. This is
incredibly inefficient, and React
[suggests](https://facebook.github.io/react/docs/pure-render-mixin.html)
overriding shouldComponentUpdate to take advantage of pure render functions in
the component’s lifecycle. This offers an enormous performance boost and
increased simplicity, so you should consider doing this early-on.

When using pure components (overriding shouldComponentUpdate), there is no
verification that you actually implement your components to be pure. So, it’s
possible to accidentally write a component that is not pure, which will cause
reactivity problems and show stale data to the user. We’ll discuss two of these
“impure pitfalls.”

#### Globals

Using globals in a component means that the component is no longer pure, as it
depends on data outside of props and state. If you rely on a global for
rendering or in any of the component’s lifecycle methods, then you won’t achieve
correctness and reactivity. We’ve found it immensely helpful to avoid using
globals like the Document or Window, and instead pass these as props to the
components which use them. We do this by creating a Services object, and by
having each component declare in an interface which services it relies on.
Through this, components can maintain purity and be independent of the global
namespace.

#### Render Callbacks

A now-antipattern that used to be quite prevalent for us is a _render callback:_
a function passed as a prop to a component, which allows that component to
render something. A common use-case of a render callback was to allow a child to
render something using data it did not receive in props. For example, if we
wanted to have a generalized component that could render many types of child
components, we would pass the component a callback to render the child.

Unfortunately, render callbacks are inherently impure because they can use
whatever variables its function has closed on. So, because of our assumption of
pure components, if any of the outside environment changes then our component
would _not_ re-render.

Let’s see this in a code snippet.

```typescript
// Render callback anti-pattern
interface ParentProps {
  someObject: SomeObject;
}
class ParentComponent extends PureComponent<ParentProps, {}> {
  render() {
    return React.createElement(ChildComponent, {
      renderSomething: this._renderSomethingForIdx,
    });
  }
  private _renderSomethingForIdx(idx: number) {
    return React.createElement(SomeOtherComponent, {
      object: this.props.someObject,
      idx: idx,
    });
  }
}

interface ChildProps {
  renderSomething: (idx: number) => React.ReactElement<any>;
}
class ChildComponent extends PureComponent<ChildProps, {}> {
  render() {
    // ... some other behavior ...
    return this.props.renderSomething(123);
  }
}
```

In this snippet, ParentComponent passes a render callback to ChildComponent, and
that render callback uses someObject from props. Since ChildComponent uses this
function for its rendering behavior, then it will _not_ re-render if someObject
changes.

Luckily, you can avoid using a render callback in one of three ways, depending
on your constraints, and each allows us to keep our pure component assumption.

##### Alternative 1

Pass all information needed for rendering to the child component, and have that
child render the component directly.

```typescript
interface ParentProps {
  someObject: SomeObject;
}
class ParentComponent extends PureComponent<ParentProps, {}> {
  render() {
    return React.createElement(ChildComponent, {
      someObject: this.props.someObject,
    });
  }
}

interface ChildProps {
  idx: number;
  someObject: SomeObject;
}
class ChildComponent extends PureComponent<ChildProps, {}> {
  render() {
    // ... some other behavior ...
    return React.createElement(SomeOtherComponent, {
      object: this.props.someObject,
      idx: idx,
    });
  }
}
```

We achieve the same rendered output by having ChildComponent render
SomeOtherComponent itself. This works well if the additional props do not cause
excess re-rendering, and do not break any contextual abstraction boundary in the
component.

##### Alternative 2

Render the component in its entirety and pass that to the child component

```typescript
interface ParentProps {
  someObject: SomeObject;
}
class ParentComponent extends PureComponent<ParentProps, {}> {
  render() {
    return React.createElement(ChildComponent, {
      somethingElement: this._renderSomethingElement(),
    });
  }
  private _renderSomethingElement() {
    return React.createElement(SomeOtherComponent, {
      object: this.props.someObject,
      idx: 123, // Suppose this had access to the idx
    });
  }
}

interface ChildProps {
  somethingElement: React.ReactElement<any>;
}
class ChildComponent extends PureComponent<ChildProps, {}> {
  render() {
    // ... some other behavior ...
    return this.props.somethingElement;
  }
}
```

In cases that ParentComponent has all of the information needed to render
SomeOtherComponent, we can just pass it down as a prop to the ChildComponent.

##### Alternative 3

Render the component partially, pass the ReactElement to the child component,
and use React’s cloneElement to inject the remaining props.

```typescript
interface ParentProps {
  someObject: SomeObject;
}
class ParentComponent extends PureComponent<ParentProps, {}> {
  render() {
    return React.createElement(ChildComponent, {
      somethingElement: this._renderSomethingElement(),
    });
  }
  private _renderSomethingElement() {
    return React.createElement(SomeOtherComponent, {
      object: this.props.someObject,
      idx: null, // injected by ChildComponent
    });
  }
}

interface ChildProps {
  somethingElement: React.ReactElement<any>;
}
class ChildComponent extends PureComponent<ChildProps, {}> {
  render() {
    // ... some other behavior ...

    // Clone the passed-in element, and add in the remaining prop.
    return React.cloneElement(this.props.somethingElement, {
      idx: 123,
    });
  }
}
```

This alternative is great for cases where neither ParentComponent nor
ChildComponent have the full information needed to render SomeOtherComponent, so
it shares the responsibility. While this may seem more complicated than the
above two alternatives, it has a lot of desirable properties. In the next
section, we’ll dig into a real world example to make it more concrete.

### Divide components and use the injector pattern to maintain separation of concerns

Composition is an immensely useful pattern in React for achieving separation of
concerns. Many great philosophies around this have developed, such as dividing
components between
[presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.yzeg1rmzv).
However, for some high-level components, such as a general component for
drag-and-drop, composition necessitated either use of a *render callback *or
added complexity. In such cases, we found the aforementioned **injector
pattern** helpful.

---

**Example from Asana:** Simplifying the Task List row

A core component in Asana is the Task List, which allows a user to see all of
the tasks in a project. The component for a single row in this list has many
responsibilities: it displays information (such as the task assignee), it can be
a section or a task, and it can be dragged and dropped to re-order. Following
the principle of composition, we divided the task row to achieve smaller and
simpler components, and composed them together.

As part of this, we wanted to create a general component that handled all of the
drag-and-drop logic, which could be composed with a task row. This would mean
that a task row could be completely agnostic to drag-and-drop, and all of that
logic would be contained within a new component that could be agnostic to its
rendered child.

With such a design, we would be able to compose a DraggableRowContainer and
TaskRow to make a draggable task row. Each of these two components would not
need to know about the other, and a TaskList component could utilize them to
render its task list. For example:

```typescript
class TaskList extends PureComponent<Props, {}> {
  render() {
    return this.props.tasks.map((task) => {
      return DraggableRowContainer.create({
        child: TaskRow.create({
          task: task
          ...
        }),
        ...
      });
    });
  }
}
```

However, we found this difficult to accomplish without introducing a *render
callback *or complicating the DOM hierarchy, because the DraggableRowContainer
needed to add to DOM nodes (in this case, adding class names). A solution could
have been to use a _render callback_, but that broke our purity assumption.

Instead, we were able to use the injector pattern. DraggableRowContainer would
clone its child (a TaskRow), and “inject” props to the child to enable
drag-and-drop. This did not introduce complexity to TaskRow: it could still
render purely based on props, and did not need to be conscious of drag
functionality. The TaskRow props would just need to adhere to a certain
interface (in this case, expecting a class name to add styling on drag hover).
Therefore, our task row has fewer responsibilities, we have a re-usable
DraggableRowContainer component, and our DOM hierarchy is unchanged.

---

The injection pattern has proved useful in our application, particularly when
used to create general abstraction components (drag-and-drop, loading data, and
so on). TypeScript gives us compile-time assurance that the passed-in element
can indeed be injected with a given property, and the cloned element can execute
its React lifecycle methods without worry.

### Conclusion

While this is just a short list of patterns to consider, and they will certainly
not guarantee a simple and scalable application, we have found them immensely
helpful in approaching component design. Incorporating functional purity in
every component — through use of immutable data representations, pure functions,
pure components, and eliminating impure pitfalls—has allowed us to develop large
parts of our application in React while maintaining simplicity and performance.
In all, though, the best principle is to continue to take time to reflect along
the way and uncover new opportunities to simplify.

---

_Thanks to Kevin Der, Josh Smith, and Phips Peter for their great work in
contributing to these patterns._
