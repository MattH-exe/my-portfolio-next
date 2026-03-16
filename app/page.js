"use client";
import React, { useState, useEffect, useRef } from "react";
import NextImage from "next/image";

// ── Data ──────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "✦ 65% Task-Time Reduction ✦",
  "✦ $20M+ Operational Savings ✦",
  "✦ ~375K+ Labor Hours Reclaimed ✦",
  "✦ Nearly 5 Years Enterprise UX ✦",
  "✦ Active DoD Secret Clearance ✦",
  "✦ Research-Driven Design ✦",
  "✦ Nimbus Design System ✦",
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
    role: "Product Designer · Cross-functional team of designers, iOS engineers, and a PM · Active DoD Secret Clearance required",
    contributions: [
      "AF Form 651 UI — digitized the primary post-mission fuel and flight data form",
      "Flight Time & Training Accomplishments UI — replaced manual logbook entry",
      "Aircrew Editor UI — crew management and role assignment flows",
      "PDF Form Generation UI — auto-populated, print-ready output from digital data",
      "Evaluation Import & Tracking UI — structured eval submission and status tracking",
    ],
    links: [
      {
        label: "View on App Store (iPad)",
        url: "https://apps.apple.com/us/app/puckboard-logging/id1643684304",
      },
      { label: "Product Website ↗", url: "https://puckboard.dso.mil/pbl/" },
    ],
    // MEDIA: Replace placeholders with your real screenshots/artifacts
    media: [
      {
        type: "placeholder",
        label: "AF Form 651 — digitized form UI",
        note: "Add a Figma export or redacted screen of the Form 651 flow",
      },
      {
        type: "image",
        src: "/case-studies/PBL_old_workflow.jpg",
        caption: "Old post-mission workflow — 14 manual steps mapped for stakeholder alignment",
      },
      {
        type: "placeholder",
        label: "PDF generation output",
        note: "Add a redacted example of the auto-populated print-ready form",
      },
            {
        type: "placeholder",
        label: "PDF generation output",
        note: "Add a redacted example of the auto-populated print-ready form",
      },
            {
        type: "placeholder",
        label: "PDF generation output",
        note: "Add a redacted example of the auto-populated print-ready form",
      },
    ],
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    overview:
      "Puckboard Logging (iOS · iPad) is one of four branches in the Puckboard suite — alongside Scheduling, Office, and Personnel — forming the Department of Defense's first accredited, collaborative flight operations platform. Logging tackles the most painful part of a pilot's day: post-mission paperwork. By pulling data from Puckboard Scheduling, pre-populating form fields, and automating verification, we turned a 3-hour manual process into something aircrews could complete in under 10 minutes.",
    metrics: [
      { value: "3hrs → <10min", label: "Documentation Time" },
      { value: "$20M+", label: "Fuel Savings" },
      { value: "~375K", label: "Labor Hours Reclaimed" },
      { value: "Fleet-wide", label: "Adoption" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "The Old Workflow Was Broken by Design",
        body: "Aircrew were completing post-mission paperwork using physical forms, manual math verification, and data entry spread across disconnected systems. On-site contextual inquiry with pilots and crew revealed that a single flight debrief could generate 3+ hours of documentation work — pulling people away from operational duties.",
        callout: {
          type: "quote",
          text: '"We spend more time on paperwork after a flight than we do on the actual debrief."',
          attr: "— C-17 Pilot, contextual interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Mapping the Workflow End-to-End",
        body: "I facilitated stakeholder workshops and shadowed crews through the full post-mission process to create a detailed workflow map. The old workflow had 14 distinct manual steps, multiple error-prone hand-offs, and no validation layer. This became the north star artifact that the entire product team aligned around before a single screen was designed.",
        callout: {
          type: "stat",
          stats: [
            { v: "14", l: "Manual steps in old flow" },
            { v: "3+", l: "Systems touched per mission" },
            { v: "0", l: "Automated validation checks" },
          ],
        },
      },
      {
        phase: "03 — Ideate",
        title: "Progressive Disclosure & One-Handed Interactions",
        body: "With constraints clearly mapped — operational gear, field conditions, offline environments — I led ideation sessions focused on three design principles: progressive disclosure to surface only what's needed at each step, offline-first architecture, and a one-handed interaction model. We explored 4 structural concepts before converging on a flow that mirrored pilots' existing mental models.",
        callout: {
          type: "principles",
          items: [
            "Progressive disclosure",
            "Offline-first architecture",
            "One-handed interaction model",
            "Data pre-population from scheduling",
          ],
        },
      },
      {
        phase: "04 — Prototype & Test",
        title: "Iterative Testing with Real Users in the Field",
        body: "Prototypes were tested in two rounds with active-duty aircrew. Round one surfaced issues with form hierarchy and terminology — we were using civilian language in a military context. Round two validated the revised flow and confirmed that pre-population from Puckboard Scheduling was the single highest-value feature. Both rounds were conducted on-site at operational squadrons.",
        callout: {
          type: "quote",
          text: '"Probably the best aspect of Form 8s [in Puckboard] that we\'ve had so far is it allows commanders to sign Form 8s on the road and they don\'t have to be at their desk... We were able to fill & sign a Form 8 in 12 minutes whereas G/TIMS takes 12 minutes probably just to sign in."',
          attr: "— C-17 Loadmaster, usability test session",
        },
      },
      {
        phase: "05 — Deliver",
        title: "Fleet-Wide Adoption & Measurable Impact",
        body: "The shipped product reduced post-mission documentation from 3+ hours to under 10 minutes across thousands of users. The platform's data accuracy improvements directly contributed to $20M+ in operational fuel savings by enabling more precise flight data reporting. Approximately 375,000 labor hours have been reclaimed fleet-wide.",
        callout: {
          type: "stat",
          stats: [
            { v: "65%", l: "Task time reduction" },
            { v: "$20M+", l: "Operational savings" },
            { v: "375K hrs", l: "Reclaimed annually" },
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
    id: "pmr",
    year: "2023–2024",
    tag: "Enterprise UX · Web · Dashboard",
    title: "PMR Dashboard",
    subtitle: "Every mission accounted for.",
    impact: "0→1",
    impactLabel: "New Feature",
    color: "#38bdf8",
    emoji: "📊",
    wip: false,
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    role: "Lead Product Designer · Cross-functional team of designers, web engineers, and a PM · Active DoD Secret Clearance required",
    contributions: [
      "Post-Mission Review dashboard — central hub routing mission event data to systems of record",
      "SARM-facing review and submission workflows",
      "Flight Hours, Training Accomplishments, Form 781, and Form 1522 data review flows",
      "[ Add additional contributions as you document the work ]",
    ],
    links: [],
    // MEDIA: Replace placeholders with your real screenshots/artifacts
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
      "[ Add your overview here. ] The PMR Dashboard is the central hub through which all scheduled mission event data — Flight Hours, Training Accomplishments, AF Form 781s, Form 1522s, and more — flows on its way to being entered into systems of record by SARMs (Squadron Aviation Resource Managers). Designed as part of Puckboard Logging, it brings structure and accountability to the final mile of post-mission data entry.",
    metrics: [
      { value: "0→1", label: "New Feature" },
      { value: "Web", label: "Platform" },
      { value: "SARM", label: "Primary User" },
      { value: "DoD", label: "Context" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "[ Add your discovery narrative here ]",
        body: "[ Describe what you learned about the SARM workflow — how mission event data was being handled before the PMR Dashboard, what pain points existed, and what research methods you used to uncover them. ]",
        callout: {
          type: "quote",
          text: '"[ Add a representative quote from a SARM or stakeholder interview here. ]"',
          attr: "— SARM, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "[ Add your define narrative here ]",
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
        title: "[ Add your design and testing narrative here ]",
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
        title: "[ Add your delivery narrative here ]",
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
    id: "mydocs",
    year: "2024–2025",
    tag: "Enterprise UX · Web · Personnel",
    title: "My Docs",
    subtitle: "Career documents that follow the mission.",
    impact: "0→1",
    impactLabel: "New Feature",
    color: "#a78bfa",
    emoji: "🗂️",
    wip: false,
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    role: "Lead Product Designer · Puckboard Personnel (web) · Active DoD Secret Clearance required · Cross-functional team of designers, web engineers, and a PM",
    contributions: [
      "Overall information architecture for the My Docs feature — document taxonomy, folder structure, and access model",
      "Flight Evaluation Folder (FEF) — structured storage for Form 8s with Annual & Initial Review workflows",
      "Document deposit system — automatic association of Puckboard-generated paperwork to member profiles",
      "PCS-persistent document model — ensuring records follow members across unit transfers",
      "Form 781, Form 8, and Form 1522 storage and retrieval flows",
      "[ Add additional contributions as you document the work ]",
    ],
    links: [],
    // MEDIA: Replace placeholders with your real screenshots/artifacts
    media: [
      {
        type: "placeholder",
        label: "My Docs — member document home",
        note: "Add a redacted screenshot of the My Docs landing view showing the folder structure",
      },
      {
        type: "placeholder",
        label: "Flight Evaluation Folder (FEF)",
        note: "Add a screen or flow showing Form 8 storage and the Annual/Initial Review lifecycle",
      },
      {
        type: "placeholder",
        label: "Information architecture diagram",
        note: "Add the IA map showing document taxonomy, ownership model, and access tiers",
      },
    ],
    overview:
      "My Docs is a secure, centralized document storage feature within Puckboard Personnel — the fourth branch of the Puckboard suite. Before My Docs, critical Air Force career documents — Form 781s, Form 8 evaluations, Form 1522s and more — were stuffed in lockers, scattered across email threads, or simply lost when a member PCS'd to a new unit. My Docs solves this by creating a persistent, profile-bound document home that travels with the member no matter where they're stationed. It also serves as the secure deposit point for all paperwork generated across the Puckboard suite, keeping every document tied to the right person for the life of their career. I led the overarching feature architecture and owned the Flight Evaluation Folder (FEF) — the structured home for Form 8 evaluations, Annual Reviews, and Initial Reviews.",
    metrics: [
      { value: "0→1", label: "New Feature" },
      { value: "PCS-Proof", label: "Records Follow Members" },
      { value: "FEF", label: "Flight Eval Folder" },
      { value: "Personnel", label: "Suite Branch" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "Lost in the Locker: The Document Problem",
        body: "Discovery research with aircrew and administrative staff surfaced a problem that was both mundane and consequential: important career documents had no reliable home. Form 8 evaluations sat in physical folders. Form 781 flight data lived in disconnected systems. When a member PCS'd, documents were manually transferred — or lost entirely. The cost wasn't just inconvenience; gaps in evaluation records had real career implications.",
        callout: {
          type: "quote",
          text: '"[ Add a representative quote from a member or admin interview here. ]"',
          attr: "— Aircrew member, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Architecture First: Designing the Document Model",
        body: "Before any screens were designed, I focused on the underlying architecture: how documents should be categorized, who owns them, what triggers a deposit, and how access should work across units. The central design decision was making the document model member-centric rather than unit-centric — records belong to the person, not the organization. This became the foundation for PCS persistence and the FEF structure.",
        callout: {
          type: "principles",
          items: [
            "Member-centric ownership — documents follow the person, not the unit",
            "Automatic deposit — Puckboard-generated docs associate without manual action",
            "FEF as structured sub-system — Form 8s with review lifecycle built in",
            "Role-appropriate access — members, supervisors, and admins see what they need",
          ],
        },
      },
      {
        phase: "03 — Design & Test",
        title: "FEF: Structuring the Evaluation Lifecycle",
        body: "The Flight Evaluation Folder required the most design investment — it isn't just storage, it's a lifecycle. Form 8s flow in from Puckboard Logging; Annual and Initial Reviews are required at defined intervals; commanders must be able to sign off from any location. I designed the FEF to surface the right review prompts at the right time, make the review status legible at a glance, and reduce the administrative overhead of what had previously been an entirely manual tracking process.",
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
        title: "[ Add your delivery narrative here ]",
        body: "[ Describe what shipped, how users responded, and what the measurable impact was on document management and career record continuity across PCS moves. ]",
        callout: {
          type: "quote",
          text: '"[ Add a quote from a user or stakeholder after launch. ]"',
          attr: "— [ Role ], post-launch",
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
    id: "nimbus",
    year: "2023",
    tag: "Design Systems · Web + iOS",
    title: "Nimbus Design System",
    subtitle: "One system. Every surface.",
    impact: "2 Platforms",
    impactLabel: "Web + iOS",
    color: "#8b5cf6",
    emoji: "⚡",
    role: "Product Designer · Collaborated with iOS engineers, web engineers, and product designers across multi-product suite",
    contributions: [
      "Token-based color, typography, and spacing foundation across iOS and web",
      "42+ Figma component library with full variant and state coverage",
      "Storybook component documentation for engineering handoff",
      "iOS-to-web translation guidelines — documented rationale for every cross-platform decision",
      "Custom icon library for the Puckboard product suite",
    ],
    links: [],
    // MEDIA: Replace placeholders with real Nimbus documentation exports
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
    id: "parkpal",
    year: "2022",
    tag: "Accessibility · Mobile",
    title: "ParkPal",
    subtitle: "Getting outside shouldn't have barriers.",
    impact: "A11y First",
    impactLabel: "Design Approach",
    color: "#10b981",
    emoji: "🌲",
    role: "UX Designer & Researcher · Capstone Project, University of Michigan School of Information",
    contributions: [
      "12 user interviews with elderly and mobility-impaired participants",
      "Persona development and journey mapping across 3 distinct user archetypes",
      "Moderated usability testing with target populations",
      "On-site research of local park accessibility affordances",
      "Competitive analysis across similar products (AllTrails, Google Maps, etc.)",
      "Accessibility-first mobile UI — WCAG AA compliant throughout",
      "Community contribution system design for crowdsourced trail condition updates",
    ],
    links: [
      {
        label: "Watch Demo ↗",
        url: "https://www.youtube.com/watch?v=WLHUd0M-6Cc",
      },
    ],
    // MEDIA: Replace placeholders with real ParkPal design artifacts
    media: [
      {
        type: "placeholder",
        label: "Trail detail screen — accessibility grading",
        note: "Add a hi-fi screen showing the trail detail view with accessibility grade, surface type, and condition info",
      },
      {
        type: "placeholder",
        label: "Journey map — pre-trip planning flow",
        note: "Add the journey map artifact showing the pre-trip planning experience for mobility-impaired users",
      },
      {
        type: "placeholder",
        label: "Usability test session — round 3",
        note: "Add a photo or summary artifact from an on-site usability test session",
      },
    ],
    overview:
      "People with mobility-related disabilities had almost no reliable way to understand whether a park or trail was actually accessible to them before visiting. Existing solutions were outdated, inconsistent, or simply absent. ParkPal was designed accessibility-first — not as an afterthought.",
    metrics: [
      { value: "12", label: "Research Participants" },
      { value: "3", label: "Usability Test Rounds" },
      { value: "WCAG AA", label: "Compliance Target" },
      { value: "A11y First", label: "Design Approach" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "A Gap Nobody Had Filled Well",
        body: "People with mobility-related disabilities had almost no reliable way to understand whether a park or trail was actually accessible to them before visiting. Existing solutions were outdated, inconsistent, or simply absent. I conducted 12 interviews with elderly users and mobility-impaired participants, supplemented by observation at local parks, to map the full scope of the problem.",
        callout: {
          type: "quote",
          text: '"I just want to know if I can get my wheelchair to the picnic area. Nobody tells you that."',
          attr: "— Research participant, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "The Core Insight: It Has to Work Before You Leave Home",
        body: "Synthesizing findings into personas and journey maps revealed the central insight: users needed trustworthy accessibility information before the trip, not after they arrived. Discovering a trail is inaccessible upon arrival isn't just inconvenient — for many users it means a wasted trip with no alternative. The app had to be a planning tool first, a navigation tool second.",
        callout: {
          type: "principles",
          items: [
            "Accessibility grades at trail and feature level",
            "Surface type and condition detail",
            "Community-verified updates from real users",
            "Offline access for areas with poor connectivity",
          ],
        },
      },
      {
        phase: "03 — Design & Test",
        title: "Three Rounds of Testing with Target Users",
        body: "I designed and tested three iterative prototypes with the same participant pool, tracking task completion and error rates across sessions. Major changes between rounds included simplifying the trail detail hierarchy, adding explicit surface material callouts after participants consistently asked about pavement vs. gravel, and redesigning the community contribution flow to reduce friction for older users.",
        callout: {
          type: "stat",
          stats: [
            { v: "3", l: "Usability test rounds" },
            { v: "↑ 40%", l: "Task completion improvement" },
            { v: "12", l: "Participants across all sessions" },
          ],
        },
      },
      {
        phase: "04 — Deliver",
        title: "Recognized for Accessibility-First Rigor",
        body: "ParkPal was recognized within the Michigan HCI program for its depth of accessibility research and the rigor of its user-centered process. The final prototype demonstrated that a well-researched, accessibility-first approach could produce a genuinely useful tool — not a watered-down version of a mainstream app with accessibility bolted on.",
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
    id: "pbt",
    year: "2025–Present",
    tag: "Enterprise UX · Web",
    title: "Puckboard Testing",
    subtitle: "Bringing test management into the modern era.",
    impact: "In Progress",
    impactLabel: "Active Design",
    color: "#f97316",
    emoji: "🧪",
    wip: true,
    role: "Lead Product Designer · Same cross-functional team as Puckboard Logging — building on established relationships with domain experts and end users",
    contributions: [
      "[ Add your specific contributions here as the work develops ]",
    ],
    links: [],
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    // MEDIA: Replace placeholders as work develops
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
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid #222", borderBottom: "1px solid #222", background: "#0a0a0a", padding: "10px 0" }}>
      <div style={{ display: "flex", gap: "0", animation: "ticker 30s linear infinite", whiteSpace: "nowrap", willChange: "transform" }}>
        {items.map((item, i) => (
          <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#909090", padding: "0 32px", textTransform: "uppercase" }}>
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
    <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: mobile ? "16px 20px" : "20px 48px", borderBottom: "none", background: "transparent" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <a href="#" aria-label="Matthew W. Henning — back to top" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "0.08em", color: "#fff", textDecoration: "none" }}>MWH</a>
        <span aria-label="Currently available for hire" role="status" style={{ fontSize: "9px", fontFamily: "'DM Mono', monospace", color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", padding: "2px 8px", borderRadius: "100px", letterSpacing: "0.1em", whiteSpace: "nowrap", animation: "statusPulse 2.4s ease-in-out infinite", display: "inline-flex", alignItems: "center", gap: "5px" }}>
          <span aria-hidden="true" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981", display: "inline-block", flexShrink: 0 }} />
          AVAILABLE
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
    <section aria-label="Introduction" style={{ padding: "100px 48px 80px", maxWidth: "1200px", background: "transparent" }}>
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
  const isWip = !!project.wip;
  return (
    <article
      onClick={(e) => onClick(project, e.currentTarget)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(project); } }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)} onBlur={() => setHovered(false)}
      tabIndex={0} role="button"
      aria-label={`${project.title} — ${project.subtitle}. ${isWip ? "Work in progress." : "Click to open case study."}`}
      style={{ background: hovered ? "#111" : "#0c0c0e", border: `1px solid ${hovered ? project.color : isWip ? project.color + "44" : "#1e1e1e"}`, borderRadius: "12px", padding: "clamp(20px, 4vw, 36px)", cursor: "pointer", transition: "all 0.25s ease", position: "relative", overflow: "hidden", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}22` : "none", opacity: isWip ? 0.85 : 1, outline: "none" }}>
      {isWip ? (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundImage: `repeating-linear-gradient(90deg, ${project.color} 0px, ${project.color} 8px, transparent 8px, transparent 14px)`, opacity: hovered ? 1 : 0.5, transition: "opacity 0.25s" }} />
      ) : (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: project.color, opacity: hovered ? 1 : 0.3, transition: "opacity 0.25s" }} />
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.12em", textTransform: "uppercase" }}>{project.year}</span>
          {isWip && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: project.color, background: project.color + "15", border: `1px solid ${project.color}50`, borderRadius: "100px", padding: "2px 8px" }}>● WIP</span>}
        </div>
        <span style={{ fontSize: "28px" }}>{project.emoji}</span>
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>{project.tag}</div>
      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "42px", fontWeight: "400", lineHeight: "1", color: "#fff", marginBottom: "8px", letterSpacing: "0.02em" }}>{project.title}</h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#8a8a8a", marginBottom: "32px", lineHeight: "1.4" }}>{project.subtitle}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", borderTop: `1px solid ${isWip ? project.color + "20" : "#1a1a1a"}`, paddingTop: "20px" }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", color: project.color, letterSpacing: "0.04em" }}>{project.impact}</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#7b7b7b", letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.impactLabel}</span>
      </div>
      <div style={{ marginTop: "16px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: hovered ? project.color : "#7b7b7b", letterSpacing: "0.08em", transition: "color 0.2s" }}>
        {isWip ? (hovered ? "See what's in progress →" : "Work in progress") : (hovered ? "Open case study →" : "Click to read →")}
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
              style={{ background: "none", border: "none", padding: 0, cursor: "zoom-in", textAlign: "left", width: "100%" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", borderRadius: "8px", overflow: "hidden", border: `1px solid #1e1e1e`, transition: "border-color 0.15s, box-shadow 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = color + "88"; e.currentTarget.style.boxShadow = `0 0 0 1px ${color}44`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.boxShadow = "none"; }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
        // Placeholder tile
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

function LightboxModal({ src, caption, onClose }) {
  const closeBtnRef = useRef(null);
  useEffect(() => {
    if (closeBtnRef.current) closeBtnRef.current.focus();
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div onClick={(e) => { e.stopPropagation(); onClose(); }} role="dialog" aria-modal="true" aria-label={caption}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", backdropFilter: "blur(16px)", zIndex: 2000, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <button ref={closeBtnRef} onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close image preview"
        style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#b2b2b2", cursor: "pointer", borderRadius: "8px", width: "36px", height: "36px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>×</button>
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "min(90vw, 1200px)", maxHeight: "80vh", width: "100%", borderRadius: "10px", overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,0.8)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption} style={{ display: "block", width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain", borderRadius: "10px" }} />
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
    <div onClick={onClose} role="presentation" aria-hidden="false"
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div onClick={(e) => e.stopPropagation()} ref={modalRef} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}
        style={{ background: "#0e0e12", border: `1px solid ${project.color}44`, borderRadius: "16px", width: "100%", maxWidth: "clamp(680px, 88vw, 1280px)", maxHeight: "90vh", overflowY: "auto", boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px ${project.color}22` }}>

        {/* ── Sticky header ── */}
        <div style={{ padding: `28px ${mobile ? "20px" : "40px"} 20px`, borderBottom: "1px solid #1a1a1a", position: "sticky", top: 0, background: "#0e0e12", zIndex: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>{project.tag} · {project.year}</div>
                {project.wip && (
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: project.color, background: project.color + "15", border: `1px solid ${project.color}40`, borderRadius: "4px", padding: "3px 10px" }}>
                    ● Work in Progress — Case study being documented as design develops
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
        <div style={{ padding: mobile ? "20px 20px 36px" : "32px 40px 48px" }}>

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

          {/* ── Two-column layout: left = all narrative content, right = scrollable media panel ── */}
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : `1fr clamp(280px, 28%, 400px)`, gap: "32px", alignItems: "stretch" }}>

            {/* LEFT: phases + prev/next + tags + contributions + links + disclaimer */}
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

              {/* Active phase card — flex-grow fills available vertical space */}
              <div style={{ flex: "1", background: "#0a0a0d", border: "1px solid #1e1e24", borderRadius: "12px", padding: "24px", borderTop: `3px solid ${project.color}` }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>{phase.phase}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px", color: "#fff", letterSpacing: "0.02em", marginBottom: "12px", fontWeight: "400" }}>{phase.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#c8c8c8", lineHeight: "1.65" }}>{phase.body}</p>
                <Callout callout={phase.callout} color={project.color} />
              </div>

              {/* Prev / next — sits flush below the phase card */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px", marginBottom: "0" }}>
                <button onClick={() => setActivePhase(Math.max(0, activePhase - 1))} disabled={activePhase === 0} aria-label="Previous phase"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: activePhase === 0 ? "#2a2a2a" : "#7d7d7d", background: "none", border: "none", cursor: activePhase === 0 ? "default" : "pointer", letterSpacing: "0.08em" }}>← Prev</button>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#606060", letterSpacing: "0.1em" }}>{activePhase + 1} / {project.phases.length}</span>
                <button onClick={() => setActivePhase(Math.min(project.phases.length - 1, activePhase + 1))} disabled={activePhase === project.phases.length - 1} aria-label="Next phase"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: activePhase === project.phases.length - 1 ? "#2a2a2a" : project.color, background: "none", border: "none", cursor: activePhase === project.phases.length - 1 ? "default" : "pointer", letterSpacing: "0.08em" }}>Next →</button>
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

            {/* RIGHT: scrollable media / artifact panel — matches full height of left column */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              position: mobile ? "static" : "sticky",
              top: "120px",
              maxHeight: mobile ? "none" : "calc(90vh - 180px)",
              alignSelf: "start",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px", flexShrink: 0 }}>Design Artifacts</div>
              {/* Scrollable inner container */}
              <div style={{ overflowY: "auto", flex: "1", paddingRight: "4px" }}>
                <MediaPanel media={project.media} color={project.color} onLightbox={setLightbox} />
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
  useEffect(() => {
    if (eggModalRef.current) { const first = eggModalRef.current.querySelector("button"); if (first) first.focus(); }
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { window.removeEventListener("keydown", handler); if (triggerRef && triggerRef.current) triggerRef.current.focus(); };
  }, [onClose]);

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
  return (
    <section id="about" aria-label="About Matthew Henning" style={{ padding: "100px 48px", borderTop: "1px solid #111", background: "transparent" }}>
      <div style={{ maxWidth: "900px" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#10b981", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>About</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: "400", color: "#fff", lineHeight: "0.95", letterSpacing: "0.02em", marginBottom: "48px" }}>
          I SPENT YEARS<br />
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}>LEARNING TO TELL</span><br />
          STORIES WITH FILM.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#909090", lineHeight: "1.65" }}>
            Before I learned to design interfaces, I learned to tell stories through a lens. That background — understanding composition, pacing, what earns attention and what loses it — shapes how I approach every UX problem I work on.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#909090", lineHeight: "1.65" }}>
            Today I design complex enterprise systems where clarity isn&apos;t optional. I research deeply, synthesize rigorously, and build design systems that outlast the project. M.S. in UX Research & Design & User-Centered Agile Development (HCI) from the University of Michigan School of Information. Based in Chicago.
          </p>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "48px" }}>
          {[["Interaction Design","#10b981"],["UX Research","#8b5cf6"],["Design Systems","#10b981"],["Accessibility","#f59e0b"],["Figma","#10b981"],["Usability Testing","#8b5cf6"],["HCI","#10b981"],["Agile / Scrum","#f59e0b"]].map(([skill, color]) => (
            <span key={skill} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: color, background: `${color}11`, border: `1px solid ${color}33`, borderRadius: "4px", padding: "6px 14px", letterSpacing: "0.08em" }}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-label="Contact" style={{ padding: "100px 48px", borderTop: "1px solid #111", background: "#080809" }}>
      <div style={{ maxWidth: "700px" }}>
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
          <a href="mailto:mhenn@umich.edu" style={{ background: "#fff", color: "#000", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: "600", transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.target.style.background = "#10b981"; e.target.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#000"; }}>Email Me →</a>
          <a href="https://linkedin.com/in/matthew-henning" target="_blank" rel="noreferrer" style={{ border: "1px solid #333", color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.target.style.borderColor = "#fff"; }} onMouseLeave={(e) => { e.target.style.borderColor = "#606060"; }}>LinkedIn</a>
          <a href="https://www.matthenning.me/s/MATTHEW-HENNING-RESUME-2.pdf" target="_blank" rel="noreferrer" style={{ border: "1px solid #333", color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.target.style.borderColor = "#fff"; }} onMouseLeave={(e) => { e.target.style.borderColor = "#606060"; }}>Resume ↗</a>
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

  const handleEgg = () => { setShowEgg(true); setEggFound(true); };

  useEffect(() => {
    const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let pos = 0;
    const handler = (e) => {
      if (e.key === KONAMI[pos]) { pos++; if (pos === KONAMI.length) { handleEgg(); pos = 0; } }
      else { pos = e.key === KONAMI[0] ? 1 : 0; }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #060608; color: #fff; min-height: 100vh; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
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

      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(6,6,8,0.95)", backdropFilter: "blur(12px)" }}>
        <Nav onEasterEgg={handleEgg} eggFound={eggFound} isMaster={isMaster} eggButtonRef={eggButtonRef} />
        <div style={{ position: "relative", height: "1px", background: "#222" }}>
          <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: scrollProgress + "%", background: "#10b981", transition: "width 0.05s linear" }} />
        </div>
        <Ticker />
      </div>

      <main style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="fade-up fade-up-1"><Hero /></div>

        <section id="work" aria-label="Selected work" style={{ padding: "80px clamp(16px, 4vw, 48px)", background: "transparent" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "48px" }}>
            <div className="fade-up fade-up-2">
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#10b981", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Selected Work</div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "400", color: "#fff", letterSpacing: "0.02em" }}>PRODUCTS I&apos;VE SHAPED.</h2>
            </div>
          </div>
          <div className="fade-up fade-up-3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "16px" }}>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={(proj, el) => { lastCardRef.current = el; setActiveProject(proj); }} />
            ))}
          </div>
        </section>

        <div className="fade-up fade-up-4">
          <About />
          <Contact />
        </div>
      </main>

      <footer aria-label="Site footer" style={{ borderTop: "1px solid #111", padding: "24px clamp(16px, 4vw, 48px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", maxWidth: "1280px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.08em" }}>© 2026 Matthew W. Henning</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7b7b7b", letterSpacing: "0.08em" }}>Chicago, IL · Available for hire</span>
      </footer>

      {activeProject && <Modal project={activeProject} onClose={() => setActiveProject(null)} triggerRef={lastCardRef} />}
      {showEgg && <EasterEggModal onClose={() => setShowEgg(false)} onMaster={() => setIsMaster(true)} caught={caughtPokemon} setCaught={setCaughtPokemon} triggerRef={eggButtonRef} />}
    </>
  );
}