"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import NextImage from "next/image";

// ── Data ──────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "✦ 65% Task-Time Reduction ✦",
  "✦ $20M+ Operational Savings ✦",
  "✦ ~375K+ Labor Hours Reclaimed ✦",
  "✦ 5 Years Enterprise UX ✦",
  "✦ Active DoD Secret Clearance ✦",
  "✦ Research-Driven Design ✦",
  "✦ Design Systems Expertise ✦",
  "✦ M.S. UX & HCI — University of Michigan ✦",
];

// ─────────────────────────────────────────────────────────────
// MEDIA GUIDE
// Each project has a `media` array. Each item is one panel in the
// right-hand column of the case study modal. Replace placeholder
// values with your real content — see PORTFOLIO-MEDIA-GUIDE.md
// for full instructions.
//
// item shape:
//   { type: "image", src: "URL", caption: "..." }   — real image
//   { type: "placeholder", label: "...", note: "..." } — swap me out
//
// ─── HOW TO ADD HERO IMAGES (the big card previews) ─────────
// Each project has a `heroImage` field, currently set to null.
// To add one:
//
//   1. Put your image file in your project's public/ folder, e.g.:
//        public/case-studies/PBL/hero.jpg
//
//   2. In the project object below, change:
//        heroImage: null,
//      to:
//        heroImage: "/case-studies/PBL/hero.jpg",
//
//   Note: the path does NOT include "public/" — Next.js serves
//   files in public/ from the root automatically.
//
//   Good sizes: at least 800px wide, landscape (16:10 or 16:9).
//   The image will be displayed with object-fit: cover.
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "pbl",
    year: "2022–2023",
    tag: "iOS · Enterprise UX",
    title: "Puckboard Logging",
    subtitle: "The future of post-mission paperwork.",
    impact: "3hrs → <10min",
    impactLabel: "Task Time",
    color: "#00d4ff",
    emoji: "✈️",
    wip: false,
    heroImage: "/case-studies/PBL/hero.png", // Replace with path e.g. "/case-studies/PBL/hero.jpg"
    featuredArtifact: {
      src: "/case-studies/PBL/651Process.png",
      caption: "Paper Form 651 (left) vs. redesigned digital input (right) — decoupled the input experience from the output format, capturing the same data through a structured, validated flow instead of mirroring the physical form field-by-field",
    },
    role: "Product Designer · Cross-functional team of 1 designer, multiple iOS engineers, and a PM · Active DoD Secret Clearance required",
    contributions: [
      "Owned the AF Form 651 digitization flow — the highest-risk workflow in the product because errors in this form cascade into official records. Chose structured, validated inputs over a flexible freeform approach after field research showed the majority of errors came from ambiguous entry points",
      "Designed fuel metrics tracking workflows that directly enabled $20M+ in operational cost savings — the key insight was that accurate capture at point-of-entry eliminated the reconciliation step that previously consumed hours of SARM time per mission",
      "Contributed to Aircrew Editor interaction patterns, where the core trade-off was speed vs. safety: we opted for confirmation steps on role assignments despite the extra tap, because mis-assignments had real operational consequences",
      "Designed the PDF generation experience — a deceptively complex problem where the constraint wasn't layout but data trust: outputs had to be print-ready and compliance-grade, meaning every digital input needed traceable validation",
      "Improved evaluation import workflows by aligning system terminology with aircrew mental models — a change that measurably improved task completion after we stopped using database field names in the UI",
      "Collaborated closely with engineers and senior designers to iterate based on field usability testing, often navigating competing priorities between engineering feasibility, compliance requirements, and user preference",
    ],
    links: [
      {
        label: "View on App Store (iPad Only)",
        url: "https://apps.apple.com/us/app/puckboard-logging/id1525979103",
      },
      { label: "Product Website ↗", url: "https://puckboard.dso.mil/pbl/" },
      { label: "R&D 100 Award - 2023 ↗", url: "https://www.rdworldonline.com/rd-100-2023-winner/puckboard/" },
    ],
    media: [
      {
        type: "image",
        src: "/case-studies/PBL/PBL_old_workflow.jpg",
        caption: "Mapped the end-to-end post-mission logging workflow to identify 11 manual steps, redundant data entry, and system hand-offs — directly informing prioritization of automation, pre-population, and workflow consolidation",
      },
      {
        type: "image",
        src: "/case-studies/PBL/PBL_new_workflow.jpg",
        caption: "Reworked legacy manual workflows with a new digital data-first flow to eliminate redundant steps and reduce documentation time from 3+ hours to under 10 minutes",
      },
      {
        type: "image",
        src: "/case-studies/PBL/PBL_PDF_Navigation_V3_page-0001.jpg",
        caption: "Early design exploration of PDF generation workflows, used to define how structured inputs would translate into standardized, compliance-ready outputs for official records",
      },
      {
        type: "image",
        src: "/case-studies/PBL/AircrewSearch.png",
        caption: "Final handed-off designs of Aircrew Search, a critical backbone feature of the Puckboard workflow allowing for search queries to be made of unit rosters, as well as official Air Force Databases like ARMS & ARTEMIS",
      },
      {
        type: "image",
        src: "/case-studies/PBL/651.GIF",
        caption: "Translated AF Form 651 from a paper-based form into a structured digital flow with validated inputs and pre-populated data, reducing ambiguity and minimizing common entry errors observed in manual workflows",
      },
      {
        type: "image",
        src: "/case-studies/PBL/pdf.GIF",
        caption: "Final PDF generation workflow, where validated system inputs dynamically produce accurate, standardized outputs — eliminating manual formatting and ensuring consistency across mission records",
      },
    ],
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    overview:
      "Puckboard Logging is an iPad-based application that digitizes post-mission flight documentation for the U.S. Air Force. The business case was straightforward: every hour aircrew spent on paperwork was an hour not spent on mission readiness — and with 3+ hours of manual documentation per mission across thousands of flights annually, the operational cost was staggering. I contributed to the design of several core workflows, including AF Form 651 digitization, fuel metrics tracking, and PDF generation. The central design challenge wasn't just 'make forms digital' — it was deciding what to automate vs. what to keep manual. We chose to aggressively pre-populate and validate data at the point of entry rather than build a flexible freeform tool, because our research showed that the majority of post-mission errors came from re-keying data that already existed elsewhere. That bet on structured input over flexibility paid off: documentation time dropped from 3+ hours to under 10 minutes, and the improved data accuracy directly contributed to $20M+ in operational fuel savings through better downstream reporting.",
    metrics: [
      { value: "3hrs → <10min", label: "Documentation Time" },
      { value: "$20M+", label: "Operational Fuel Savings" },
      { value: "~375K & Counting", label: "Labor Hours Reclaimed" },
      { value: "Air Mobility Command Wide", label: "Adoption" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "Understanding a Workflow Built on Friction",
        body: "The first thing I learned in discovery was that the problem wasn't 'paperwork is slow' — it was that post-mission documentation touched at least three disconnected systems, and every hand-off introduced error risk that compounded downstream. Aircrew were spending more time on admin than on debrief, and the knock-on effect was that flight hour data feeding into maintenance and fuel reporting was unreliable. I mapped the end-to-end workflow and identified that the majority of the 11 manual steps involved re-entering data that already existed in another system. That finding reframed the entire product strategy: this wasn't a form digitization project, it was a data integration project. The question became which integration points would deliver the most value with the least engineering lift — and that trade-off analysis drove our first three sprints.",
        callout: {
          type: "quote",
          text: '"We spend more time on paperwork after a flight than we do on the actual debrief."',
          attr: "— C-17 Pilot, contextual interview",
        },
      },
      {
        phase: "02 — Define",
        title: "From Observation to Structured Opportunity Areas",
        body: "We had three realistic approaches on the table: (1) digitize existing forms as-is and add validation later, (2) build a flexible data entry tool and let users adapt, or (3) restructure workflows around pre-populated, validated inputs from the start. Option 1 was fastest to ship but would have locked in the same error-prone patterns. Option 2 appealed to stakeholders who wanted 'flexibility,' but our research showed that flexibility was exactly what caused errors — aircrew didn't want choices, they wanted correct defaults. I advocated for Option 3 despite the higher engineering cost, because the data showed that the majority of documentation errors originated from redundant manual entry. The trade-off was a longer build cycle, but the payoff was a system that could be trusted as a source of truth — which unlocked the $20M fuel savings through reliable downstream reporting that wasn't possible before.",
        callout: {
          type: "stat",
          stats: [
            { v: "11+", l: "Manual steps in old flow" },
            { v: "3+", l: "Disconnected systems per mission" },
            { v: "Majority", l: "Of errors from re-keyed data" },
          ],
        },
      },
      {
        phase: "03 — Ideate",
        title: "Designing for Real-World Constraints",
        body: "The real design constraint wasn't screen layout — it was operational context. Aircrew complete documentation on iPads in cramped cockpits, often one-handed, sometimes in turbulence, and frequently under time pressure to clear the aircraft for the next crew. The early 651 interface mirrored the physical form almost directly — field-for-field, section-for-section. It felt like a safe bet because it matched the mental model aircrew already had. But testing showed it carried over all the friction of the paper form along with the familiarity. We could capture the same data in a more user-friendly flow and map the inputs to the official form output on the backend. That shift — decoupling the input experience from the output format — was a turning point for the product's usability. I also designed around progressive disclosure with persistent state: every field auto-saved, and users could leave and re-enter at any point without losing work. This added engineering complexity, but eliminated the most common complaint from our first field test — losing progress when interrupted mid-flow.",
        callout: {
          type: "principles",
          items: [
            "Auto-save everything — interruptions are the norm, not the edge case",
            "Reduce inputs, don't just digitize them",
            "Align with operational mental models, not database schemas",
            "Design for one-handed, constrained-environment use",
          ],
        },
      },
      {
        phase: "04 — Design & Test",
        title: "Learning from Real Users in Operational Contexts",
        body: "Testing with active-duty aircrew surfaced a problem I didn't anticipate: domain language mismatch. Early designs used terminology pulled from database schemas and requirements docs — technically accurate but completely misaligned with how aircrew actually talked about their work. Task completion rates on the evaluation import flow improved significantly after I remapped every label to match operational vocabulary. This was a humbling lesson in the gap between 'correct' and 'usable.' The other major testing insight was about trust: aircrew were initially skeptical of pre-populated data because they couldn't verify its source. Adding a subtle provenance indicator ('auto-filled from ARMS') resolved the hesitation without adding interaction cost. These weren't flashy design changes, but they directly impacted adoption — users who trust the data don't build workarounds.",
        callout: {
          type: "quote",
          text: '"Probably the best aspect of Form 8s [in Puckboard] that we\'ve had so far is it allows commanders to sign Form 8s on the road and they don\'t have to be at their desk... We were able to fill & sign a Form 8 in 12 minutes whereas G/TIMS takes 12 minutes probably just to sign in."',
          attr: "— C-17 Loadmaster, usability test session",
        },
      },
      {
        phase: "05 — Deliver",
        title: "Contributing to a System with Measurable Impact",
        body: "The shipped product reduced post-mission documentation from 3+ hours to under 10 minutes — a 65% task-time reduction that translated directly into operational capacity. But the number I'm proudest of is the $20M+ in fuel savings, because that wasn't a UX metric — it was a business outcome made possible by the design decision to prioritize data accuracy over speed-to-ship. Reliable fuel data flowing from validated digital inputs enabled reporting that simply wasn't possible with the old paper-based system. Across Air Mobility Command, the product has reclaimed an estimated 375,000+ labor hours — time that went back to mission readiness instead of paperwork. This project taught me that the highest-leverage design decisions often aren't about the interface at all. They're about what data to capture, how to validate it, and where to route it — the system design underneath the screens.",
        callout: {
          type: "stat",
          stats: [
            { v: "65%", l: "Task time reduction" },
            { v: "$20M+", l: "Savings" },
            { v: "375K+ hrs", l: "Given Back to Users" },
          ],
        },
      },
    ],
    tags: [
      "iOS",
      "Contextual Inquiry",
      "Interaction Design",
      "Usability Testing",
      "Figma",
      "DoD",
    ],
  },
  {
    id: "mydocs",
    year: "2024–2025",
    tag: "Enterprise UX · Web · Secure Document Storage",
    title: "My Docs",
    subtitle: "Career documents that follow the mission — and you.",
    impact: "0→1",
    impactLabel: "New Feature",
    color: "#a78bfa",
    emoji: "🗂️",
    wip: false,
    heroImage: "/case-studies/MyDocs/hero.png", // Replace with path e.g. "/case-studies/MyDocs/hero.jpg"
    featuredArtifact: {
      src: "/case-studies/MyDocs/Artifact4.png",
      caption: "Shipped FEF member view — surfaces real-time evaluation status, pending actions, and completion state. The 'Action Required' and 'Status' columns were the core design decision: surfacing urgency and ownership at the list level instead of making members hunt for what needs attention",
    },
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    role: "Lead Product Designer · Puckboard Personnel (web) · Active DoD Secret Clearance required · Cross-functional team of designers, web engineers, and a PM",
    contributions: [
      "Defined the information architecture for My Docs — document taxonomy, folder structure, and access model — resolving a fundamental tension between individual privacy and command-level visibility",
      "Designed the Flight Evaluation Folder (FEF) lifecycle system — chose a structured state-machine approach over flexible tagging after testing showed that ambiguous ownership was the primary driver of missed review deadlines in the legacy process",
      "Designed the automatic document deposit system — the key product decision was zero-touch association vs. manual filing, which eliminated the failure mode that caused most document loss during PCS transfers",
      "Architected the PCS-persistent document model — the most contentious design decision, requiring stakeholder alignment across three organizational levels to shift from unit-owned to member-owned records",
      "Designed role-differentiated views of shared data (member vs. Stan/Eval vs. command) — same underlying records, entirely different information hierarchy based on what each role actually needs to act on",
    ],
    links: [
      { label: "R&D 100 Award - 2023 ↗", url: "https://www.rdworldonline.com/rd-100-2023-winner/puckboard/" },
    ],
    media: [
      {
        type: "image",
        src: "/case-studies/MyDocs/MetricsStrategy.png",
        caption: "Evaluation Process Metrics captured during an on-site base visit — comparing Time-on-Task between legacy workflows (17+ hours across 9 steps) and the Puckboard-integrated flow (≈6 hours), quantifying a 65% reduction in task completion time. Created this visual breakdown to communicate impact clearly to stakeholders and non-designers at a glance — translating raw TOT data into structured comparisons, phased timelines, and executive-ready framing that made the case for the connected-system approach without requiring technical context.",
      },
      {
        type: "image",
        src: "/case-studies/MyDocs/Artifact4.png",
        caption: "Shipped member-facing FEF view in Puckboard Personnel — surfaces real-time evaluation status, pending signature actions, and completion state across a member's full record. The 'Action Required' and 'Status' columns were the core design decision: rather than making members hunt for what needed attention, the system surfaces urgency and ownership explicitly at the list level.",
      },
      {
        type: "image",
        src: "/case-studies/MyDocs/Artifact3.png",
        caption: "The corresponding Stan/Eval office user view of the same FEF record — same underlying data, entirely different information hierarchy. Officers need aggregate visibility and management controls; members need action clarity. Designing role-appropriate views of shared data was one of the central interaction challenges of the system.",
      },
      {
        type: "image",
        src: "/case-studies/MyDocs/Artifact7.png",
        caption: "Early define-phase requirements synthesis across three user groups — Training, Stan/Eval, and general PBLO needs. This session surfaced the core tension that shaped the system architecture: documents needed to behave differently depending on who owned them, who created them, and where they needed to go. The member-centric ownership model emerged directly from this work.",
      },
      {
        type: "image",
        src: "/case-studies/MyDocs/Artifact5.png",
        caption: "System-level data flow mapping My Docs within the full Puckboard suite — showing how documents generated across PB Logging, PB Office, and PB Scheduling route to the correct member's inbox and archive. Produced during define to align design and engineering on ownership boundaries before any UI work began.",
      },
      {
        type: "image",
        src: "/case-studies/MyDocs/Artifact1.png",
        caption: "End-to-end FEF workflow map spanning Stan/Eval, Training, & SARM offices as they interact with My Docs & the FEF folder — documenting 14+ discrete actions, branching paths for major vs. minor discrepancies, and cross-product dependencies. Built collaboratively with domain experts to establish a shared source of truth before screens were designed; directly informed the lifecycle states and status model in the shipped product.",
      },
    ],
    overview:
      "My Docs exists because the Air Force had a career continuity crisis hiding in plain sight. Service members were losing access to their own evaluation records during PCS transfers — not because the data didn't exist, but because it was owned by units, not people. When a member transferred, their documents effectively stayed behind. The downstream impact was real: delayed promotions, incomplete evaluation histories, and hours of administrative recovery work per affected member. I led the end-to-end design of My Docs, but the hardest decision wasn't about UI — it was convincing stakeholders to fundamentally change the ownership model from unit-centric to member-centric. This meant rearchitecting how documents were associated, permissioned, and persisted across the entire Puckboard ecosystem. Within this system, I owned the Flight Evaluation Folder (FEF), the most complex subsystem, where I transformed Form 8 evaluations from static files into a managed lifecycle with built-in review workflows, status tracking, and role-appropriate views — reducing the end-to-end evaluation process from 17+ hours across 9 steps to approximately 6 hours, a 65% time-on-task reduction.",
    metrics: [
      { value: "0→1", label: "Net-New System" },
      { value: "65%", label: "Eval Process Time Reduction" },
      { value: "17hrs → ~6hrs", label: "End-to-End Eval Cycle" },
      { value: "Career-Spanning", label: "Document Persistence" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "Lost in the Locker: The Document Problem",
        body: "Through interviews with aircrew and administrative personnel, I uncovered a problem that was simultaneously well-known and poorly understood. Everyone knew documents got lost during PCS transfers. But no one had mapped why. The root cause wasn't carelessness — it was architectural: documents were owned by units, not individuals, so when a member transferred, their records depended on a manual hand-off between outgoing and incoming admin offices. One Stan/Eval officer estimated that a significant portion of evaluation records had gaps attributable to transfer failures. The business impact was significant: incomplete records delayed promotions, created compliance risk, and generated hours of recovery work per affected member. I reframed the problem from 'we need better file storage' to 'we need to change who owns these records and how they travel' — which became the strategic foundation for every design decision that followed.",
        callout: {
          type: "quote",
          text: '"Folks don`t even really know how to access their FEF`s in the current system"',
          attr: "— Aircrew member, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Designing a System, Not a Feature",
        body: "I had two viable architecture options: (1) keep the existing unit-ownership model and add a sync mechanism for transfers, or (2) fundamentally restructure ownership so documents are permanently tied to individuals. Option 1 was lower-risk and wouldn't require stakeholder buy-in beyond the product team. But it would have papered over the root cause — documents would still be unit-owned, just copied better. I chose to advocate for Option 2 despite the political complexity, because the research clearly showed that transfer-triggered sync would still fail in a meaningful percentage of cases where the receiving unit's admin processes were delayed. Member-centric ownership eliminated the failure mode entirely. The hardest part wasn't the design — it was the three rounds of stakeholder alignment needed to get organizational buy-in for changing the ownership model. I used the data from discovery (the frequency of record gaps) to make the case, and built a permission model that gave commanders the visibility they needed without compromising member ownership.",
        callout: {
          type: "principles",
          items: [
            "Member-centric ownership — documents follow the person, not the unit",
            "Automatic deposit — Puckboard-generated docs associate without manual action",
            "Lifecycle-aware records, not static files",
            "Permissioning based on role and context",
          ],
        },
      },
      {
        phase: "03 — Design & Test",
        title: "Turning Static Records into a Managed Lifecycle",
        body: "The FEF was where the design got genuinely hard. Form 8 evaluations aren't just documents — they're workflows with multiple actors, deadlines, review stages, and branching logic for discrepancies. My first design iteration gave users too much flexibility in how they moved evaluations through review stages. Testing revealed that this flexibility created ambiguity about who owned the next action — which was exactly the problem that caused missed deadlines in the legacy process. I scrapped the flexible model and redesigned around explicit state transitions: every evaluation has a clear status, a clear owner, and a clear next action. This was less 'elegant' but dramatically more effective. The other critical decision was designing role-differentiated views. Stan/Eval officers need aggregate visibility across dozens of members; individual members need clarity on their own pending actions. Same underlying data, entirely different information hierarchy. Testing validated this approach: officers stopped asking 'where is this evaluation?' because the system surfaced status proactively.",
        callout: {
          type: "stat",
          stats: [
            { v: "65%", l: "Eval cycle time reduction" },
            { v: "17hrs → ~6hrs", l: "End-to-end process" },
            { v: "0", l: "Ownership ambiguity in new flow" },
          ],
        },
      },
      {
        phase: "04 — Deliver",
        title: "Establishing a Persistent Record of a Service Member's Career",
        body: "My Docs shipped as foundational infrastructure within Puckboard Personnel, and the FEF transformed evaluation tracking from a manual, error-prone process into a structured system with measurable impact. The end-to-end evaluation cycle dropped from 17+ hours across 9 manual steps to approximately 6 hours — a 65% reduction in time-on-task, validated through on-site measurement during a base visit. More importantly, the member-centric ownership model eliminated PCS document loss as a failure mode entirely. Documents now persist with the individual across their career, regardless of how many times they transfer. The automatic deposit system means Puckboard-generated paperwork routes to the correct member's archive without manual filing — removing the human error that caused most document gaps. Looking back, the highest-leverage decision wasn't any single screen or flow — it was the early architectural choice to restructure ownership. Everything else followed from that.",
        callout: {
          type: "quote",
          text: '"We have done multiple Form 8`s and the process was very easy to use. I think the entire process is very seamless... I think this part of your product is very good."',
          attr: "— MSgt Loadmaster, post-launch",
        },
      },
    ],
    tags: [
      "Enterprise UX",
      "Web",
      "Information Architecture",
      "Interaction Design",
      "DoD",
      "Personnel",
      "Figma",
    ],
  },
   {
    id: "parkpal",
    year: "2022",
    tag: "Accessibility · Mobile",
    title: "ParkPal",
    subtitle: "Getting outside shouldn't have barriers.",
    impact: "A11y First",
    impactLabel: "Design Approach",
    color: "#10b981",
    emoji: "🌲",
    heroImage: "/case-studies/parkpal/hero.jpg", // Replace with path e.g. "/case-studies/parkpal/hero.jpg"
    featuredArtifact: {
      src: "/case-studies/parkpal/Design+1.webp",
      caption: "Hi-fi trail detail view with accessibility grade, surface type, and real-time condition data — the core screen that proves the graded, multi-dimensional accessibility model no competitor offers",
    },
    role: "UX Designer & Researcher · Capstone Project, University of Michigan School of Information",
    contributions: [
      "4 participants interviewed across 3 rounds (12 total sessions) — elderly and mobility-impaired, recruited for range of mobility constraints (wheelchair, walker, cane, reduced stamina)",
      "Competitive analysis of AllTrails, Google Maps, Apple Maps, and MapQuest — identified that every competitor treated accessibility as a binary filter rather than a graded, multi-dimensional data type",
      "Defined the core product differentiation: trail-level and feature-level accessibility grading (not just 'accessible yes/no'), with surface type, grade, and condition as first-class attributes",
      "Designed community contribution system for crowdsourced trail condition updates — chose a structured input model over freeform reviews after testing showed older users abandoned open-text contribution flows",
      "Two rounds of moderated usability testing with the same participant pool, enabling direct comparison of task completion rates across iterations (40% improvement round-over-round)",
      "WCAG AA compliance throughout — accessibility standards applied to the accessibility product, not just the content",
    ],
    links: [
      {
        label: "Watch Demo ↗",
        url: "https://www.youtube.com/watch?v=WLHUd0M-6Cc",
      },
    ],
    media: [
      {
        type: "image",
        src: "/case-studies/parkpal/Research+Process.webp",
        caption: "Research Process Overview",
      },
      {
        type: "image",
        src: "/case-studies/parkpal/Findings.webp",
        caption: "Summary of Findings",
      },
      {
        type: "image",
        src: "/case-studies/parkpal/Prototyping+and+Evaluation.webp",
        caption: "From Research to initial prototypes, wireframing & testing",
      },
      {
        type: "image",
        src: "/case-studies/parkpal/Design+1.webp",
        caption: "Hi-Fi: trail detail view with accessibility grade, surface type, and condition info",
      },
      {
        type: "image",
        src: "/case-studies/parkpal/Design+2.webp",
        caption: "Hi-Fi: Emergency Services Features",
      },
      {
        type: "image",
        src: "/case-studies/parkpal/Design+3.webp",
        caption: "Hi-Fi: Trip-Planning",
      },
    ],
    overview:
      "The accessibility information gap for parks and trails wasn't just a usability problem — it was an equity problem with a clear market gap. Competitors like AllTrails had millions of users but treated accessibility as a filter, not a first-class data type. Google Maps had wheelchair-accessible routing for transit but nothing for trails. I identified that the core product opportunity wasn't 'AllTrails but accessible' — it was building a planning tool that gives mobility-impaired users the confidence to commit to a trip before leaving home, because for this population, discovering inaccessibility on arrival means a wasted trip with no fallback. ParkPal was designed accessibility-first from research through delivery, not retrofitted.",
    metrics: [
      { value: "4", label: "Research Participants" },
      { value: "3", label: "Interview Rounds (12 Sessions)" },
      { value: "↑ 40%", label: "Task Completion Improvement" },
      { value: "WCAG AA", label: "Compliance Target" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "A Gap Nobody Had Filled Well",
        body: "I started with a competitive audit and found the same pattern everywhere: accessibility was treated as a checkbox filter, not a data type. AllTrails let you filter for 'wheelchair accessible' trails, but that binary didn't capture the reality — a paved path with a 12% grade is technically 'accessible' but practically unusable for most wheelchair users. Google Maps had accessible transit routing but nothing for trails or parks. The market gap wasn't 'no app exists' — it was that every existing solution used the wrong data model. I conducted interviews with 4 participants across 3 rounds (12 total sessions) — elderly and mobility-impaired — supplemented by on-site observation at local parks. The most consistent finding was that users needed to make go/no-go decisions before leaving home, and the information available to them was either absent, outdated, or too vague to trust.",
        callout: {
          type: "quote",
          text: '"I just want to know if I can get my wheelchair to the picnic area. Nobody tells you that."',
          attr: "— Research participant, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "The Core Insight: It Has to Work Before You Leave Home",
        body: "The central insight from synthesis was that this had to be a planning tool first, not a navigation tool. For able-bodied users, discovering a bad trail means a minor inconvenience. For someone in a wheelchair, it means a wasted trip — potentially hours of preparation and travel with no alternative. That reframing eliminated several feature directions we'd been considering (live trail navigation, social features) and focused the product on the pre-trip decision: Can I do this trail? What will I encounter? What's the surface like right now? I chose to model accessibility as a graded, multi-dimensional score (surface type, grade, width, rest stop frequency, condition) rather than a binary — because the research showed that different users had different thresholds and needed to evaluate for themselves rather than trust a yes/no label.",
        callout: {
          type: "principles",
          items: [
            "Graded accessibility scores, not binary filters",
            "Surface type and condition as first-class data",
            "Structured community input over freeform reviews",
            "Pre-trip confidence over in-trail navigation",
          ],
        },
      },
      {
        phase: "03 — Design & Test",
        title: "Two Rounds of Testing with Target Users",
        body: "I ran two iterative prototype rounds with the same participant pool to enable direct comparison. Three major changes between rounds drove measurable improvement: First, I simplified the trail detail hierarchy after participants consistently scrolled past the accessibility data to find surface type — so I elevated surface material to the top of the detail view. Second, I added explicit surface-material callouts (paved, gravel, dirt, boardwalk) as filterable attributes after every single participant asked about pavement in round one. Third, I redesigned the community contribution flow from freeform text to structured inputs (dropdowns, condition selectors) after observing that older participants abandoned the open-text version mid-task — structured input reduced contribution drop-off and produced more useful data for other users. Task completion improved 40% between rounds.",
        callout: {
          type: "stat",
          stats: [
            { v: "2", l: "Usability test rounds" },
            { v: "↑ 40%", l: "Task completion improvement" },
            { v: "12", l: "Sessions across 4 participants" },
          ],
        },
      },
      {
        phase: "04 — Deliver",
        title: "Recognized for Accessibility-First Rigor",
        body: "ParkPal was recognized within the Michigan School of Information for its research rigor and accessibility-first approach. But the outcome I care most about was the participant feedback: users consistently described the product as something built for them, not adapted for them. That distinction matters because it reflects the core design philosophy — accessibility wasn't a compliance layer applied to a mainstream product, it was the foundation the entire product was built on. The competitive analysis showed a clear market gap that still exists: no major trail or park app treats accessibility as a graded, multi-dimensional data type. If I were to take this further, the highest-leverage next step would be the community contribution system — crowdsourced condition updates are the only scalable way to keep accessibility data current, and the structured input model tested well enough to support it.",
        callout: {
          type: "quote",
          text: '"This feels like it was actually made for me, not just adapted for me."',
          attr: "— Usability test participant, final round",
        },
      },
    ],
    tags: [
      "Accessibility",
      "User Research",
      "Journey Mapping",
      "Mobile UX",
      "Usability Testing",
      "WCAG",
    ],
  },
   {
    id: "pmr",
    year: "2023–2024",
    tag: "Enterprise UX · Web · Dashboard",
    title: "Mission Review Dashboard",
    subtitle: "Every mission accounted for.",
    impact: "1,000,000+",
    impactLabel: "Events Tracked Monthly",
    color: "#38bdf8",
    emoji: "📊",
    wip: true,
    disabled: true, // ← flip to false when case study content is ready
    heroImage: null, // Replace with path e.g. "/case-studies/PMR/hero.jpg"
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    role: "Lead Product Designer · Cross-functional team of designers, web engineers, and a PM · Active DoD Secret Clearance required",
    contributions: [
      "Post-Mission Review dashboard — central hub routing mission event data to systems of record",
      "SARM-facing review and submission workflows",
      "Flight Hours, Training Accomplishments, Form 781, and Form 1522 data review flows",
      "[ Add additional contributions as you document the work ]",
    ],
    links: [
      { label: "R&D 100 Award - 2023 ↗", url: "https://www.rdworldonline.com/rd-100-2023-winner/puckboard/" },
    ],
    media: [
      {
        type: "placeholder",
        label: "PMR Dashboard — main hub view",
        note: "Add a redacted or abstracted screenshot of the dashboard landing state",
      },
      {
        type: "placeholder",
        label: "SARM review workflow",
        note: "Add a flow diagram or screen showing the review and submission steps",
      },
      {
        type: "placeholder",
        label: "Form 781 data review panel",
        note: "Add a redacted example of the Form 781 review interface",
      },
    ],
    overview:
      "[ Add overview here. ] The PMR Dashboard is the central hub through which all scheduled mission event data — Flight Hours, Training Accomplishments, AF Form 781s, Form 1522s, and more — flows on its way to being entered into systems of record by SARMs (Squadron Aviation Resource Managers). Designed as part of Puckboard Logging, it brings structure and accountability to the final mile of post-mission data entry.",
    metrics: [
      { value: "0→1", label: "New Feature" },
      { value: "Web", label: "Platform" },
      { value: "SARM", label: "Primary User" },
      { value: "DoD", label: "Context" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "[ Add discovery narrative here ]",
        body: "[ Describe what you learned about the SARM workflow — how mission event data was being handled before the PMR Dashboard, what pain points existed, and what research methods you used to uncover them. ]",
        callout: {
          type: "quote",
          text: '"[ Add a representative quote from a SARM or stakeholder interview here. ]"',
          attr: "— SARM, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "[ Add define narrative here ]",
        body: "[ Describe how you mapped the full data flow from mission event to system of record — the forms involved, the hand-offs, and the validation requirements. Note any key tensions or constraints that shaped the design direction. ]",
        callout: {
          type: "principles",
          items: [
            "[ Design principle 1 ]",
            "[ Design principle 2 ]",
            "[ Design principle 3 ]",
            "[ Design principle 4 ]",
          ],
        },
      },
      {
        phase: "03 — Design & Test",
        title: "[ Add design and testing narrative here ]",
        body: "[ Describe how you approached the dashboard information architecture, how you iterated on the layout and workflows, and what testing revealed. ]",
        callout: {
          type: "stat",
          stats: [
            { v: "[ X ]", l: "[ Stat label ]" },
            { v: "[ X ]", l: "[ Stat label ]" },
            { v: "[ X ]", l: "[ Stat label ]" },
          ],
        },
      },
      {
        phase: "04 — Deliver",
        title: "[ Add delivery narrative here ]",
        body: "[ Describe what shipped, how SARMs responded, and what measurable impact the PMR Dashboard had on the post-mission data entry process. ]",
        callout: {
          type: "quote",
          text: '"[ Add a quote from a SARM or stakeholder after launch. ]"',
          attr: "— [ Role ], post-launch",
        },
      },
    ],
    tags: [
      "Enterprise UX",
      "Web",
      "Dashboard Design",
      "Interaction Design",
      "DoD",
      "Figma",
    ],
  },
  {
    id: "nimbus",
    year: "2023",
    tag: "Design Systems · Web + iOS",
    title: "Nimbus Design System",
    subtitle: "One system. Every surface.",
    impact: "2 Platforms",
    impactLabel: "Web + iOS",
    color: "#8b5cf6",
    emoji: "⚡",
    wip: true,
    disabled: true, // ← flip to false when case study content is ready
    heroImage: null, // Replace with path e.g. "/case-studies/nimbus/hero.jpg"
    role: "Product Designer · Collaborated with iOS engineers, web engineers, and product designers across multi-product suite",
    contributions: [
      "Token-based color, typography, and spacing foundation across iOS and web",
      "42+ Figma component library with full variant and state coverage",
      "Storybook component documentation for engineering handoff",
      "iOS-to-web translation guidelines — documented rationale for every cross-platform decision",
      "Custom icon library for the Puckboard product suite",
    ],
    links: [],
    media: [
      {
        type: "placeholder",
        label: "Token system — color & typography",
        note: "Add a Figma export showing the token hierarchy (primitives → semantic → component)",
      },
      {
        type: "placeholder",
        label: "Component library sample — variant grid",
        note: "Add a Figma screenshot showing a component with all interactive states",
      },
      {
        type: "placeholder",
        label: "iOS ↔ Web translation side-by-side",
        note: "Add a comparison showing an iOS UIKit component next to its Nimbus web equivalent",
      },
    ],
    overview:
      "Nimbus is the design system I helped champion across a cross-functional design and engineering team, serving as the shared language across all four Puckboard branches — Logging (iOS), Scheduling, Office, and Personnel (web). The core challenge: Logging was built on Apple UIKit and Swift, and we had no access to those native components on the web. Nimbus had to make every surface feel like one product without ever actually sharing a component.",
    metrics: [
      { value: "4 Products", label: "Logging · Scheduling · Office · Personnel" },
      { value: "iOS + Web", label: "Platform Parity" },
      { value: "Token-based", label: "Foundation" },
      { value: "Storybook", label: "Eng Handoff" },
    ],
    phases: [
      {
        phase: "01 — Audit",
        title: "Quantifying the Inconsistency Problem",
        body: "Before designing anything, I contributed to an audit of the existing product suite across all platforms. We catalogued every unique color value, type style, spacing unit, and component pattern in use. The result was sobering: significant visual drift between the iOS app and web products, no shared tokens, and engineering teams on each surface making independent decisions about how to interpret the same UI patterns.",
        callout: {
          type: "stat",
          stats: [
            { v: "3", l: "Products audited" },
            { v: "0", l: "Shared design tokens" },
            { v: "0", l: "Documented component standards" },
          ],
        },
      },
      {
        phase: "02 — The Hard Problem",
        title: "Matching UIKit Without UIKit",
        body: "Puckboard Logging's iOS UI is built on Apple's UIKit — native controls, native gestures, native affordances. The web products had to feel like the same family without access to any of those elements. I worked closely with design and engineering to define a 'design translation layer': a set of Nimbus web components that replicated the visual weight, interaction feel, and spatial logic of the iOS components without being pixel-for-pixel copies.",
        callout: {
          type: "principles",
          items: [
            "Match iOS visual weight & spacing rhythm",
            "Replicate interaction feel, not pixel accuracy",
            "Shared semantic color tokens across platforms",
            "Document the 'why' behind every translation decision",
          ],
        },
      },
      {
        phase: "03 — Build",
        title: "Component Library with Cross-Platform Parity",
        body: "Working in close collaboration with the engineering team, I built Nimbus components in Figma with full variant coverage — every interactive state, every platform context, every size. Each component was documented with usage guidelines, dos and don'ts, and explicit notes on how it mapped to its iOS counterpart. The library was then implemented in Storybook for engineering handoff, with components reviewed alongside the iOS equivalents to validate visual parity.",
        callout: {
          type: "stat",
          stats: [
            { v: "42+", l: "Core components" },
            { v: "100%", l: "State coverage" },
            { v: "iOS-mapped", l: "Every web component" },
          ],
        },
      },
      {
        phase: "04 — Deliver",
        title: "A Shared Language Across Platforms",
        body: "Nimbus became the default starting point for every new feature across the suite. Design and engineering teams on Scheduling and Office could move faster knowing their decisions were grounded in documented standards — and that those standards had been validated against the iOS product. Cross-platform design reviews went from lengthy debates about inconsistencies to focused conversations about new problems.",
        callout: {
          type: "quote",
          text: '"Nimbus cut our design review cycle in half. The answers are already in the system."',
          attr: "— Senior Engineer, post-adoption review",
        },
      },
    ],
    tags: [
      "Design Systems",
      "Figma",
      "Storybook",
      "Iconography",
      "Documentation",
      "iOS",
    ],
  },
  {
    id: "pbt",
    year: "2025–Present",
    tag: "Enterprise UX · Web · Learning Experience Design",
    title: "Puckboard Testing",
    subtitle: "Bringing test management into the modern era.",
    impact: "In Progress",
    impactLabel: "Active Design",
    color: "#f97316",
    emoji: "🧪",
    wip: true,
    disabled: true, // ← flip to false when case study content is ready
    heroImage: null, // Replace with path e.g. "/case-studies/PBT/hero.jpg"
    role: "Lead Product Designer · Same cross-functional team as Puckboard Logging — building on established relationships with domain experts and end users",
    contributions: [
      "[ Add specific contributions here as the work develops ]",
    ],
    links: [],
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    media: [
      {
        type: "placeholder",
        label: "Discovery — coordinator workflow audit",
        note: "Add a photo, whiteboard scan, or diagram from early discovery sessions",
      },
      {
        type: "placeholder",
        label: "Early wireframes — dashboard-first concept",
        note: "Add a lo-fi or mid-fi wireframe of the coordinator dashboard concept",
      },
    ],
    overview:
      "Puckboard Testing is a new web-based test management platform currently in active design — the fifth product in the growing Puckboard suite. Building on the design language of Nimbus and lessons learned from Puckboard Logging, the product aims to modernize how military units plan, track, and report on readiness testing — replacing a fragmented mix of spreadsheets and paper-based processes with a structured, data-driven workflow.",
    metrics: [
      { value: "Active", label: "In Design" },
      { value: "Web", label: "Platform" },
      { value: "DoD", label: "Context" },
      { value: "PBL →", label: "Builds On" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "A Familiar Problem in a New Domain",
        body: "Initial discovery research with unit test coordinators revealed a workflow that felt immediately recognizable: manual tracking, paper forms, no single source of truth. Testing schedules lived in spreadsheets. Completion status was tracked in email threads. Reporting required manually compiling data from multiple disconnected sources — and errors were common and consequential.",
        callout: {
          type: "quote",
          text: '"I\'m spending half my week just trying to figure out who has done what. The actual coordination is almost secondary."',
          attr: "— Test coordinator, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Mapping the Testing Lifecycle",
        body: "In progress. Working to produce a workflow map of the full test management lifecycle — from test assignment through scheduling, completion tracking, exception handling, and reporting. Early stakeholder sessions have surfaced a critical tension: the system needs to serve both individual contributors tracking their own status and unit-level coordinators who need an aggregate view across dozens of people.",
        callout: {
          type: "principles",
          items: [
            "Single source of truth for all test status",
            "Role-appropriate views — individual vs. coordinator",
            "Exception and waiver workflows built in",
            "Exportable reporting for command review",
          ],
        },
      },
      {
        phase: "03 — Design",
        title: "Active Exploration — More to Come",
        body: "Design work is currently underway. Early concepts are exploring a dashboard-first approach for coordinators, with individual contributor views that surface only what's immediately relevant to the user's own testing requirements. More to share as the work develops.",
        callout: {
          type: "stat",
          stats: [
            { v: "🔄", l: "Research ongoing" },
            { v: "🔄", l: "Wireframes in progress" },
            { v: "🔄", l: "Testing planned" },
          ],
        },
      },
    ],
    tags: [
      "Enterprise UX",
      "Web",
      "Interaction Design",
      "DoD",
      "Figma",
      "Workflow Design",
    ],
  },
];

// All 151 Gen 1 Pokémon
const POKEMON = [
  { name: "Bulbasaur", id: 1 }, { name: "Ivysaur", id: 2 }, { name: "Venusaur", id: 3 },
  { name: "Charmander", id: 4 }, { name: "Charmeleon", id: 5 }, { name: "Charizard", id: 6 },
  { name: "Squirtle", id: 7 }, { name: "Wartortle", id: 8 }, { name: "Blastoise", id: 9 },
  { name: "Caterpie", id: 10 }, { name: "Metapod", id: 11 }, { name: "Butterfree", id: 12 },
  { name: "Weedle", id: 13 }, { name: "Kakuna", id: 14 }, { name: "Beedrill", id: 15 },
  { name: "Pidgey", id: 16 }, { name: "Pidgeotto", id: 17 }, { name: "Pidgeot", id: 18 },
  { name: "Rattata", id: 19 }, { name: "Raticate", id: 20 }, { name: "Spearow", id: 21 },
  { name: "Fearow", id: 22 }, { name: "Ekans", id: 23 }, { name: "Arbok", id: 24 },
  { name: "Pikachu", id: 25 }, { name: "Raichu", id: 26 }, { name: "Sandshrew", id: 27 },
  { name: "Sandslash", id: 28 }, { name: "Nidoran♀", id: 29 }, { name: "Nidorina", id: 30 },
  { name: "Nidoqueen", id: 31 }, { name: "Nidoran♂", id: 32 }, { name: "Nidorino", id: 33 },
  { name: "Nidoking", id: 34 }, { name: "Clefairy", id: 35 }, { name: "Clefable", id: 36 },
  { name: "Vulpix", id: 37 }, { name: "Ninetales", id: 38 }, { name: "Jigglypuff", id: 39 },
  { name: "Wigglytuff", id: 40 }, { name: "Zubat", id: 41 }, { name: "Golbat", id: 42 },
  { name: "Oddish", id: 43 }, { name: "Gloom", id: 44 }, { name: "Vileplume", id: 45 },
  { name: "Paras", id: 46 }, { name: "Parasect", id: 47 }, { name: "Venonat", id: 48 },
  { name: "Venomoth", id: 49 }, { name: "Diglett", id: 50 }, { name: "Dugtrio", id: 51 },
  { name: "Meowth", id: 52 }, { name: "Persian", id: 53 }, { name: "Psyduck", id: 54 },
  { name: "Golduck", id: 55 }, { name: "Mankey", id: 56 }, { name: "Primeape", id: 57 },
  { name: "Growlithe", id: 58 }, { name: "Arcanine", id: 59 }, { name: "Poliwag", id: 60 },
  { name: "Poliwhirl", id: 61 }, { name: "Poliwrath", id: 62 }, { name: "Abra", id: 63 },
  { name: "Kadabra", id: 64 }, { name: "Alakazam", id: 65 }, { name: "Machop", id: 66 },
  { name: "Machoke", id: 67 }, { name: "Machamp", id: 68 }, { name: "Bellsprout", id: 69 },
  { name: "Weepinbell", id: 70 }, { name: "Victreebel", id: 71 }, { name: "Tentacool", id: 72 },
  { name: "Tentacruel", id: 73 }, { name: "Geodude", id: 74 }, { name: "Graveler", id: 75 },
  { name: "Golem", id: 76 }, { name: "Ponyta", id: 77 }, { name: "Rapidash", id: 78 },
  { name: "Slowpoke", id: 79 }, { name: "Slowbro", id: 80 }, { name: "Magnemite", id: 81 },
  { name: "Magneton", id: 82 }, { name: "Farfetch'd", id: 83 }, { name: "Doduo", id: 84 },
  { name: "Dodrio", id: 85 }, { name: "Seel", id: 86 }, { name: "Dewgong", id: 87 },
  { name: "Grimer", id: 88 }, { name: "Muk", id: 89 }, { name: "Shellder", id: 90 },
  { name: "Cloyster", id: 91 }, { name: "Gastly", id: 92 }, { name: "Haunter", id: 93 },
  { name: "Gengar", id: 94 }, { name: "Onix", id: 95 }, { name: "Drowzee", id: 96 },
  { name: "Hypno", id: 97 }, { name: "Krabby", id: 98 }, { name: "Kingler", id: 99 },
  { name: "Voltorb", id: 100 }, { name: "Electrode", id: 101 }, { name: "Exeggcute", id: 102 },
  { name: "Exeggutor", id: 103 }, { name: "Cubone", id: 104 }, { name: "Marowak", id: 105 },
  { name: "Hitmonlee", id: 106 }, { name: "Hitmonchan", id: 107 }, { name: "Lickitung", id: 108 },
  { name: "Koffing", id: 109 }, { name: "Weezing", id: 110 }, { name: "Rhyhorn", id: 111 },
  { name: "Rhydon", id: 112 }, { name: "Chansey", id: 113 }, { name: "Tangela", id: 114 },
  { name: "Kangaskhan", id: 115 }, { name: "Horsea", id: 116 }, { name: "Seadra", id: 117 },
  { name: "Goldeen", id: 118 }, { name: "Seaking", id: 119 }, { name: "Staryu", id: 120 },
  { name: "Starmie", id: 121 }, { name: "Mr. Mime", id: 122 }, { name: "Scyther", id: 123 },
  { name: "Jynx", id: 124 }, { name: "Electabuzz", id: 125 }, { name: "Magmar", id: 126 },
  { name: "Pinsir", id: 127 }, { name: "Tauros", id: 128 }, { name: "Magikarp", id: 129 },
  { name: "Gyarados", id: 130 }, { name: "Lapras", id: 131 }, { name: "Ditto", id: 132 },
  { name: "Eevee", id: 133 }, { name: "Vaporeon", id: 134 }, { name: "Jolteon", id: 135 },
  { name: "Flareon", id: 136 }, { name: "Porygon", id: 137 }, { name: "Omanyte", id: 138 },
  { name: "Omastar", id: 139 }, { name: "Kabuto", id: 140 }, { name: "Kabutops", id: 141 },
  { name: "Aerodactyl", id: 142 }, { name: "Snorlax", id: 143 }, { name: "Articuno", id: 144 },
  { name: "Zapdos", id: 145 }, { name: "Moltres", id: 146 }, { name: "Dratini", id: 147 },
  { name: "Dragonair", id: 148 }, { name: "Dragonite", id: 149 }, { name: "Mewtwo", id: 150 },
  { name: "Mew", id: 151 },
];

// ── Components ────────────────────────────────────────────────

const Ticker = React.memo(function Ticker() {
  // 4 copies ensures seamless loop — animation scrolls exactly 50% (2 copies worth)
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid #222", borderBottom: "1px solid #222", background: "#0a0a0a", padding: "10px 0" }}>
      <div style={{ display: "flex", gap: "0", animation: "ticker 120s linear infinite", whiteSpace: "nowrap", willChange: "transform", width: "max-content" }}>
        {items.map((item, i) => (
          <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#909090", padding: "0 32px", textTransform: "uppercase", flexShrink: 0 }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
});

function Nav({ onEasterEgg, eggFound, isMaster, eggButtonRef }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 600);
    setMobile(window.innerWidth < 600);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: mobile ? "16px 16px" : "20px clamp(20px, 3vw, 36px)", borderBottom: "none", background: "transparent" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="Matthew W. Henning — back to top" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "0.08em", color: "#fff", textDecoration: "none" }}>MWH</a>
        <span aria-label="Currently available for hire" role="status" style={{ fontSize: "9px", fontFamily: "'DM Mono', monospace", color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", padding: "2px 8px", borderRadius: "100px", letterSpacing: "0.1em", whiteSpace: "nowrap", animation: "statusPulse 2.4s ease-in-out infinite", display: "inline-flex", alignItems: "center", gap: "5px" }}>
          <span aria-hidden="true" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981", display: "inline-block", flexShrink: 0 }} />
          OPEN FOR NEW WORK
        </span>
      </div>
      <div style={{ display: "flex", gap: mobile ? "16px" : "32px", alignItems: "center" }}>
        {!mobile && ["Work", "About", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#7d7d7d", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#7d7d7d")}>
            {link}
          </a>
        ))}
        <button onClick={onEasterEgg} aria-label={isMaster ? "Pokémon Master — easter egg unlocked" : "Easter egg — try the Konami code"} ref={eggButtonRef} aria-pressed={eggFound}
          title={isMaster ? "Pokémon Master 🏆" : "psst... try the konami code ↑↑↓↓←→←→BA"}
          style={{ background: "none", border: `1px solid ${isMaster ? "#f59e0b" : eggFound ? "#facc1566" : "#222"}`, borderRadius: "6px", color: isMaster ? "#f59e0b" : eggFound ? "#facc15" : "#606060", cursor: "pointer", padding: "6px 10px", fontSize: "14px", lineHeight: "1", transition: "all 0.2s", flexShrink: 0 }}>
          {isMaster ? "🏆" : eggFound ? "⭐" : "★"}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section aria-label="Introduction" style={{ padding: "100px clamp(16px, 3vw, 36px) 80px", maxWidth: "1200px", background: "transparent" }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#10b981", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px" }}>
        Product Designer · UX Researcher · Chicago, IL
      </p>
      <h1 style={{ margin: 0 }}>
        <span style={{ display: "block", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(64px, 10vw, 130px)", lineHeight: "0.92", fontWeight: "400", color: "#fff", margin: "0 0 8px", letterSpacing: "0.02em" }}>MATTHEW</span>
        <span style={{ display: "block", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(64px, 10vw, 130px)", lineHeight: "0.92", fontWeight: "400", color: "transparent", WebkitTextStroke: "1.5px #fff", margin: "0 0 40px", letterSpacing: "0.02em" }}>HENNING.</span>
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", color: "#b2b2b2", maxWidth: "560px", lineHeight: "1.5", marginBottom: "48px" }}>
        Research-driven design for systems that matter.
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="#work" style={{ background: "#fff", color: "#000", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: "600", transition: "all 0.15s" }}
          onMouseEnter={(e) => { e.target.style.background = "#10b981"; e.target.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#000"; }}>
          View Work →
        </a>
        <a href="mailto:mhenn@umich.edu" style={{ border: "1px solid #333", color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s" }}
          onMouseEnter={(e) => { e.target.style.borderColor = "#fff"; }}
          onMouseLeave={(e) => { e.target.style.borderColor = "#606060"; }}>
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(false);
  const isWip = !!project.wip;
  const isDisabled = !!project.disabled;

  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Depth indicators: count phases and real artifacts (non-placeholder media)
  const phaseCount = project.phases ? project.phases.length : 0;
  const artifactCount = project.media ? project.media.filter((m) => m.type === "image").length : 0;
  const depthLabel = !isDisabled && phaseCount > 0
    ? `${phaseCount}-phase case study` + (artifactCount > 0 ? ` · ${artifactCount} artifact${artifactCount !== 1 ? "s" : ""}` : "")
    : null;

  const handleClick = (e) => {
    if (isDisabled) return;
    onClick(project, e.currentTarget);
  };

  const handleKeyDown = (e) => {
    if (isDisabled) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(project); }
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)} onBlur={() => setHovered(false)}
      tabIndex={isDisabled ? -1 : 0} role={isDisabled ? undefined : "button"}
      aria-label={`${project.title} — ${project.subtitle}. ${isDisabled ? "Case study coming soon." : isWip ? "Work in progress." : "Click to open case study."}`}
      style={{
        background: hovered && !isDisabled ? "#111" : "#0c0c0e",
        border: `1px solid ${hovered && !isDisabled ? project.color : isWip ? project.color + "44" : "#1e1e1e"}`,
        borderRadius: "16px",
        cursor: isDisabled ? "default" : "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        transform: hovered && !isDisabled ? "translateY(-4px)" : "none",
        boxShadow: hovered && !isDisabled ? `0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}22` : "none",
        opacity: isDisabled ? 0.7 : isWip ? 0.88 : 1,
        outline: "none",
        width: "100%",
        minWidth: 0,
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        minHeight: mobile ? "auto" : "320px",
      }}>

      {/* Left: content */}
      <div style={{ padding: mobile ? "28px 24px" : "36px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        {isWip ? (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundImage: `repeating-linear-gradient(90deg, ${project.color} 0px, ${project.color} 8px, transparent 8px, transparent 14px)`, opacity: hovered && !isDisabled ? 0 : 0.5, transition: "opacity 0.25s" }} />
        ) : (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: project.color, opacity: hovered && !isDisabled ? 0 : 0.3, transition: "opacity 0.25s" }} />
        )}

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.12em", textTransform: "uppercase" }}>{project.year}</span>
              {isWip && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: project.color, background: project.color + "15", border: `1px solid ${project.color}50`, borderRadius: "100px", padding: "2px 8px" }}>● WIP</span>}
            </div>
            <span style={{ fontSize: "24px" }}>{project.emoji}</span>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>{project.tag}</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: "400", lineHeight: "1", color: "#fff", marginBottom: "10px", letterSpacing: "0.02em" }}>{project.title}</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#8a8a8a", marginBottom: depthLabel ? "8px" : "24px", lineHeight: "1.5", maxWidth: "420px" }}>{project.subtitle}</p>
          {depthLabel && (
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#606060", letterSpacing: "0.08em", marginBottom: "24px" }}>{depthLabel}</p>
          )}
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", borderTop: `1px solid ${isWip ? project.color + "20" : "#1a1a1a"}`, paddingTop: "16px" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", color: project.color, letterSpacing: "0.04em" }}>{project.impact}</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.impactLabel}</span>
          </div>
          <div style={{ marginTop: "12px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: isDisabled ? "#606060" : (hovered ? project.color : "#7b7b7b"), letterSpacing: "0.08em", transition: "color 0.2s" }}>
            {isDisabled
              ? "Case study coming soon"
              : isWip
                ? (hovered ? "See what's in progress →" : "Work in progress")
                : (hovered ? "Open case study →" : "Click to read →")}
          </div>
        </div>
      </div>

      {/* Right: hero image area */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        minHeight: mobile ? "200px" : "100%",
        background: `linear-gradient(135deg, ${project.color}08 0%, ${project.color}15 100%)`,
        borderLeft: mobile ? "none" : `1px solid ${isWip ? project.color + "15" : "#1a1a1a"}`,
        borderTop: mobile ? `1px solid ${isWip ? project.color + "15" : "#1a1a1a"}` : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {project.heroImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.heroImage} alt={`${project.title} preview`}
              loading="lazy"
              style={{
                width: "100%", height: "100%", objectFit: "cover", display: "block",
                transition: "transform 0.4s ease",
                transform: hovered && !isDisabled ? "scale(1.03)" : "scale(1)",
              }} />
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(to right, #0c0c0e 0%, transparent 30%)`,
              pointerEvents: "none",
              display: mobile ? "none" : "block",
            }} />
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "32px", textAlign: "center" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              background: project.color + "12", border: `1px dashed ${project.color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "28px", transition: "transform 0.3s ease",
              transform: hovered && !isDisabled ? "scale(1.08)" : "scale(1)",
            }}>
              {project.emoji}
            </div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color + "60", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Coming Soon
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

function Callout({ callout, color }) {
  if (!callout) return null;
  if (callout.type === "quote")
    return (
      <div style={{ borderLeft: `3px solid ${color}`, margin: "20px 0 0", background: color + "08", borderRadius: "0 8px 8px 0", padding: "16px 20px" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#ccc", lineHeight: "1.6", marginBottom: "8px" }}>{callout.text}</p>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: color, letterSpacing: "0.1em" }}>{callout.attr}</span>
      </div>
    );
  if (callout.type === "stat")
    return (
      <div style={{ display: "flex", gap: "8px", margin: "16px 0 0", flexWrap: "wrap" }}>
        {callout.stats.map((s, i) => (
          <div key={i} style={{ flex: "1", minWidth: "70px", background: color + "0d", border: `1px solid ${color}33`, borderRadius: "8px", padding: "12px 10px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "24px", color: color, letterSpacing: "0.04em", lineHeight: "1" }}>{s.v}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "#7d7d7d", letterSpacing: "0.08em", marginTop: "4px", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </div>
    );
  if (callout.type === "principles")
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0 0" }}>
        {callout.items.map((item, i) => (
          <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: color, background: color + "10", border: `1px solid ${color}30`, borderRadius: "100px", padding: "5px 12px", letterSpacing: "0.06em" }}>↳ {item}</span>
        ))}
      </div>
    );
  return null;
}

// ── Media panel — right column of modal ──────────────────────
function MediaPanel({ media, color, onLightbox }) {
  if (!media || media.length === 0) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {media.map((item, i) => {
        if (item.type === "image") {
          return (
            <button
              key={i}
              onClick={() => onLightbox({ src: item.src, caption: item.caption })}
              aria-label={`View larger: ${item.caption}`}
              style={{ background: "none", border: "none", padding: 0, cursor: "zoom-in", textAlign: "left", width: "100%", contentVisibility: "auto", containIntrinsicSize: "0 250px" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", borderRadius: "8px", overflow: "hidden", border: `1px solid #1e1e1e`, transition: "border-color 0.15s, box-shadow 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = color + "88"; e.currentTarget.style.boxShadow = `0 0 0 1px ${color}44`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.boxShadow = "none"; }}>
                <NextImage src={item.src} alt={item.caption} fill sizes="400px" loading="lazy" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s", fontSize: "20px", opacity: 0 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.45)"; e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0)"; e.currentTarget.style.opacity = "0"; }}>🔍</div>
              </div>
              {item.caption && (
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "#7b7b7b", letterSpacing: "0.06em", marginTop: "6px", lineHeight: "1.4" }}>{item.caption}</p>
              )}
            </button>
          );
        }
        return (
          <div key={i} style={{ width: "100%", aspectRatio: "16/10", borderRadius: "8px", border: `1px dashed ${color}33`, background: color + "05", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px", gap: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "22px", opacity: 0.4 }}>🖼</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: color, letterSpacing: "0.08em", opacity: 0.7 }}>{item.label}</div>
            {item.note && (
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "#606060", letterSpacing: "0.04em", lineHeight: "1.5", maxWidth: "200px" }}>{item.note}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function useFocusTrap(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const focusables = Array.from(el.querySelectorAll(focusableSelector)).filter(
        (n) => !n.disabled && n.offsetParent !== null
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [ref]);
}

function LightboxModal({ src, caption, onClose }) {
  const closeBtnRef = useRef(null);
  const lightboxContainerRef = useRef(null);
  useFocusTrap(lightboxContainerRef);
  useEffect(() => {
    if (closeBtnRef.current) closeBtnRef.current.focus();
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div ref={lightboxContainerRef} onClick={(e) => { e.stopPropagation(); onClose(); }} role="dialog" aria-modal="true" aria-label={caption || "Image preview"}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", zIndex: 2000, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <button ref={closeBtnRef} onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close image preview"
        style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#b2b2b2", cursor: "pointer", borderRadius: "8px", width: "36px", height: "36px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>×</button>
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "min(90vw, 1200px)", maxHeight: "80vh", width: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption} style={{ display: "block", width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain", borderRadius: "10px", boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }} />
      </div>
      {caption && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.08em", marginTop: "16px", textAlign: "center", maxWidth: "600px" }}>{caption}</p>}
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#606060", letterSpacing: "0.08em", marginTop: "8px" }}>click anywhere or press esc to close</p>
    </div>
  );
}

function Modal({ project, onClose, triggerRef }) {
  const [activePhase, setActivePhase] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const phaseNavRef = useRef(null);
  const modalRef = useRef(null);
  useFocusTrap(modalRef);

  useEffect(() => { setActivePhase(0); }, [project.id]);

  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (modalRef.current) {
      const firstFocusable = modalRef.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus();
    }
    const handler = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (!phaseNavRef.current) return;
      const chips = Array.from(phaseNavRef.current.querySelectorAll("button"));
      const focused = document.activeElement;
      const idx = chips.indexOf(focused);
      if (idx === -1) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); const next = chips[(idx + 1) % chips.length]; next.focus(); setActivePhase((idx + 1) % chips.length); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); const prev = chips[(idx - 1 + chips.length) % chips.length]; prev.focus(); setActivePhase((idx - 1 + chips.length) % chips.length); }
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
      if (triggerRef && triggerRef.current) triggerRef.current.focus();
    };
  }, [onClose]);

  const phase = project.phases[activePhase];

  return (
    <div onClick={onClose} role="presentation"
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div onClick={(e) => e.stopPropagation()} ref={modalRef} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}
        style={{
          background: "#0e0e12",
          border: `1px solid ${project.color}44`,
          borderRadius: "16px",
          width: "100%",
          maxWidth: "clamp(680px, 96vw, 1600px)",
          maxHeight: "90vh",
          overflow: "hidden",
          boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px ${project.color}22`,
        }}>
        <div style={{ overflowY: "auto", maxHeight: "90vh" }}>

        {/* ── Sticky header ── */}
        <div style={{ padding: `28px ${mobile ? "20px" : "52px"} 20px`, borderBottom: "1px solid #1a1a1a", position: "sticky", top: 0, background: "#0e0e12", zIndex: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>{project.tag} · {project.year}</div>
                {project.wip && (
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: project.color, background: project.color + "15", border: `1px solid ${project.color}40`, borderRadius: "4px", padding: "3px 10px" }}>
                    ● Work in Progress — Case study under active construction
                  </span>
                )}
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: "400", lineHeight: "1", color: "#fff", letterSpacing: "0.02em" }}>{project.title}</h2>
            </div>
            <button onClick={onClose} aria-label="Close case study"
              style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#909090", cursor: "pointer", borderRadius: "8px", width: "36px", height: "36px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: "4px" }}>×</button>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: mobile ? "20px 20px 36px" : "32px 52px 48px" }}>

          {/* Role bar */}
          {project.role && (
            <div style={{ background: "#0a0a0d", border: `1px solid ${project.color}22`, borderLeft: `3px solid ${project.color}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: "32px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ fontSize: "14px", marginTop: "1px", flexShrink: 0 }}>👤</span>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>My Role</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#b0b0b0", lineHeight: "1.55" }}>{project.role}</p>
              </div>
            </div>
          )}

          {/* Overview */}
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#b0b0b0", lineHeight: "1.65", marginBottom: "28px" }}>{project.overview}</p>

          {/* Metrics row */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${mobile ? 2 : project.metrics.length}, 1fr)`, gap: "10px", marginBottom: "40px" }}>
            {project.metrics.map((m, i) => (
              <div key={i} style={{ background: project.color + "0a", border: `1px solid ${project.color}25`, borderRadius: "8px", padding: "14px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", color: project.color, letterSpacing: "0.04em", lineHeight: "1" }}>{m.value}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "#7b7b7b", letterSpacing: "0.08em", marginTop: "4px", textTransform: "uppercase" }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* ── Featured artifact — full-width hero image ── */}
          {project.featuredArtifact && (
            <button
              onClick={() => setLightbox({ src: project.featuredArtifact.src, caption: project.featuredArtifact.caption })}
              aria-label={`View larger: ${project.featuredArtifact.caption}`}
              style={{ background: "none", border: "none", padding: 0, cursor: "zoom-in", textAlign: "left", width: "100%", marginBottom: "40px" }}>
              <div style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", border: `1px solid ${project.color}33`, transition: "border-color 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.color + "88"; e.currentTarget.style.boxShadow = `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}44`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = project.color + "33"; e.currentTarget.style.boxShadow = "none"; }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.featuredArtifact.src} alt={project.featuredArtifact.caption} loading="lazy"
                  style={{ width: "100%", height: "auto", display: "block" }} />
                <div style={{ position: "absolute", top: "12px", left: "12px", fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: "4px", pointerEvents: "none" }}>Featured Artifact</div>
              </div>
              {project.featuredArtifact.caption && (
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.06em", marginTop: "10px", lineHeight: "1.5", maxWidth: "800px" }}>{project.featuredArtifact.caption}</p>
              )}
            </button>
          )}

          {/* ── Two-column layout ── */}
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : `1fr clamp(280px, 28%, 400px)`, gap: "32px", alignItems: "stretch" }}>

            {/* LEFT */}
            <div style={{ display: "flex", flexDirection: "column" }}>

              {/* Phase tabs */}
              <div ref={phaseNavRef} role="tablist" aria-label="Case study phases"
                style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                {project.phases.map((p, i) => (
                  <button key={i} role="tab" onClick={() => setActivePhase(i)}
                    aria-label={`Go to phase: ${p.phase}`} aria-selected={i === activePhase} tabIndex={i === activePhase ? 0 : -1}
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "100px", cursor: "pointer", border: `1px solid ${i === activePhase ? project.color : "#2a2a2a"}`, background: i === activePhase ? project.color + "18" : "transparent", color: i === activePhase ? project.color : "#7b7b7b", transition: "all 0.15s", outline: "none", boxShadow: "none" }}
                    onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${project.color}66`; }}
                    onBlur={(e) => { e.target.style.boxShadow = "none"; }}>
                    {p.phase.split(" — ")[1]}
                  </button>
                ))}
              </div>

              {/* Active phase card */}
              <div style={{ flex: "1", background: "#0a0a0d", border: "1px solid #1e1e24", borderRadius: "12px", padding: "24px", borderTop: `3px solid ${project.color}` }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>{phase.phase}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px", color: "#fff", letterSpacing: "0.02em", marginBottom: "12px", fontWeight: "400" }}>{phase.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#c8c8c8", lineHeight: "1.65" }}>{phase.body}</p>
                <Callout callout={phase.callout} color={project.color} />
              </div>

              {/* Prev / next */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px" }}>
                <button onClick={() => setActivePhase(Math.max(0, activePhase - 1))} disabled={activePhase === 0} aria-label="Previous phase"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: activePhase === 0 ? "#2a2a2a" : "#7d7d7d", background: "none", border: "none", cursor: activePhase === 0 ? "default" : "pointer", letterSpacing: "0.08em" }}>← Prev</button>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#606060", letterSpacing: "0.1em" }}>{activePhase + 1} / {project.phases.length}</span>
                <button onClick={() => setActivePhase(Math.min(project.phases.length - 1, activePhase + 1))} disabled={activePhase === project.phases.length - 1} aria-label="Next phase"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: activePhase === project.phases.length - 1 ? "#2a2a2a" : project.color, background: "none", border: "none", cursor: activePhase === project.phases.length - 1 ? "default" : "pointer", letterSpacing: "0.08em" }}>Next →</button>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px", paddingTop: "24px", borderTop: "1px solid #1a1a1a" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7d7d7d", background: "#141414", border: "1px solid #222", borderRadius: "4px", padding: "4px 12px", letterSpacing: "0.08em" }}>{tag}</span>
                ))}
              </div>

              {/* What I Built */}
              {project.contributions && project.contributions.length > 0 && (
                <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid #1a1a1a" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>What I Built</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {project.contributions.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#b0b0b0", lineHeight: "1.5" }}>
                        <span style={{ color: project.color, flexShrink: 0, marginTop: "1px" }}>↳</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* External links */}
              {project.links && project.links.length > 0 && (
                <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid #1a1a1a", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noreferrer"
                      style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "10px 20px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s", border: `1px solid ${project.color}55`, color: project.color, background: project.color + "0d" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = project.color + "22"; e.currentTarget.style.borderColor = project.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = project.color + "0d"; e.currentTarget.style.borderColor = project.color + "55"; }}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* CUI disclaimer */}
              {project.cuiDisclaimer && (
                <div role="note" aria-label="CUI and NDA disclaimer" style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid #1a1a1a", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span aria-hidden="true" style={{ fontSize: "13px", flexShrink: 0, marginTop: "1px", color: "#606060" }}>🔒</span>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#606060", lineHeight: "1.6", letterSpacing: "0.04em" }}>{project.cuiDisclaimer}</p>
                </div>
              )}

            </div>

            {/* RIGHT: media panel */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              position: mobile ? "static" : "sticky",
              top: "120px",
              maxHeight: mobile ? "none" : "calc(90vh - 180px)",
              alignSelf: "start",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", flexShrink: 0 }}>Design Artifacts</div>
              <div style={{ overflowY: "auto", flex: "1", paddingRight: "4px", contain: "layout style paint", willChange: "scroll-position" }}>
                <MediaPanel media={project.media} color={project.color} onLightbox={setLightbox} />
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>

      {lightbox && <LightboxModal src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />}
    </div>
  );
}

