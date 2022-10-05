---
title: Eng Manager & Tech Lead Responsibilities
date: "2022-06-14"
description: xcxc
categories: ["highlight", "engineering"]
otherAuthors: ["Sara Conlon"]
---

<style>
    .group {
        padding-left: 30px;
    }
    .examples {
        font-size: 10px;
        color: gray;
        line-height: normal;
    }
</style>

_Originally published at
[blog.asana.com](https://blog.asana.com/2022/06/grow-your-leadership-impact-as-a-tech-lead-or-engineering-manager/)
on June 14, 2022._

## Blog post intro: motivation

Forming the right partnership between an Eng Manager and a Tech Lead can accelerate delivery and personal growth, but it isn’t easy, because this relationship can take many forms. At Asana, we’ve always been a big believer in distributing responsibility across the organization (through [Areas of Responsibility](https://wavelength.asana.com/workstyle-aors/)), and that we’ll build a better product if strategic technical choices are made by those closest to the code/product. At the team-level, we’ve always had ICs be a part of leadership – you don’t need to manage people to be an organizational leader.

We’ve reached a new chapter in our R&D organization – hiring and onboarding more engineering leaders than ever before. As our organization has grown, it’s been crucial to provide a shared foundation across teams and ensure our best practices match the current scale of Asana. Every team and individual is different – so we aim for these roles to be flexible enough to fit the needs of each team, while being structured in a way to prioritize the best outcomes for Asana and individual growth.

We’ve developed a new default for how Eng Managers and Tech Leads should work together on teams, allowing both leaders to focus their attention on their specialization without siloing. We believe, in most situations, this default will help optimize for short- and long-term team success of the team, whilst also ensuring that both leaders are able to focus their attention on areas that will continue to be growthful.

In the rest of this article, you’ll find our internal documentation for these roles and best practices. We hope you find this helpful to apply to your own growth path and impact as a Tech Lead or Eng Manager, or in applying to your organization. As we learn more and our organization grows, we’ll continue to iterate on our role definitions to help maximize the impact of our engineering teams, as we believe that clarity drives purpose and accountability, leading to the best results.


# EM & TL Role Definitions

All development teams at Asana have a single **Engineering Manager (EM)**, who is accountable[^1] for program success. They focus on improving team-level outcomes, balancing short- and long-term success, and are expected to identify and drive changes as necessary.

[^1]: Accountability means setting expectations for success, delegating appropriately, and supporting decision-making.

Most programs at Asana also have a separate **Tech Lead (TL)**, who is an[^2] IC on the team (and reports to the Engineering Manager), and is accountable for program-level technical leadership. When teams do not have a separate TL, the EM acts in this capacity (often called a Tech Lead Manager – “TLM”)[^3].

[^2]: Asana believes we’ll have better outcomes when decisions and strategic choices are made by people who are closest to the code/product, and that having a single person accountable for technical leadership (as opposed to a rotating responsibility) will let teams have a stronger focus on [technical strategy](#technical-strategy-technical-leadership) and partnering on the [roadmap](#roadmap-feasibility--execution-technical-leadership).

[^3]: Tech Lead Manager (TLM) can work well for some teams, such as small teams (< 4 engineers), a TL transitioning to management, or teams with many experienced ICs acting as mini-TLs. However, it can also lead to the TLM becoming spread too thin to develop either as a manager or as an engineer, and become a bottleneck for the team. For these reasons, it’s rarely been a long-term stable staffing solution.


This division enables those roles to specialize their skills and give different areas sustained attention:

- Engineering Manager primarily focuses on [people management](#people-management) ([staffing](#staffing-people-management), [coaching & growth](#coaching--growth-people-management)) and [organizational strategy](#organizational-strategy) ([organizational risk](#organizational-risk-organizational-strategy), [operational efficiency](#operational-efficiency-organizational-strategy), [team charter & outcomes](#team-charter--outcomes-organizational-strategy))
- Tech Lead primarily focuses on [technical leadership](#technical-leadership) ([technical execution](#technical-execution-technical-leadership), [technical strategy](#technical-strategy-technical-leadership), [technical culture](#technical-culture-technical-leadership), [roadmap feasibility & execution](#roadmap-feasibility--execution-technical-leadership).

_While this is the industry-standard division between Engineering Manager and Tech Lead roles, we’ve seen new-to-Asana leaders reflect that this feels more empowering and impactful. This is likely due to Asana’s leadership philosophy, which empowers leaders at all layers of the organization – and leadership is inclusive of ICs._

## How to apply this to yourself and your team

This guidance is complementary to our engineering career levels guide (our “Success Guide”). Here we focus on “ownership area” (based on your role, what areas are expected of you to be focusing on), which is distinct from ”expectations from your role” (scope and impact) in the IC and EM Success Guides. For example: all Engineering Managers own [staffing](#staffing-people-management), but expected scope may change from person to person (informed by Role Level in the Success Guide). Similarly, [technical strategy](#technical-strategy-technical-leadership) work can vary widely in scope based on the complexity of the domain and stage the team is at.

In fact, these core focuses are intended to also apply at other layers of scope. At the Area (groups of teams) and Pillar (groups of Areas) layers of the organization, we also have Tech Leads paired with each Eng Lead (manager).

The exact responsibilities, and expectations of impact, are not standard from team-to-team. Each team has specific needs, based on a variety of factors (e.g.: size of team, type of work, skillset and growth goals for individuals), and part of a manager’s role is setting expectations for what their TL (and other ICs) focus on and what help they need from their own manager.

Some examples:

- An EM may lean more into [technical execution](#technical-execution-technical-leadership) to give space to a TL to focus on [technical strategy](#technical-strategy-technical-leadership) (a growth area of theirs, or a long-neglected area that needs attention).
- A TL may delegate through [AoRs](https://wavelength.asana.com/workstyle-aors/) (a large system ownership, to which aspects of “technical leadership” are driven by the AoR holder), or as a Workstream Lead
- TLs, as leaders, have a significant impact on the morale, psychological safety, and personal growth within a team that overlaps with an EM’s focus. Team Building & Collaboration are core competencies for all engineers (as outlined in the Success Guide) and expected from TLs.

# Core Focuses for the TL and EM Roles

_Note: There are important aspects of a team that cut across both EM and TL. For example, Project Delivery is an incredibly important aspect of the team, and is co-owned by both the EM ([operational efficiency](#operational-efficiency-organizational-strategy)) and TL ([technical execution](#technical-execution-technical-leadership)). In many cases, it’ll be clear who to go to—for example, if technical design is blocking project delivery, go to the TL. In other cases, it might be tricky to pick a single person, in which case the EM will help drive clarity._

## Engineering Manager

### People Management

Responsible for determining the right roles and skillsets for their team to achieve their charter, staffing those roles, and ensuring reports are challenged to their full potential and doing work consistent with their level

<div class="group">

#### Staffing (People Management)

Determine staffing the team needs to achieve their short- and long-term goals. Invest in [coaching & growth](#coaching--growth-people-management), hiring, and performance management to fill these needs

<div class="examples">

- Evaluating what is needed for open and current roles on the team, and shaping the team through hiring, coaching, and performance management.
- Drive the process to hire new people, partnering closely with Talent Acquisition, and filling whitespace as a Hiring Manager. Ensure new reports are set up for success through onboarding.
- Maximize engagement and retention on the team by pursuing various strategies (compelling career paths, trust building, long term vision for the team, maintaining a healthy environment, etc).

</div>

#### Coaching & Growth (People Management)

Balance risks and growth opportunities, and provide support for engineers on the team. The priority of delivering on the team goals should still leave room for engineers to find growth opportunities within the team.

<div class="examples">

- Ensuring reports have room to thrive in their role, the right skillset to achieve their responsibilities, and are at the appropriate stretch level.
- Coach ICs, including TLs, and up-level skills needed for the current project and beyond (technical, communication, autonomy, etc).
- Ensure reports are evaluated fairly and understand their performance. Facilitate career planning conversations and work with reports to achieve their growth goals.
- Foster a culture of feedback on the team, and ensure a psychological space for engineers to evolve in and continuously encourage mentorship opportunities within and outside the team.
- Balancing growth with business needs. e.g.: if everyone has the same growth goals, there won’t be room for growth. If someone wants to grow in a way the team can’t satisfy, they’ll stall. The EM should maintain some flexibility in the staffing so that they can satisfy people’s desire within a reasonable amount of time. Determining who should own what responsibility (AoRs, leading a workstream).

</div>
</div>

### Organizational Strategy

Ensure the team as a whole is set up for success to achieve its charter, from short-term execution to long-term future impact.

<div class="group">

#### Organizational Risk (Organizational Strategy)

Consider risks that could impact your organization, from the immediate term to the long term, and proactively work to mitigate that risk. Use tools like building a leadership bench, and succession planning.

<div class="examples">

- In the immediate term, anything that would jeopardize the team success (sudden departures, issues with stakeholders, internal team conflicts, etc.) should be addressed by the EM. This includes: adapting your role to fill gaps, holding folks accountable, delegating/un-delegating when appropriate, adjusting expectations (internally and with stakeholders) to improve team health.
- In the medium/short term, the EM should foresee to a reasonable extent potential risks and proactively mitigate them (growing frustrations within or outside the team, single point of failure (SPOF) within the team, lack of leadership/mentorship bench, creating a durable & sustainable organizational design plan, etc).

</div>

#### Operational efficiency (Organizational Strategy)

Ensure the team is operating smoothly, and seek out and action on opportunities to improve efficiency.

<div class="examples">

- Maintain a “zoomed-out view” of the team’s operations, and use this macro lens to ensure the team is using appropriate processes in its day-to-day operation.
- Ensure processes match the changing demands on the team. For example – if more partner requests start coming in, the EM should ensure that the team can scalably address those requests while still focusing on the team’s goals (e.g. by: creating an oncall “help” rotation, using a triaging queue, adjusting staffing, adjusting roadmap expectations, etc).
- While many processes on the team may not be directly run by the EM (we encourage delegation!), the EM is still responsible for identifying improvements and working to improve these processes. For example – while a TL may drive most of the sprint process, the EM can identify bottlenecks and coach/partner to improve them.

</div>

#### Team Charter & Outcomes (Organizational Strategy)

Ensure that their team has a defined and well-understood charter they can sustainably operate on, which tackles the most impactful opportunities, and inspires engineers to do their best work.

<div class="examples">

- Define and communicate the boundaries of the team, in partnership with PM & TL. Ensure all needs on the team are incorporated, including partner work, customer escalations, KTLO, and investments, and that the team is staffed sustainably for success.
- Provide guidance and support on important decisions that impact the team, including technical, product, and team considerations.
- Partner with the PM to ensure there is a clear strategy for the team to work on the highest impact work. Make sure the team is set up to succeed against its roadmap commitments and longer-term strategy, and that we prioritize team health.
- Ensure that all engineers understand their team charter, are aligned on the strategic choices on the team, and have an opportunity to contribute.
- Work with cross functional partners to make sure there is solid understanding of how to measure success and how that translates to the top of line business outcomes. Interface with leadership to be aligned on expectations of the team, and negotiate commitments as the organization or business shifts.

</div>
</div>

## Tech Lead

### Technical Leadership

Balances the short-term (“execution”) and long-term (“strategy”) technical decision-making to ensure we’re consistently delivering high value. Accountable for technical design.

<div class="group">

#### Technical Execution (Technical Leadership)

Making sure day-to-day decisions enable us to predictably deliver on the roadmap, utilizing the technical design process and appropriate planning & estimation.

<div class="examples">

- Ensure engineers are working towards the highest impact work towards upcoming milestones, and don’t block one another. When technical execution plans change, or the critical path is blocked, escalate updates or needs to appropriate stakeholders.
- Be the default engineering voice in the Product Process, (at minimum) providing engineering constraints, costs, and technical risks.
- Be the DRI for the technical design process on the team. Determine which projects should have design docs communicated to what audience, and facilitate the design process between authors and stakeholders/approvers.
- Manage risk appropriately for the team and projects, and ensure we are aware of short- and long-term trade-offs when making decisions (potential scale issues, irreversible decisions, balancing product and engineering risk, impact of taking on debt, etc).

</div>

#### Technical Strategy (Technical Leadership)

Ensure that the team technical decisions work towards a larger technical strategy, which works towards a larger vision. Make it easy to contribute to the system in a fast and sustainable way.

<div class="examples">

- Partner with product and cross-functional stakeholders to incorporate technical constraints and ideas into product strategy, and build a technical strategy to chart the way towards that product strategy.
- Build for impact – prioritize where to use your [“innovation tokens” versus using “boring technology”](https://mcfunley.com/choose-boring-technology), based on product needs and future differentiation, and dedicate time and energy towards that innovation.
- Be an advocate for the developer experience in their team. Notice when things are slowing the team down, and share opportunities (and/or problem-solve) to speed up.
- Understand the surface area of the team (architecture, bugs, risks) and prioritize and translate to action.
- Define AoRs to represent the technical system, partnering with EMs on who should own them.

</div>

#### Technical Culture (Technical Leadership)

Build a culture of knowledge-sharing and collaboration to level-up the technical contributions from all teammates.

<div class="examples">

- Facilitates design review on the team – from micro (code reviews) to macro (design docs) – to balance velocity with growth & mentorship.
- Models great communication about technical concepts and risks with non-technical stakeholders.

</div>

#### Roadmap Feasibility & Execution (Technical Leadership)

Ensure the roadmap is built in a feasible way for the team, incorporate necessary technical investments, and be realistic considering existing bandwidth and dependencies.

<div class="examples">

- Translate goals into digestible chunks of work/projects for the team for at least a one episode horizon, and ensure the team adjusts its execution plan when new challenges arise.
- Identify and advocate for impactful technical investments that align with team long-term strategy and goals.

</div>
</div>