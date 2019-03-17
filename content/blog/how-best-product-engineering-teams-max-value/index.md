---
title: How the best product engineering teams maximize value
date: "2018-04-16"
description: Reducing risk, eliminating complexity, and sequencing effectively
---

## Reducing risk, eliminating complexity, and sequencing effectively

With perfect information, an engineering design process can be pretty
straightforward: you can focus on implementing functionality while minimizing
engineering complexity and risk. But this gets a lot trickier when there are a
lot of product uncertainties. How do you make an engineering plan when you don’t
know how it will be used or extended? In these cases, you need to have a strong
dialogue between product and engineering — healthy teams don’t silo each person,
but have them work together as one team. Through this, you can plan to maximize
user value through incremental releases, by minimizing product and engineering
risk.

### The most interesting types of engineering problems

At Asana, I’ve been the tech lead of a few different teams, and have seen
first-hand that each team has its own joys and challenges in the engineering
design process. For example, one team involved rewriting an unperformant feature
to a new framework. This meant that the team had a well-defined product with
little uncertainty, as the feature was already launched. In this team, we only
solved engineering problems: e.g. how to write efficient queries, differences
between our old and new frameworks that could impact the product, and how to
build abstractions to harness the power of the feature.

My favorite kinds of teams involve much more product collaboration. When
building powerful new features, there are many types\* of risk at play — product
and engineering are two of the most common — and you need to think of them all
when planning a product engineering project. Product risk can be very dangerous:
if you build the wrong feature, you might need to re-build the right feature
afterwards. At best, this means wasting some time. At worst, this means building
and maintaining two separate systems instead of one. This means the scope of
problem solving changes completely, as an engineer needs to be a partner in the
product process and think through both engineering and product tradeoffs.

In other words, be involved in all stages of the product process. Do this from
the start, even before identifying the problem statement and initial hypotheses.
You will be better equipped to think through product tradeoffs and be a good
partner to your product manager. Similarly, a product manager should be a
partner in the engineering process. They should understand where complexities or
legacy technologies live, intuit which solutions are simpler, and so on. A
successful collaboration results in a better product delivered with higher
velocity.