function EasterEggModal({ onClose, onMaster, caught, setCaught, triggerRef }) {
  const [current, setCurrent] = useState(() => {
    const remaining = POKEMON.filter((p) => !caught.some((c) => c.id === p.id));
    const pool = remaining.length > 0 ? remaining : POKEMON;
    return pool[Math.floor(Math.random() * pool.length)];
  });
  const [wasAlreadyCaught, setWasAlreadyCaught] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [throwing, setThrowing] = useState(false);
  const [catchAnim, setCatchAnim] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const [message, setMessage] = useState("");
  const [spriteData, setSpriteData] = useState(null);

  useEffect(() => { setWasAlreadyCaught(caught.some((p) => p.id === current.id)); }, [current.id]);

  useEffect(() => {
    let cancelled = false;
    setSpriteData(null);
    fetch("https://pokeapi.co/api/v2/pokemon/" + current.id)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const sprite = data.sprites && ((data.sprites.other && data.sprites.other["official-artwork"] && data.sprites.other["official-artwork"].front_default) || data.sprites.front_default);
        if (sprite) {
          return fetch(sprite).then((r) => r.blob()).then((blob) => {
            if (cancelled) return;
            const reader = new FileReader();
            reader.onload = () => { if (!cancelled) setSpriteData(reader.result); };
            reader.readAsDataURL(blob);
          });
        }
      })
      .catch(() => { if (!cancelled) setSpriteData("error"); });
    return () => { cancelled = true; };
  }, [current.id]);

  const caughtCount = Math.min(caught.length, 10);
  const isMaster = caught.length >= 10;

  const throwBall = () => {
    if (wasAlreadyCaught || throwing) return;
    setThrowing(true); setShaking(true); setMessage("");
    setTimeout(() => {
      setShaking(false);
      const success = Math.random() > 0.35;
      if (success) {
        setCatchAnim(true);
        setTimeout(() => {
          setAnimDone(true); setCatchAnim(false);
          const newCaught = [...caught, current];
          setCaught(newCaught);
          if (newCaught.length >= 10) onMaster();
          setMessage("Gotcha! " + current.name + " was caught!");
          setTimeout(() => {
            const remaining = POKEMON.filter((p) => !newCaught.some((c) => c.id === p.id));
            if (remaining.length > 0) {
              const next = remaining[Math.floor(Math.random() * remaining.length)];
              setWasAlreadyCaught(false); setCurrent(next); setMessage(""); setAnimDone(false);
            }
            setThrowing(false);
          }, 1400);
        }, 900);
      } else {
        setMessage(current.name + " broke free!");
        setTimeout(() => { setMessage(""); setThrowing(false); }, 1200);
      }
    }, 800);
  };

  const eggModalRef = useRef(null);
  useFocusTrap(eggModalRef);
  useEffect(() => {
    if (eggModalRef.current) { const first = eggModalRef.current.querySelector("button"); if (first) first.focus(); }
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { window.removeEventListener("keydown", handler); if (triggerRef && triggerRef.current) triggerRef.current.focus(); };
  }, [onClose]);

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div ref={eggModalRef} onClick={(e) => e.stopPropagation()} style={{ background: "#0a0a12", border: "2px solid #facc15", borderRadius: "16px", padding: "40px", maxWidth: "480px", width: "90%", boxShadow: "0 0 60px rgba(250,204,21,0.15)", textAlign: "center" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#facc15", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>✦ You found the easter egg ✦</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", color: "#fff", marginBottom: "32px", letterSpacing: "0.04em" }}>GOTTA CATCH &apos;EM ALL</h2>
        <div style={{ background: "#06060e", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "28px", marginBottom: "24px" }}>
          <div style={{ width: "96px", height: "96px", margin: "0 auto 8px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {!animDone && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", animation: catchAnim ? "catchShrink 0.9s ease forwards" : shaking ? "shake 0.15s ease infinite" : "float 3s ease-in-out infinite" }}>
                {wasAlreadyCaught ? <span style={{ fontSize: "72px" }}>⭐</span>
                  : spriteData && spriteData !== "error" ? <img src={spriteData} alt={current.name} style={{ width: "96px", height: "96px", objectFit: "contain", imageRendering: "auto" }} />
                  : spriteData === "error" ? <span style={{ fontSize: "64px" }}>❓</span>
                  : <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b" }}>loading...</span>}
              </div>
            )}
            {catchAnim && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", animation: "pokeballDrop 0.9s ease forwards", fontSize: "72px", zIndex: 2 }}>⭐</div>
            )}
            {catchAnim && ["✦","✦","✦","✦","✦","✦"].map((s, i) => (
              <div key={i} style={{ position: "absolute", top: "50%", left: "50%", fontSize: i % 2 === 0 ? "14px" : "10px", color: ["#facc15","#fff","#10b981","#facc15","#fff","#a78bfa"][i], animation: `starBurst${i} 0.9s ease forwards`, zIndex: 3, pointerEvents: "none" }}>{s}</div>
            ))}
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", color: "#fff", letterSpacing: "0.04em" }}>{current.name}</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b", marginTop: "4px" }}>{wasAlreadyCaught ? "Already caught..." : "Wild Pokémon appeared!"}</div>
        </div>
        {message && <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: message.includes("Gotcha") ? "#4ade80" : "#f87171", marginBottom: "16px", letterSpacing: "0.08em", minHeight: "20px" }}>{message}</div>}
        <button onClick={throwBall} disabled={wasAlreadyCaught || throwing}
          style={{ background: wasAlreadyCaught || throwing ? "#1a1a1a" : "#facc15", color: wasAlreadyCaught || throwing ? "#7b7b7b" : "#000", border: "none", borderRadius: "8px", fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "0.08em", padding: "12px 32px", cursor: wasAlreadyCaught || throwing ? "default" : "pointer", marginBottom: "24px", width: "100%", transition: "all 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          {wasAlreadyCaught ? "ALREADY CAUGHT..." : throwing ? "..." : (<>THROW POKÉ BALL<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABkElEQVR4nK2VTU4CQRCFP2QibkXc4pIFd3CiN5Cfi+AxIHAAwxm8ByQGwhVIMBGWhAQk42JeM8VIM2OwkkpPV716ma6uqga/FIBA6198B8ApKQJ7s69IAVbA1xmsV4pa74BXYKTASLoHxkBHGBuTSdoG5oZsCrxLp8Y+F/YsuXN0TGAPqJ3A1oCuwXV85M7QEHAFPBl/AJSkgbE/CxsBL2nygrQMfAJbIJTv2nPEonwIu1XsreE7/IFLQV/7EknVNIE3acP8UEnfA45TEmCCP4BvoKr9ldYhSS6dDlOYB2AnDstJRaQzHfNGa4ukKkLivE9ka6ewM3G4egegLvAGWChfC2BNXLehwT7Ktk5hN+Ko26NkSWS+vW18SnypaIt0QpyGkKRBWmSkwl7ejvgi7GnyXF5VpEeXly63gfa23Bok5dY0wa7c+njKrUBc3Jc2SNnwHYAQt2UELInb1UmelnaN450Xdgh18Q+hHjmGUJr8X8dmmtwN+jG/B/1IvrKPNO/TdE/yWiylPmymXPSY/gBY9oZgBkYM5AAAAABJRU5ErkJggg==" alt="pokeball" style={{ width: "20px", height: "20px", objectFit: "contain" }} /></>)}
        </button>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.1em" }}>{caughtCount} / 10 caught{isMaster && " · Pokémon Master 🏆"}</div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#606060", fontFamily: "'DM Mono', monospace", fontSize: "11px", cursor: "pointer", marginTop: "16px", letterSpacing: "0.08em" }}>[ close ]</button>
      </div>
    </div>
  );
}

