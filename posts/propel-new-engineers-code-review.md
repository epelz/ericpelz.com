---
title: How to propel new engineers with code review
date: "2016-12-17"
description: Maximizing mentorship, improving code quality, and saving time
categories: ["engineering", "highlight"]
---

_Also published at
[HackerNoon](https://medium.com/hackernoon/maximizing-mentorship-in-code-review-f479ae74fe3f)
on December 17, 2016._

## Maximizing mentorship, improving code quality, and saving time

Many think of code review as a tool to prevent bugs from hitting production, or
to ensure that code meets a certain quality bar. While it’s often those things,
it’s also an incredible tool for mentorship. Since there’s already a second
person reading over the code, why not do it in a way that will teach and
inspire?

During my time at Asana, I’ve had the pleasure of being on a few different teams
and onboarding a bunch of new engineers (some new graduates and some seasoned
engineers), and have seen first hand the benefit of code review for mentorship.
But I’ve also seen code reviews gone wrong — for example, a diff that suffers
from large issues, but the reviewer just responding with a simple “LGTM” or lots
of surface-level nits. Though good code reviewing does take some time, I’ve
found some tips and tricks to best leverage that time, with the goals of
mentoring new engineers, keeping team velocity high, and maintaining high
quality code.

### Code review is not the right tool for everything

While code review is awesome, it’s certainly not appropriate for all kinds of
feedback. By the time code reaches review, it’s already been written: an
engineer has already thought through a design, implemented it, tested it, and
polished everything up. Imagine going through these steps, and then hearing your
reviewer say “this is a bad way to do this, you could’ve avoided X by doing Y.”
That’s extremely demotivating and necessitates large revisions and more
follow-up reviews. Instead, you should discuss changes before implementation —
either through a design doc or even a simple conversation — to get buy-in for
the overall approach.

For tasks that involve large design changes, write up a short outline of what
you plan to implement (which files, any changes to abstractions, how pieces will
fit together) and share it with a teammate before you start coding. This will
reveal so many great nuggets of learning: ways to structure your thinking and
engineering design, implementation risks and alternative approaches, and ways to
split up your changes into smaller chunks. I’ve found this leads to a noticeable
improvement in code quality, and the net time saving is incredible.

### Tips when writing code

When you commit code, think about the code you’re about to commit from the
context of a code reviewer. All of us _should_ want the reviewer to have an easy
time — not only will it save them time, but will also improve the quality of
feedback you receive. Consider the following tips:

#### Give a detailed description and test plan in the commit message

It sounds silly, but the commit message is there for a reason! For UI changes,
it’s extremely helpful to include a screenshot or animated GIF to show the
interactions. This will put your reviewer in the correct mindset to read your
changes, which will save them time in context switching and help them focus.

#### Point out any problems you’re aware of

One of my favorite things to do when sending out a code review is to mention
problems I can anticipate, quirks in my changes, or reasons for certain
decisions that I made. This is really helpful, for a few reasons:

- Highlights these areas for your reviewer so they can give input on whether
  they agree, or give tips to alleviate risk
- Saves your reviewer time for code with complexity, as they can understand
  _why_ the complexity is there
- A future engineer who looks at the code can find the review task, and can gain
  insight into your thought process and decision

#### Split your commit into digestible chunks

This is a huge time-saver, and I believe also leads to better code. Splitting
commits into small chunks helps you be cognizant of bad test coverage, bad
documentation, or other common issues. Additionally, it helps your reviewer by
reducing the surface area of each commit, thus saving them time to understand
the context of the change and leads to better feedback.

Note: Git provides some tools to help you do this, like
[git add -i](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging).

#### Find you’re receiving similar feedback over and over?

Often when you’re new to an organization or codebase, it’s inevitable that
you’re going to hit a lot of small issues while you’re still getting used to the
environment. For new engineers on my team, I’ve found it helpful to create a
task in our [1:1 project](https://wavelength.asana.com/workstyle-what-is-a-1-1/)
called “Common Code Review Feedback”. Whenever one of us noticed a new common
theme in code review, we add it to this task. This serves two purposes: to
provide an avenue to discuss these items (e.g. why does this matter? how can I
identify this before code review?), as well as track progress towards better
quality code. I’ve seen this in action a few times, and it’s served as an
amazing motivator and positive reinforcement — both for the committer, and the
reviewer to see their feedback being heard.

### Tips when reviewing code

#### Strategies for efficient reviewing

It’s sometimes difficult to strike a good balance between a quick “LGTM”, only
finding surface-level issues in code, and spending hours reviewing a change.
It’s not easy, especially when changes aren’t in an area of the code that you’re
very familiar with. In these cases, I try to break down the code review process
into a few parts:

1. **Get a high-level sense of the changes**<br>First, read the commit message.
   If this is a UI change, look at a screenshot or GIF of the change.
1. **Get a sense of the surface area of the changes**<br>Read the list of files
   that were changed. Have you seen these files recently? If not, skim them
   first (API and documentation) to get a sense of them. If there’s way too much
   context to gain, consider cc’ing someone else.<br>By gaining more context of
   the changed files, you can limit the number of times you add comments and
   later keep reading to find out they were all for moot.
1. **Skim the changes to see if there were any API, abstraction, or structural
   changes**<br>Don’t look at the actual implementation changes yet. One of the
   most important things to see is how the change fits into the overall system.
   Is there a follow-up change (by someone else) coming which is incompatible
   with these changes? Will the changes lead to an intractable or complex
   pattern that others will want to follow?<br> You may decide that the entire
   approach should be rethought. In these cases, be tactful in how you explain
   your thoughts (I often choose to ask leading questions or relate to other
   examples). Additionally, consider that you may be missing context and could
   be wrong — the engineer probably had good reason to do what they chose.
1. **Finally, look at the actual implementation changes and tests**<br>Now, once
   you’re happy with the high level changes, go through the code and look for
   surface-level feedback. For example, are their methods simple and easy to
   understand? Do they follow best practices and style guidelines? Have they
   given adequate comments? Do their changes have ample test coverage, or have a
   good reason to miss tests?

#### Keep giving the same feedback?

This can be frustrating, especially if it’s to multiple people. Consider writing
a canonical example or documentation of the best practices and link to it in
future code reviews. Not only will this save you typing, but will also mean that
others can read this reference, expand upon it, or ask you questions about the
underlying motivations or philosophy.

One of my favorite ways to do this is as part of an “example component” and
“example test”: actual code that lives and breathes like all other code, but
with the single purpose of educating on best practices and underlying
motivations.

#### Spending a lot of time on code review?

Is it with a specific person? Consider spending some time to reflect on the past
few code reviews. Do you notice any themes? There might be an underlying reason
they’re not improving, like a lack of clarity in the company’s engineering
values, or a misalignment in some engineering philosophy. I’ve often found it
helpful to send articles or videos on certain areas in engineering, and to talk
to the engineer in person.

Do you frequently receive code that is hard to review? Tell the engineer! No one
intentionally makes life difficult for their reviewer. Explain to them why the
code is difficult to review (e.g. the commits are too large, commit messages are
confusing, or the code is just too complex). It may also help to review the code
with them in person, which will help them see why it’s difficult to review.
Additionally, don’t be afraid to reject the change and ask them to address the
issues with the commit structure or messages; the only way to improve this is to
surface the issue.

#### Giving way too many small nit comments?

Sometimes, especially for new engineers, there are many small but important
things to mention. It would be ideal for these to be handled by a compiler or
linter, but sometimes that isn’t possible. Be mindful of your feedback — it
might be best to only mention a subset at a time, or explain the high-level
philosophy of the style guidelines in person. Otherwise, you risk decision
fatigue for yourself as the reviewer, and the engineer is likely to feel
overwhelmed when seeing the never-ending stream of comments. You can always
continue to teach the engineer, and they’ll absorb more information if you
incrementally introduce them to new concepts and learnings.

#### Feeling overwhelmed by a review in your inbox?

Every so often, I’ll get a code review for something that I’m not super excited
to look at. Whether it’s old code that I haven’t worked in months, or an area of
the codebase that’s notoriously complex. This is totally normal, but it’s not
doing anyone any good, so reflect on this and be real. It may be best to pass
the review to someone else who is a better person for the review, or, if it’s
not time sensitive, to snooze it for a few days.

---

_Thanks to Greg Slovacek for support and contributions, and to R.J. Aquino, Tim
Bavaro, Kevin Der, Bella Kazwell, Vincent Siao, and Isaac Wolkerstorfer for
reviewing a draft._