Some of the most common types of risk I’ve seen (see
[here](https://www.sciencedirect.com/science/article/pii/S1877705814002203) for
more):

- _Engineering risk_ — are there a lot of unknowns in the technical plan? Does
  this use new technologies that aren’t often used? Does this touch a lot of old
  code or systems that the team doesn’t know or that may need
  updating/refactoring? Will this cause stability fallout?
- _Product risk_ — are we confident in the product plan? Will we need to iterate
  on the feature for it to be useful? Could it completely flop and need to be
  re-done, after showing to users?
- _Team risk_ — how engaged are team members? If a milestone slips, will that
  make the team feel demotivated? If added uncertainty or roadblocks come up,
  will team members move as quickly? How confident are team members in the
  team’s leadership?

### How to approach these problems

Unfortunately, many engineers focus on an extreme when they see multiple types
of risk. If there is large product risk, they’ll prototype to deliver value as
fast as possible, which could harm their future viability. On the other side,
they might over-abstract and focus too much on the long-term feature-set,
risking added complexity and delaying when they deliver value. The ideal path
forward is to be somewhere in the middle, and balance the product and
engineering concerns.

If you’re at a product company, your ultimate goal is likely to deliver user
value. There’s a lot to consider: what user benefit will you deliver, what risk
will that have, when will the release occur, what engineering debt will you add,
and so on. The danger is when these factors aren’t considered when planning a
project. That likely happens when it’s assumed that someone else will consider
the factors (i.e. the PM will think about product risk, and you, the engineer,
only need to care about engineering planning).

### Brief interlude: concretely modeling this

Bear with me for a moment, we’ll return in a minute — but it’s helpful to think
of this from the perspective of economics. Suppose you have a project which you
are developing an engineering plan for. You can deliver it all at once, or
through a series of incremental releases. We want to maximize the expected value
for hypothetical releases. If you squint a bit, we can model this the same way
as [risk-adjusted net present value](https://en.wikipedia.org/wiki/RNPV) in
economics. We have a series of “releases” at different points of time, each with
a different risk profile and net value. Since we prefer value as soon as
possible, we “discount” the value based on when it will occur.

![](./equation.png)

Where:

- _Ui_ represents the net value from release i. This combines a few factors:
  _Ui=Vi-Di-Ci_

  - _Note: assume these are all the same unit — usually dollars, which is a
    fairly generic unit that we can translate to._
  - How much value (_Vi_) do users get from a release? For example, they can do
    a new workflow that they previously couldn’t.
  - How much disutility (_Di_) do users get from a release? For example, if you
    delivered a half-baked release which degrades user trust.
  - How much cost (_Ci_) did your team incur from release? For example, 5
    engineers spent 2 weeks on features.

- _ri_ represents the probability a release can happen to yield the value _Ui_.
  This models the risk of a release.

  - _Note: assumes that a release is all or nothing. In practice, a release
    would be delayed or its adoption would be lower than expected. This could be
    modeled with many more “potential releases” at different probabilities._
  - For example, this might be: product risk (build the wrong thing),
    engineering risk, and so on.
  - For example, you can de-risk a project by having an early release beta
    program to receive feedback.

- _1/(1+d)^Δti_ represents the
  “[discount factor](https://en.wikipedia.org/wiki/Discounting#Discount_factor)”
  - _d_ is the discount rate — the value that can be earned per unit of time on
    a different investment of similar risk.
  - _Δti_ is how long has occurred between release i and i-1.

With this, we can model expected user value from a series of releases. While
I’ve never calculated this explicitly, and this model is highly simplified, it
lets us compare how each factor relates to one another and the overall plan.

### Best practices to maximize value, with inspiration from the model

Through the teams and launches I’ve been a part of, I’ve gathered some learnings
about maximizing value. These also are reflected in the simplistic model above.

#### On thinking through a release plan

- You should aggressive split a feature into small releases. If it adds no risk
  or cost, then splitting a feature into multiple releases is a great way to
  increase user value. Earlier and more frequent delivery means parts of the
  feature can get in the hands of users sooner. In our model, this is reflected
  by the discount factor yielding lower net value.
- There are many considerations to a release plan — feature readiness, market
  conditions, product and engineering risk — and coming up with a plan should be
  a collaboration of all interested parties. After the initial planning for a
  project, consider whether incremental or early releases would be useful.

#### On thinking about engineering design

- Adding engineering debt or complexity is dangerous. It can complicate all
  future development or add risk to all future releases. As such, optimizing for
  the short-term through engineering complexity can have dramatic consequences
  to long-term user value. This often manifests by building “partial” features
  that ultimately introduce debt, rather than building the smallest complete
  unit of user value.
- Balance is important — while you should always think of future engineering
  design, you shouldn’t over-engineer such that you deliver something to users
  much much later. If there is product uncertainty with the future (for example,
  it’s not clear how a feature will be extended or generalized), then you risk
  [building the wrong abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction)
  which can slow future development.
- All engineering complexity will result in additional cost or risk, so it is
  almost always better to
  [circumvent complexity](/circumventing-engineering-complexity) when possible.
  Being a partner in the product process will give you context to think through
  non-engineering solutions to complexity, thereby increasing expected value.

#### On mitigating risk

- It’s incredibly helpful to sequence work such that you mitigate risk for large
  releases. Suppose you are planning a big release in 6 months and the product
  risk is currently high. You might have the opportunity to halve product risk
  with a small earlier release to validate hypotheses. This will ultimately
  double the final release’s expected user value. You can also apply this
  technique when using a new technology with large technical risk. If you
  de-risk a project early with a small release to validate an engineering plan,
  you will improve the project’s expected value.
- Different types of risk compound one another, so it’s dangerous to combine
  multiple types of risk in a single release. Consider all types of risk, and
  strive to focus a release to a single type of risk (e.g. couple riskier
  engineering with less risky product work).
- It’s helpful to think about this from the perspective of “minimizing the worst
  outcome”. In other words, think about what kind of risk is biggest, and what
  contingencies you have in place. For example, is your engineering design
  resilient to portions of your product changing as a result of beta testing? If
  not, consider doing that for areas with high product risk, or deferring
  engineering design until you have higher confidence on the product direction.