function About() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <section id="about" aria-label="About Matthew Henning" style={{ padding: "100px clamp(16px, 3vw, 36px)", borderTop: "1px solid #111", background: "transparent" }}>
      <div style={{ maxWidth: "1100px" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#10b981", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>About</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: "400", color: "#fff", lineHeight: "0.95", letterSpacing: "0.02em", marginBottom: "56px" }}>
          DESIGNING<br />
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}>SOLUTIONS</span> THAT DELIVER<br />
          & DELIGHT.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "280px 1fr", gap: mobile ? "36px" : "56px", alignItems: "start" }}>
          {/* Headshot */}
          <div style={{ position: "relative", width: "fit-content" }}>
            <div style={{
              width: mobile ? "220px" : "280px",
              aspectRatio: "3/4",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #1e1e1e",
              background: "linear-gradient(135deg, #10b98108 0%, #8b5cf608 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img src="/Headshot.jpg" alt="Matthew Henning" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", top: "-6px", right: "-6px", width: "28px", height: "28px", borderRadius: "50%", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", border: "2px solid #060608" }}>✦</div>
          </div>

          {/* Bio text */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "36px", marginBottom: "40px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#909090", lineHeight: "1.65" }}>
                Before I learned to design interfaces, I learned to tell stories through a lens studying Film, Television & Digital Media in my undergrad. That background — understanding composition, pacing, what earns attention and what loses it — still shines through in my product design work to this day, & shapes how I approach every UX problem I work on.

              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#909090", lineHeight: "1.65" }}>
                Today I design complex enterprise systems where clarity isn&apos;t optional. I research deeply, synthesize rigorously, and build design systems that outlast the project. M.S. in UX Research & Design & User-Centered Agile Development (HCI) from the University of Michigan School of Information. Based in Chicago.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[["Interaction Design","#10b981"],["UX Research","#8b5cf6"],["Design Systems","#10b981"],["Accessibility","#f59e0b"],["Figma","#10b981"],["Usability Testing","#8b5cf6"],["HCI","#10b981"],["Agile / Scrum","#f59e0b"]].map(([skill, color]) => (
                <span key={skill} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: color, background: `${color}11`, border: `1px solid ${color}33`, borderRadius: "4px", padding: "6px 14px", letterSpacing: "0.08em" }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [mobile, setMobile] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "someone"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:mhenn@umich.edu?subject=${subject}&body=${body}`;
  };

  const inputBase = {
    width: "100%",
    background: "#0a0a0d",
    border: "1px solid #222",
    borderRadius: "8px",
    padding: "12px 16px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    color: "#e0e0e0",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const inputFocused = (name) => focused === name ? { borderColor: "#10b981", boxShadow: "0 0 0 2px #10b98122" } : {};

  return (
    <section id="contact" aria-label="Contact" style={{ padding: "100px clamp(16px, 3vw, 36px)", borderTop: "1px solid #111", background: "#080809" }}>
      <div style={{ maxWidth: "1100px", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? "48px" : "80px", alignItems: "start" }}>
        {/* Left: headline + links */}
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#10b981", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Contact</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: "400", color: "#fff", lineHeight: "0.92", letterSpacing: "0.02em", marginBottom: "32px" }}>
            READY<br />
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}>WHEN</span><br />
            YOU ARE.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#7d7d7d", lineHeight: "1.6", marginBottom: "40px", maxWidth: "500px" }}>
            Open to Product Design, UX Design & UX Research roles in Chicago and remote. Let&apos;s talk.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="https://linkedin.com/in/matthew-henning13" target="_blank" rel="noreferrer" style={{ border: "1px solid #333", color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s" }}
              onMouseEnter={(e) => { e.target.style.borderColor = "#fff"; }} onMouseLeave={(e) => { e.target.style.borderColor = "#606060"; }}>LinkedIn</a>
            <a href="/Henning_Resume.pdf" target="_blank" rel="noreferrer" style={{ border: "1px solid #333", color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s" }}
              onMouseEnter={(e) => { e.target.style.borderColor = "#fff"; }} onMouseLeave={(e) => { e.target.style.borderColor = "#606060"; }}>Resume ↗</a>
          </div>
        </div>

        {/* Right: contact form */}
        <div style={{
          background: "#0c0c0e",
          border: "1px solid #1e1e1e",
          borderRadius: "16px",
          padding: mobile ? "28px 24px" : "36px 32px",
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#10b981", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px" }}>Send a Message</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label htmlFor="contact-name" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Name</label>
              <input id="contact-name" type="text" placeholder="Your name" required aria-required="true"
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                style={{ ...inputBase, ...inputFocused("name") }} />
            </div>
            <div>
              <label htmlFor="contact-email" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Email</label>
              <input id="contact-email" type="email" placeholder="you@company.com" required aria-required="true"
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                style={{ ...inputBase, ...inputFocused("email") }} />
            </div>
            <div>
              <label htmlFor="contact-message" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Message</label>
              <textarea id="contact-message" rows={5} placeholder="Tell me about the role or project..." required aria-required="true"
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                style={{ ...inputBase, ...inputFocused("message"), resize: "vertical", minHeight: "120px" }} />
            </div>
            <button onClick={handleSubmit}
              style={{
                background: "#fff", color: "#000",
                fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "14px 28px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "600",
                transition: "all 0.15s", marginTop: "4px", width: "100%",
              }}
              onMouseEnter={(e) => { e.target.style.background = "#10b981"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#000"; }}>
              Send Message →
            </button>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "#606060", letterSpacing: "0.06em", textAlign: "center", marginTop: "4px" }}>
              Opens your email client · No data stored
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────────
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [showEgg, setShowEgg] = useState(false);
  const [eggFound, setEggFound] = useState(false);
  const [isMaster, setIsMaster] = useState(false);
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const eggButtonRef = useRef(null);
  const lastCardRef = useRef(null);

  const handleEgg = useCallback(() => { setShowEgg(true); setEggFound(true); }, []);

  // ── Hash-based case study routing ──────────────────────────
  // Enables direct links like matt-henning.com/#case/mydocs
  const openProject = (project) => {
    if (project.disabled) return;
    setActiveProject(project);
    window.history.replaceState(null, "", `#case/${project.id}`);
  };

  const closeProject = () => {
    setActiveProject(null);
    window.history.replaceState(null, "", window.location.pathname);
  };

  // On mount: check URL hash and auto-open matching case study
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#case\/(.+)$/);
      if (match) {
        const project = PROJECTS.find((p) => p.id === match[1] && !p.disabled);
        if (project) setActiveProject(project);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let pos = 0;
    const handler = (e) => {
      if (e.key === KONAMI[pos]) { pos++; if (pos === KONAMI.length) { handleEgg(); pos = 0; } }
      else { pos = e.key === KONAMI[0] ? 1 : 0; }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleEgg]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #060608; color: #fff; min-height: 100vh; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
        * { scrollbar-width: thin; scrollbar-color: #222 #0a0a0a; }
        .skip-link { position: absolute; top: -100%; left: 16px; background: #10b981; color: #000; padding: 12px 24px; border-radius: 0 0 8px 8px; font-family: 'DM Mono', monospace; font-size: 12px; letter-spacing: 0.08em; text-decoration: none; z-index: 9999; transition: top 0.15s; }
        .skip-link:focus { top: 0; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes shake { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
        @keyframes statusPulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.4); } 50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(16,185,129,0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.4s; opacity: 0; }
        .fade-up-4 { animation-delay: 0.55s; opacity: 0; }
        :focus-visible { outline: 2px solid #10b981 !important; outline-offset: 3px; border-radius: 3px; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .fade-up, .fade-up-1, .fade-up-2, .fade-up-3, .fade-up-4 { animation: none !important; opacity: 1 !important; }
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
        @keyframes catchShrink { 0% { transform: scale(1); opacity: 1; } 60% { transform: scale(0.3); opacity: 0.6; } 100% { transform: scale(0); opacity: 0; } }
        @keyframes pokeballDrop { 0% { transform: scale(0.2); opacity: 0; } 35% { transform: scale(1.3); opacity: 1; } 60% { transform: scale(0.9); opacity: 1; } 80% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 0; } }
        @keyframes starBurst0 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% - 52px), calc(-50% - 52px)) scale(1.2); opacity:0; } }
        @keyframes starBurst1 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% + 52px), calc(-50% - 52px)) scale(1.2); opacity:0; } }
        @keyframes starBurst2 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% - 60px), calc(-50% + 4px)) scale(1.2); opacity:0; } }
        @keyframes starBurst3 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% + 60px), calc(-50% + 4px)) scale(1.2); opacity:0; } }
        @keyframes starBurst4 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% - 44px), calc(-50% + 52px)) scale(1.2); opacity:0; } }
        @keyframes starBurst5 { 0% { transform: translate(-50%,-50%) scale(0); opacity:0; } 40% { opacity:1; } 100% { transform: translate(calc(-50% + 44px), calc(-50% + 52px)) scale(1.2); opacity:0; } }
      `}</style>

      <a href="#work" className="skip-link">Skip to main content</a>

      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(6,6,8,0.95)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
        <Nav onEasterEgg={handleEgg} eggFound={eggFound} isMaster={isMaster} eggButtonRef={eggButtonRef} />
        <div aria-hidden="true" style={{ position: "relative", height: "1px", background: "#222" }}>
          <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: scrollProgress + "%", background: "#10b981", transition: "width 0.05s linear" }} />
        </div>
        <Ticker />
      </div>

      <main style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="fade-up fade-up-1"><Hero /></div>

        <section id="work" aria-label="Selected work" style={{ padding: "80px clamp(16px, 3vw, 36px)", background: "transparent" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "48px" }}>
            <div className="fade-up fade-up-2">
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#10b981", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Selected Work</div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "400", color: "#fff", letterSpacing: "0.02em" }}>PRODUCTS I&apos;VE SHAPED.</h2>
            </div>
          </div>
          <div className="fade-up fade-up-3" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={(proj, el) => { lastCardRef.current = el; openProject(proj); }} />
            ))}
          </div>
        </section>

        <div className="fade-up fade-up-4">
          <About />
          <Contact />
        </div>
      </main>

      <footer aria-label="Site footer" style={{ borderTop: "1px solid #111", padding: "24px clamp(16px, 3vw, 36px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", maxWidth: "1400px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.08em" }}>Built by Me :) - © 2026 Matthew W. Henning</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.08em" }}>Chicago, IL · Available for hire</span>
      </footer>

      {activeProject && <Modal project={activeProject} onClose={closeProject} triggerRef={lastCardRef} />}
      {showEgg && <EasterEggModal onClose={() => setShowEgg(false)} onMaster={() => setIsMaster(true)} caught={caughtPokemon} setCaught={setCaughtPokemon} triggerRef={eggButtonRef} />}
    </>
  );
}