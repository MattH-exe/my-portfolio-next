"use client";
import React, { useState, useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "✦ 65% Task-Time Reduction ✦",
  "✦ $20M+ Operational Savings ✦",
  "✦ ~375K Labor Hours Reclaimed ✦",
  "✦ Nearly 5 Years Enterprise UX ✦",
  "✦ Active DoD Secret Clearance ✦",
  "✦ Research-Driven Design ✦",
  "✦ Nimbus Design System ✦",
  "✦ M.S. HCI — University of Michigan ✦",
];

const PROJECTS = [
  {
    id: "pbl",
    year: "2022–Present",
    tag: "iOS · Enterprise UX",
    title: "Puckboard Logging",
    subtitle: "The future of post-mission paperwork.",
    impact: "3hrs → <10min",
    impactLabel: "Task Time",
    color: "#00d4ff",
    emoji: "✈️",
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/611298f29aedd7131a46a751/15b3ac58-8fd8-4989-9ff6-5f666181cac8/Case+Study+Template_Page_01.jpg",
    overview:
      "Puckboard Logging is an iOS application built to eliminate the most painful part of a pilot's day — post-mission paperwork. By pulling data from Puckboard Scheduling, pre-populating form fields, and automating verification, we turned a 3-hour manual process into something aircrews could complete in under 10 minutes.",
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
          attr: "— F/A-18 Pilot, contextual interview",
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
          text: '"This is the first piece of software I\'ve used that actually understands how we work."',
          attr: "— Naval Aviator, usability test session",
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
    id: "nimbus",
    year: "2022–Present",
    tag: "Design Systems · Web + iOS",
    title: "Nimbus Design System",
    subtitle: "One system. Every surface.",
    impact: "2 Platforms",
    impactLabel: "Web + iOS",
    color: "#7c3aed",
    emoji: "⚡",
    heroImage: null,
    overview:
      "Nimbus is the design system I helped lead across a cross-functional design and engineering team, serving as a primary bridge between Puckboard Logging's native iOS experience and the web-based products — Puckboard Scheduling and Puckboard Office. The core challenge: Logging was built on Apple UIKit and Swift, and we had no access to those native components on the web. Nimbus had to make both platforms feel like the same product without ever actually sharing a component.",
    metrics: [
      { value: "3 Products", label: "PBL · Scheduling · Office" },
      { value: "iOS + Web", label: "Platform Parity" },
      { value: "Token-based", label: "Foundation" },
      { value: "Storybook", label: "Eng Handoff" },
    ],
    phases: [
      {
        phase: "01 — Audit",
        title: "Quantifying the Inconsistency Problem",
        body: "Before designing anything, I led an audit of the existing product suite across all three platforms. We catalogued every unique color value, type style, spacing unit, and component pattern in use. The result was sobering: significant visual drift between the iOS app and web products, no shared tokens, and engineering teams on each surface making independent decisions about how to interpret the same UI patterns.",
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
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/611298f29aedd7131a46a751/77afdeec-6a47-403d-84c6-d3798780e25b/Executive+Summary.png",
    overview:
      "ParkPal is a research-driven mobile application designed to help people with mobility-related disabilities discover, evaluate, and navigate outdoor parks and trails before they leave home. Built on a foundation of primary research with elderly and mobility-impaired users, the design prioritized trustworthy, pre-trip accessibility information over in-the-moment guidance.",
    metrics: [
      { value: "12", label: "User Interviews" },
      { value: "3", label: "Usability Test Rounds" },
      { value: "2", label: "Personas Developed" },
      { value: "A11y", label: "WCAG AA Compliant" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "A Problem Hidden in Plain Sight",
        body: "Our research began with a clear question: why do mobility-impaired individuals visit parks at significantly lower rates than the general population? Interviews with elderly users and people using mobility aids revealed the core barrier — they had no reliable way to know whether a park was actually accessible before making the trip. The risk of arriving somewhere inaccessible was enough to stop them from going at all.",
        callout: {
          type: "quote",
          text: "\"I just stopped trying. You get there and there's steps, or the path is gravel, and you've wasted your whole morning.\"",
          attr: "— Interview participant, 71, uses a walker",
        },
      },
      {
        phase: "02 — Research",
        title: "Interviews, Observation & Competitive Analysis",
        body: "We conducted 12 semi-structured interviews with elderly individuals and people with mobility impairments, supplemented by observational sessions at local parks. A competitive analysis of AllTrails, Google Maps, and ADA park signage revealed a consistent gap: none of these tools provided accessibility-specific information at the trail or feature level. Existing solutions described parks, not whether you could actually use them.",
        callout: {
          type: "stat",
          stats: [
            { v: "12", l: "Participants interviewed" },
            { v: "4", l: "Parks observed on-site" },
            { v: "0", l: "Existing apps with trail-level A11y data" },
          ],
        },
      },
      {
        phase: "03 — Define",
        title: "Two Personas, One Core Insight",
        body: "Research synthesis produced two primary personas — a 68-year-old retired teacher who uses a cane and plans outings carefully, and a 45-year-old wheelchair user who wants spontaneous access to outdoor space. Despite different contexts, both shared the same core need: reliable, specific accessibility information before the trip, not during it. This reframed the entire product — ParkPal had to be a planning tool first.",
        callout: {
          type: "principles",
          items: [
            "Pre-trip information over in-situ guidance",
            "Specificity over generality — trail-level, not park-level",
            "Community-verified data to stay current",
            "Accessible UI that models the product's values",
          ],
        },
      },
      {
        phase: "04 — Prototype & Test",
        title: "Three Design Iterations, Three Rounds of Testing",
        body: "We prototyped three distinct interaction models for communicating accessibility ratings: icon-based, text-based, and a hybrid rating system. Usability testing across three rounds with target users showed that the hybrid model — combining a simple A/B/C accessibility grade with specific feature-level details — produced the fastest comprehension and highest confidence scores. Each round surfaced edge cases that tightened the information architecture.",
        callout: {
          type: "quote",
          text: '"The A/B/C rating is simple enough that I trust it immediately. And then I can drill down if I need to."',
          attr: "— Usability test participant, round 2",
        },
      },
      {
        phase: "05 — Deliver",
        title: "A Research-Validated Accessibility-First Experience",
        body: "The final design included trail-level accessibility grades, surface type and incline data, accessible facility locations, and a community contribution layer for crowdsourced updates. Every UI decision was made against WCAG AA standards — the product had to be accessible itself. ParkPal was recognized for its research rigor and accessibility-first methodology.",
        callout: {
          type: "stat",
          stats: [
            { v: "3", l: "Test rounds completed" },
            { v: "WCAG AA", l: "Compliance standard met" },
            { v: "A/B/C", label: "Accessibility rating system" },
          ],
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
    id: "aida",
    year: "2021",
    tag: "AI · EdTech · iOS",
    title: "Aida by Pearson",
    subtitle: "An AI tutor that meets students where they are.",
    impact: "0→1",
    impactLabel: "MVP Shipped",
    color: "#f59e0b",
    emoji: "📐",
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/611298f29aedd7131a46a751/90597d37-7686-4ca0-b102-9e007aaca2c8/Case+Study+Template_Page_01.jpg",
    overview:
      "Aida is an AI/OCR-powered iOS tutoring application designed for Pearson, built to remove the input barrier for calculus learners. Instead of learning LaTeX or special syntax to express math, students write equations by hand — and Aida recognizes, interprets, and responds in real time. Delivered end-to-end from research through prototype in one summer.",
    metrics: [
      { value: "0→1", label: "MVP Shipped" },
      { value: "1 Summer", label: "Research to Handoff" },
      { value: "AI/OCR", label: "Core Technology" },
      { value: "Pearson", label: "Partner" },
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "The Input Problem Nobody Had Solved",
        body: "Calculus students using digital learning tools faced a frustrating paradox: the tools were designed to help them learn math, but using them required first learning LaTeX syntax — a separate skill entirely. Interviews with undergrad calculus students revealed that the friction of expression was causing students to disengage before getting to the actual learning.",
        callout: {
          type: "quote",
          text: '"I know what the answer looks like in my head. I just can\'t figure out how to type it."',
          attr: "— Calculus student, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Service Blueprint of the Full Learning Experience",
        body: "I developed a service blueprint mapping the end-to-end calculus student experience — from pre-class prep through homework, tutoring sessions, and exam review. This revealed that the input problem wasn't isolated; it compounded across every touchpoint. Students who got stuck expressing a problem early in a study session often abandoned the session entirely. The blueprint became the primary artifact for Pearson stakeholder alignment.",
        callout: {
          type: "principles",
          items: [
            "Handwriting as the primary input modality",
            "Immediate feedback — no waiting for tutor response",
            "Scaffolded hints over direct answers",
            "Familiar notebook metaphor for UI",
          ],
        },
      },
      {
        phase: "03 — Prototype",
        title: "Testing the Handwriting Recognition Hypothesis",
        body: "The core hypothesis was that handwriting input — via OCR — would lower the barrier enough to meaningfully improve engagement. I built a low-fidelity prototype simulating the handwriting-to-recognition flow and tested it with 8 calculus students. All 8 preferred it over text-based input. The prototype also surfaced an unexpected insight: students wanted to see their handwriting alongside the interpreted expression — confirmation they'd been understood.",
        callout: {
          type: "stat",
          stats: [
            { v: "8/8", l: "Students preferred handwriting input" },
            { v: "1", l: "Unexpected insight surfaced" },
            { v: "2", l: "Prototype iterations before hi-fi" },
          ],
        },
      },
      {
        phase: "04 — Deliver",
        title: "High-Fidelity MVP, Handed Off to Pearson",
        body: "I delivered a high-fidelity iOS prototype with full interaction specifications, a component library, and a handoff package that Pearson's engineering team used directly in subsequent development planning. The journey maps and service blueprints were formally incorporated into Pearson's product roadmap. The MVP demonstrated that handwriting recognition could remove the input barrier for a meaningful subset of calculus learners.",
        callout: {
          type: "quote",
          text: '"He went into perfect detail about learners\' needs and motivations before solutioning. He took the initiative to design a calculator feature that fit with our value proposition."',
          attr: "— Pearson team, post-project testimonial",
        },
      },
    ],
    tags: [
      "AI/OCR",
      "EdTech",
      "iOS",
      "Service Blueprinting",
      "Prototyping",
      "Pearson",
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
    heroImage: null,
    overview:
      "Puckboard Testing is a new web-based test management platform currently in active design. Building on lessons learned from Puckboard Logging, the product aims to modernize how military units plan, track, and report on readiness testing — replacing a fragmented mix of spreadsheets and paper-based processes with a structured, data-driven workflow.",
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
  { name: "Bulbasaur", id: 1 },
  { name: "Ivysaur", id: 2 },
  { name: "Venusaur", id: 3 },
  { name: "Charmander", id: 4 },
  { name: "Charmeleon", id: 5 },
  { name: "Charizard", id: 6 },
  { name: "Squirtle", id: 7 },
  { name: "Wartortle", id: 8 },
  { name: "Blastoise", id: 9 },
  { name: "Caterpie", id: 10 },
  { name: "Metapod", id: 11 },
  { name: "Butterfree", id: 12 },
  { name: "Weedle", id: 13 },
  { name: "Kakuna", id: 14 },
  { name: "Beedrill", id: 15 },
  { name: "Pidgey", id: 16 },
  { name: "Pidgeotto", id: 17 },
  { name: "Pidgeot", id: 18 },
  { name: "Rattata", id: 19 },
  { name: "Raticate", id: 20 },
  { name: "Spearow", id: 21 },
  { name: "Fearow", id: 22 },
  { name: "Ekans", id: 23 },
  { name: "Arbok", id: 24 },
  { name: "Pikachu", id: 25 },
  { name: "Raichu", id: 26 },
  { name: "Sandshrew", id: 27 },
  { name: "Sandslash", id: 28 },
  { name: "Nidoran♀", id: 29 },
  { name: "Nidorina", id: 30 },
  { name: "Nidoqueen", id: 31 },
  { name: "Nidoran♂", id: 32 },
  { name: "Nidorino", id: 33 },
  { name: "Nidoking", id: 34 },
  { name: "Clefairy", id: 35 },
  { name: "Clefable", id: 36 },
  { name: "Vulpix", id: 37 },
  { name: "Ninetales", id: 38 },
  { name: "Jigglypuff", id: 39 },
  { name: "Wigglytuff", id: 40 },
  { name: "Zubat", id: 41 },
  { name: "Golbat", id: 42 },
  { name: "Oddish", id: 43 },
  { name: "Gloom", id: 44 },
  { name: "Vileplume", id: 45 },
  { name: "Paras", id: 46 },
  { name: "Parasect", id: 47 },
  { name: "Venonat", id: 48 },
  { name: "Venomoth", id: 49 },
  { name: "Diglett", id: 50 },
  { name: "Dugtrio", id: 51 },
  { name: "Meowth", id: 52 },
  { name: "Persian", id: 53 },
  { name: "Psyduck", id: 54 },
  { name: "Golduck", id: 55 },
  { name: "Mankey", id: 56 },
  { name: "Primeape", id: 57 },
  { name: "Growlithe", id: 58 },
  { name: "Arcanine", id: 59 },
  { name: "Poliwag", id: 60 },
  { name: "Poliwhirl", id: 61 },
  { name: "Poliwrath", id: 62 },
  { name: "Abra", id: 63 },
  { name: "Kadabra", id: 64 },
  { name: "Alakazam", id: 65 },
  { name: "Machop", id: 66 },
  { name: "Machoke", id: 67 },
  { name: "Machamp", id: 68 },
  { name: "Bellsprout", id: 69 },
  { name: "Weepinbell", id: 70 },
  { name: "Victreebel", id: 71 },
  { name: "Tentacool", id: 72 },
  { name: "Tentacruel", id: 73 },
  { name: "Geodude", id: 74 },
  { name: "Graveler", id: 75 },
  { name: "Golem", id: 76 },
  { name: "Ponyta", id: 77 },
  { name: "Rapidash", id: 78 },
  { name: "Slowpoke", id: 79 },
  { name: "Slowbro", id: 80 },
  { name: "Magnemite", id: 81 },
  { name: "Magneton", id: 82 },
  { name: "Farfetch'd", id: 83 },
  { name: "Doduo", id: 84 },
  { name: "Dodrio", id: 85 },
  { name: "Seel", id: 86 },
  { name: "Dewgong", id: 87 },
  { name: "Grimer", id: 88 },
  { name: "Muk", id: 89 },
  { name: "Shellder", id: 90 },
  { name: "Cloyster", id: 91 },
  { name: "Gastly", id: 92 },
  { name: "Haunter", id: 93 },
  { name: "Gengar", id: 94 },
  { name: "Onix", id: 95 },
  { name: "Drowzee", id: 96 },
  { name: "Hypno", id: 97 },
  { name: "Krabby", id: 98 },
  { name: "Kingler", id: 99 },
  { name: "Voltorb", id: 100 },
  { name: "Electrode", id: 101 },
  { name: "Exeggcute", id: 102 },
  { name: "Exeggutor", id: 103 },
  { name: "Cubone", id: 104 },
  { name: "Marowak", id: 105 },
  { name: "Hitmonlee", id: 106 },
  { name: "Hitmonchan", id: 107 },
  { name: "Lickitung", id: 108 },
  { name: "Koffing", id: 109 },
  { name: "Weezing", id: 110 },
  { name: "Rhyhorn", id: 111 },
  { name: "Rhydon", id: 112 },
  { name: "Chansey", id: 113 },
  { name: "Tangela", id: 114 },
  { name: "Kangaskhan", id: 115 },
  { name: "Horsea", id: 116 },
  { name: "Seadra", id: 117 },
  { name: "Goldeen", id: 118 },
  { name: "Seaking", id: 119 },
  { name: "Staryu", id: 120 },
  { name: "Starmie", id: 121 },
  { name: "Mr. Mime", id: 122 },
  { name: "Scyther", id: 123 },
  { name: "Jynx", id: 124 },
  { name: "Electabuzz", id: 125 },
  { name: "Magmar", id: 126 },
  { name: "Pinsir", id: 127 },
  { name: "Tauros", id: 128 },
  { name: "Magikarp", id: 129 },
  { name: "Gyarados", id: 130 },
  { name: "Lapras", id: 131 },
  { name: "Ditto", id: 132 },
  { name: "Eevee", id: 133 },
  { name: "Vaporeon", id: 134 },
  { name: "Jolteon", id: 135 },
  { name: "Flareon", id: 136 },
  { name: "Porygon", id: 137 },
  { name: "Omanyte", id: 138 },
  { name: "Omastar", id: 139 },
  { name: "Kabuto", id: 140 },
  { name: "Kabutops", id: 141 },
  { name: "Aerodactyl", id: 142 },
  { name: "Snorlax", id: 143 },
  { name: "Articuno", id: 144 },
  { name: "Zapdos", id: 145 },
  { name: "Moltres", id: 146 },
  { name: "Dratini", id: 147 },
  { name: "Dragonair", id: 148 },
  { name: "Dragonite", id: 149 },
  { name: "Mewtwo", id: 150 },
  { name: "Mew", id: 151 },
];

// ── Components ────────────────────────────────────────────────

const Ticker = React.memo(function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid #222",
        borderBottom: "1px solid #222",
        background: "#0a0a0a",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "ticker 30s linear infinite",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "#888",
              padding: "0 32px",
              textTransform: "uppercase",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
});

function Nav({ onEasterEgg, eggFound }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 600);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: mobile ? "16px 20px" : "20px 48px",
        borderBottom: "none",
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexShrink: 0,
        }}
      >
        <span
          aria-label="Matthew W. Henning"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22px",
            letterSpacing: "0.08em",
            color: "#fff",
          }}
        >
          MWH
        </span>
        <span
          aria-label="Currently available for hire"
          role="status"
          style={{
            fontSize: "9px",
            fontFamily: "'DM Mono', monospace",
            color: "#10b981",
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.25)",
            padding: "2px 8px",
            borderRadius: "100px",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            animation: "statusPulse 2.4s ease-in-out infinite",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#10b981",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          AVAILABLE
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: mobile ? "16px" : "32px",
          alignItems: "center",
        }}
      >
        {!mobile &&
          ["Work", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: "#666",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#666")}
            >
              {link}
            </a>
          ))}
        <button
          onClick={onEasterEgg}
          aria-label="Easter egg — try the Konami code"
          aria-pressed={eggFound}
          title="psst... try the konami code ↑↑↓↓←→←→BA"
          style={{
            background: "none",
            border: "1px solid #222",
            borderRadius: "6px",
            color: eggFound ? "#facc15" : "#333",
            cursor: "pointer",
            padding: "6px 10px",
            fontSize: "14px",
            lineHeight: "1",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          {eggFound ? "⭐" : "★"}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      aria-label="Introduction"
      style={{
        padding: "100px 48px 80px",
        maxWidth: "1200px",
        background: "transparent",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: "#10b981",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "28px",
        }}
      >
        Product Designer · UX Researcher · Chicago, IL
      </p>

      <h1 style={{ margin: 0 }}>
        <span
          style={{
            display: "block",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(64px, 10vw, 130px)",
            lineHeight: "0.92",
            fontWeight: "400",
            color: "#fff",
            margin: "0 0 8px",
            letterSpacing: "0.02em",
          }}
        >
          MATTHEW
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(64px, 10vw, 130px)",
            lineHeight: "0.92",
            fontWeight: "400",
            color: "transparent",
            WebkitTextStroke: "1.5px #fff",
            margin: "0 0 40px",
            letterSpacing: "0.02em",
          }}
        >
          HENNING.
        </span>
      </h1>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(18px, 2.5vw, 26px)",
          color: "#aaa",
          maxWidth: "560px",
          lineHeight: "1.5",
          marginBottom: "48px",
        }}
      >
        Research-driven design for systems that matter.
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a
          href="#work"
          style={{
            background: "#fff",
            color: "#000",
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "14px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#10b981";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#000";
          }}
        >
          View Work →
        </a>
        <a
          href="mailto:mhenn@umich.edu"
          style={{
            border: "1px solid #333",
            color: "#fff",
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "14px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "#333";
          }}
        >
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
      onClick={() => onClick(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(project);
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} — ${project.subtitle}. ${isWip ? "Work in progress." : "Click to open case study."}`}
      style={{
        background: hovered ? "#111" : "#0c0c0e",
        border: `1px solid ${hovered ? project.color : isWip ? project.color + "44" : "#1e1e1e"}`,
        borderRadius: "12px",
        padding: "clamp(20px, 4vw, 36px)",
        cursor: "pointer",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}22`
          : "none",
        opacity: isWip ? 0.85 : 1,
      }}
    >
      {/* Accent line — dashed for WIP */}
      {isWip ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            backgroundImage: `repeating-linear-gradient(90deg, ${project.color} 0px, ${project.color} 8px, transparent 8px, transparent 14px)`,
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 0.25s",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: project.color,
            opacity: hovered ? 1 : 0.3,
            transition: "opacity 0.25s",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "#555",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {project.year}
          </span>
          {isWip && (
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: project.color,
                background: project.color + "15",
                border: `1px solid ${project.color}50`,
                borderRadius: "100px",
                padding: "2px 8px",
              }}
            >
              ● WIP
            </span>
          )}
        </div>
        <span style={{ fontSize: "28px" }}>{project.emoji}</span>
      </div>

      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          color: project.color,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {project.tag}
      </div>

      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "42px",
          fontWeight: "400",
          lineHeight: "1",
          color: "#fff",
          marginBottom: "8px",
          letterSpacing: "0.02em",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          color: "#777",
          marginBottom: "32px",
          lineHeight: "1.4",
        }}
      >
        {project.subtitle}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "8px",
          borderTop: `1px solid ${isWip ? project.color + "20" : "#1a1a1a"}`,
          paddingTop: "20px",
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "32px",
            color: project.color,
            letterSpacing: "0.04em",
          }}
        >
          {project.impact}
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "#555",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {project.impactLabel}
        </span>
      </div>

      <div
        style={{
          marginTop: "16px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: hovered ? project.color : "#444",
          letterSpacing: "0.08em",
          transition: "color 0.2s",
        }}
      >
        {isWip
          ? hovered
            ? "See what's in progress →"
            : "Work in progress"
          : hovered
            ? "Open case study →"
            : "Click to read →"}
      </div>
    </article>
  );
}

function Callout({ callout, color }) {
  if (!callout) return null;
  if (callout.type === "quote")
    return (
      <div
        style={{
          borderLeft: `3px solid ${color}`,
          paddingLeft: "20px",
          margin: "20px 0",
          background: color + "08",
          borderRadius: "0 8px 8px 0",
          padding: "16px 20px",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "#ccc",
            lineHeight: "1.6",
            marginBottom: "8px",
          }}
        >
          {callout.text}
        </p>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: color,
            letterSpacing: "0.1em",
          }}
        >
          {callout.attr}
        </span>
      </div>
    );
  if (callout.type === "stat")
    return (
      <div
        style={{
          display: "flex",
          gap: "12px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        {callout.stats.map((s, i) => (
          <div
            key={i}
            style={{
              flex: "1",
              minWidth: "80px",
              background: color + "0d",
              border: `1px solid ${color}33`,
              borderRadius: "8px",
              padding: "14px 16px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "28px",
                color: color,
                letterSpacing: "0.04em",
                lineHeight: "1",
              }}
            >
              {s.v}
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                color: "#666",
                letterSpacing: "0.08em",
                marginTop: "4px",
                textTransform: "uppercase",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
    );
  if (callout.type === "principles")
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          margin: "20px 0",
        }}
      >
        {callout.items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: color,
              background: color + "10",
              border: `1px solid ${color}30`,
              borderRadius: "100px",
              padding: "5px 14px",
              letterSpacing: "0.06em",
            }}
          >
            ↳ {item}
          </span>
        ))}
      </div>
    );
  return null;
}

function Modal({ project, onClose }) {
  const [activePhase, setActivePhase] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setActivePhase(0);
  }, [project.id]);

  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 600);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  const phase = project.phases[activePhase];

  return (
    <div
      onClick={onClose}
      role="presentation"
      aria-hidden="false"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        style={{
          background: "#0e0e12",
          border: `1px solid ${project.color}44`,
          borderRadius: "16px",
          width: "100%",
          maxWidth: "920px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px ${project.color}22`,
        }}
      >
        {/* Hero image */}
        {project.heroImage && (
          <div
            style={{
              width: "100%",
              height: "240px",
              overflow: "hidden",
              borderRadius: "16px 16px 0 0",
              position: "relative",
              marginBottom: "-1px",
            }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to bottom, transparent 20%, #0e0e12 95%)`,
              }}
            />
          </div>
        )}

        {/* Sticky header */}
        <div
          style={{
            padding: project.heroImage
              ? `20px ${mobile ? "20px" : "36px"} 20px`
              : `28px ${mobile ? "20px" : "36px"} 20px`,
            borderBottom: `1px solid #1a1a1a`,
            position: "sticky",
            top: 0,
            background: "#0e0e12",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    color: project.color,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.tag} · {project.year}
                </div>
                {project.wip && (
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: project.color,
                      background: project.color + "15",
                      border: `1px solid ${project.color}40`,
                      borderRadius: "4px",
                      padding: "3px 10px",
                    }}
                  >
                    ● Work in Progress — Case study being documented as design
                    develops
                  </span>
                )}
              </div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: "400",
                  lineHeight: "1",
                  color: "#fff",
                  letterSpacing: "0.02em",
                }}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close case study"
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                color: "#888",
                cursor: "pointer",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginBottom: "4px",
              }}
            >
              ×
            </button>
          </div>
        </div>

        <div style={{ padding: mobile ? "20px 20px 36px" : "28px 36px 44px" }}>
          {/* Overview + metrics */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "#a8a8a8",
              lineHeight: "1.65",
              marginBottom: "24px",
            }}
          >
            {project.overview}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${mobile ? 3 : project.metrics.length}, 1fr)`,
              gap: "10px",
              marginBottom: "36px",
            }}
          >
            {project.metrics
              .slice(0, mobile ? 3 : project.metrics.length)
              .map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: project.color + "0a",
                    border: `1px solid ${project.color}25`,
                    borderRadius: "8px",
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "22px",
                      color: project.color,
                      letterSpacing: "0.04em",
                      lineHeight: "1",
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "9px",
                      color: "#555",
                      letterSpacing: "0.08em",
                      marginTop: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
          </div>

          {/* Phase nav */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}
          >
            {project.phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                aria-label={`Go to phase: ${p.phase}`}
                aria-pressed={i === activePhase}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  border: `1px solid ${i === activePhase ? project.color : "#2a2a2a"}`,
                  background:
                    i === activePhase ? project.color + "18" : "transparent",
                  color: i === activePhase ? project.color : "#555",
                  transition: "all 0.15s",
                }}
              >
                {p.phase.split(" — ")[1]}
              </button>
            ))}
          </div>

          {/* Active phase content */}
          <div
            style={{
              background: "#0a0a0d",
              border: "1px solid #1e1e24",
              borderRadius: "12px",
              padding: "28px",
              borderTop: `3px solid ${project.color}`,
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                color: project.color,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              {phase.phase}
            </div>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "28px",
                color: "#fff",
                letterSpacing: "0.02em",
                marginBottom: "14px",
                fontWeight: "400",
              }}
            >
              {phase.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#c8c8c8",
                lineHeight: "1.65",
                marginBottom: "4px",
              }}
            >
              {phase.body}
            </p>
            <Callout callout={phase.callout} color={project.color} />
          </div>

          {/* Phase stepper arrows */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "16px",
            }}
          >
            <button
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
              aria-label="Previous phase"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: activePhase === 0 ? "#2a2a2a" : "#666",
                background: "none",
                border: "none",
                cursor: activePhase === 0 ? "default" : "pointer",
                letterSpacing: "0.08em",
              }}
            >
              ← Prev
            </button>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                color: "#333",
                letterSpacing: "0.1em",
              }}
            >
              {activePhase + 1} / {project.phases.length}
            </span>
            <button
              onClick={() =>
                setActivePhase(
                  Math.min(project.phases.length - 1, activePhase + 1),
                )
              }
              disabled={activePhase === project.phases.length - 1}
              aria-label="Next phase"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color:
                  activePhase === project.phases.length - 1
                    ? "#2a2a2a"
                    : project.color,
                background: "none",
                border: "none",
                cursor:
                  activePhase === project.phases.length - 1
                    ? "default"
                    : "pointer",
                letterSpacing: "0.08em",
              }}
            >
              Next →
            </button>
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid #1a1a1a",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "#666",
                  background: "#141414",
                  border: "1px solid #222",
                  borderRadius: "4px",
                  padding: "4px 12px",
                  letterSpacing: "0.08em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EasterEggModal({ onClose }) {
  const [caught, setCaught] = useState([]);
  const [current, setCurrent] = useState(
    () => POKEMON[Math.floor(Math.random() * POKEMON.length)],
  );
  const [wasAlreadyCaught, setWasAlreadyCaught] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [message, setMessage] = useState("");
  const [spriteData, setSpriteData] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setWasAlreadyCaught(caught.some((p) => p.id === current.id));
  }, [current.id]);

  useEffect(() => {
    setSpriteData(null);
    const url = "https://pokeapi.co/api/v2/pokemon/" + current.id;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const sprite =
          data.sprites &&
          ((data.sprites.other &&
            data.sprites.other["official-artwork"] &&
            data.sprites.other["official-artwork"].front_default) ||
            data.sprites.front_default);
        if (sprite) {
          return fetch(sprite)
            .then((r) => r.blob())
            .then((blob) => {
              const reader = new FileReader();
              reader.onload = () => setSpriteData(reader.result);
              reader.readAsDataURL(blob);
            });
        }
      })
      .catch(() => setSpriteData("error"));
  }, [current.id]);

  const isCaught = caught.some((p) => p.id === current.id);
  const caughtCount = Math.min(caught.length, 10);
  const isMaster = caught.length >= 10;

  const throwBall = () => {
    if (wasAlreadyCaught) return;
    setShaking(true);
    setMessage("");
    setTimeout(() => {
      setShaking(false);
      const success = Math.random() > 0.35;
      if (success) {
        const newCaught = [...caught, current];
        setCaught(newCaught);
        setMessage("Gotcha! " + current.name + " was caught!");
        setTimeout(() => {
          const remaining = POKEMON.filter(
            (p) => !newCaught.some((c) => c.id === p.id),
          );
          if (remaining.length > 0) {
            const next =
              remaining[Math.floor(Math.random() * remaining.length)];
            setWasAlreadyCaught(false);
            setCurrent(next);
            setMessage("");
          }
        }, 1200);
      } else {
        setMessage(current.name + " broke free!");
        setTimeout(() => setMessage(""), 1200);
      }
    }, 800);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(12px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0a12",
          border: "2px solid #facc15",
          borderRadius: "16px",
          padding: "40px",
          maxWidth: "480px",
          width: "90%",
          boxShadow: "0 0 60px rgba(250,204,21,0.15)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "#facc15",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          ✦ You found the easter egg ✦
        </div>

        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "48px",
            color: "#fff",
            marginBottom: "32px",
            letterSpacing: "0.04em",
          }}
        >
          GOTTA CATCH 'EM ALL
        </h2>

        {/* Battle screen */}
        <div
          style={{
            background: "#06060e",
            border: "1px solid #1e1e2e",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "96px",
              height: "96px",
              margin: "0 auto 8px",
              animation: shaking
                ? "shake 0.15s ease infinite"
                : "float 3s ease-in-out infinite",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {wasAlreadyCaught ? (
              <span style={{ fontSize: "72px" }}>⭐</span>
            ) : spriteData && spriteData !== "error" ? (
              <img
                src={spriteData}
                alt={current.name}
                style={{
                  width: "96px",
                  height: "96px",
                  objectFit: "contain",
                  imageRendering: "auto",
                }}
              />
            ) : spriteData === "error" ? (
              <span style={{ fontSize: "64px" }}>❓</span>
            ) : (
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "#444",
                }}
              >
                loading...
              </span>
            )}
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "32px",
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            {current.name}
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "#555",
              marginTop: "4px",
            }}
          >
            {wasAlreadyCaught ? "Already caught..." : "Wild Pokémon appeared!"}
          </div>
        </div>

        {message && (
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              color: message.includes("Gotcha") ? "#4ade80" : "#f87171",
              marginBottom: "16px",
              letterSpacing: "0.08em",
              minHeight: "20px",
            }}
          >
            {message}
          </div>
        )}

        <button
          onClick={throwBall}
          disabled={wasAlreadyCaught}
          style={{
            background: wasAlreadyCaught ? "#1a1a1a" : "#facc15",
            color: wasAlreadyCaught ? "#444" : "#000",
            border: "none",
            borderRadius: "8px",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22px",
            letterSpacing: "0.08em",
            padding: "12px 32px",
            cursor: wasAlreadyCaught ? "default" : "pointer",
            marginBottom: "24px",
            width: "100%",
            transition: "all 0.15s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {wasAlreadyCaught ? (
            "ALREADY CAUGHT..."
          ) : (
            <>
              THROW POKÉ BALL
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABkElEQVR4nK2VTU4CQRCFP2QibkXc4pIFd3CiN5Cfi+AxIHAAwxm8ByQGwhVIMBGWhAQk42JeM8VIM2OwkkpPV716ma6uqga/FIBA6198B8ApKQJ7s69IAVbA1xmsV4pa74BXYKTASLoHxkBHGBuTSdoG5oZsCrxLp8Y+F/YsuXN0TGAPqJ3A1oCuwXV85M7QEHAFPBl/AJSkgbE/CxsBL2nygrQMfAJbIJTv2nPEonwIu1XsreE7/IFLQV/7EknVNIE3acP8UEnfA45TEmCCP4BvoKr9ldYhSS6dDlOYB2AnDstJRaQzHfNGa4ukKkLivE9ka6ewM3G4egegLvAGWChfC2BNXLehwT7Ktk5hN+Ko26NkSWS+vW18SnypaIt0QpyGkKRBWmSkwl7ejvgi7GnyXF5VpEeXly63gfa23Bok5dY0wa7c+njKrUBc3Jc2SNnwHYAQt2UELInb1UmelnaN450Xdgh18Q+hHjmGUJr8X8dmmtwN+jG/B/1IvrKPNO/TdE/yWiylPmymXPSY/gBY9oZgBkYM5AAAAABJRU5ErkJggg=="
                alt="pokeball"
                style={{ width: "20px", height: "20px", objectFit: "contain" }}
              />
            </>
          )}
        </button>

        {/* Caught counter */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "#555",
            letterSpacing: "0.1em",
          }}
        >
          {caughtCount} / 10 caught
          {isMaster && " · Pokémon Master 🏆"}
        </div>

        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#333",
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            cursor: "pointer",
            marginTop: "16px",
            letterSpacing: "0.08em",
          }}
        >
          [ close ]
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      aria-label="About Matthew Henning"
      style={{
        padding: "100px 48px",
        borderTop: "1px solid #111",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "#10b981",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          About
        </div>

        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: "400",
            color: "#fff",
            lineHeight: "0.95",
            letterSpacing: "0.02em",
            marginBottom: "48px",
          }}
        >
          I SPENT YEARS
          <br />
          <span
            style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}
          >
            LEARNING TO TELL
          </span>
          <br />
          STORIES WITH FILM.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              color: "#888",
              lineHeight: "1.65",
            }}
          >
            Before I learned to design interfaces, I learned to tell stories
            through a lens. That background — understanding composition, pacing,
            what earns attention and what loses it — shapes how I approach every
            UX problem I work on.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              color: "#888",
              lineHeight: "1.65",
            }}
          >
            Today I design complex enterprise systems where clarity isn't
            optional. I research deeply, synthesize rigorously, and build design
            systems that outlast the project. M.S. in HCI from the University of
            Michigan. Based in Chicago.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "48px",
          }}
        >
          {[
            ["Interaction Design", "#10b981"],
            ["UX Research", "#7c3aed"],
            ["Design Systems", "#10b981"],
            ["Accessibility", "#f59e0b"],
            ["Figma", "#10b981"],
            ["Usability Testing", "#7c3aed"],
            ["HCI", "#10b981"],
            ["Agile / Scrum", "#f59e0b"],
          ].map(([skill, color]) => (
            <span
              key={skill}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: color,
                background: `${color}11`,
                border: `1px solid ${color}33`,
                borderRadius: "4px",
                padding: "6px 14px",
                letterSpacing: "0.08em",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{
        padding: "100px 48px",
        borderTop: "1px solid #111",
        background: "#080809",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "#10b981",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Contact
        </div>

        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: "400",
            color: "#fff",
            lineHeight: "0.92",
            letterSpacing: "0.02em",
            marginBottom: "32px",
          }}
        >
          READY
          <br />
          <span
            style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}
          >
            WHEN
          </span>
          <br />
          YOU ARE.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "17px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "40px",
            maxWidth: "500px",
          }}
        >
          Open to Senior Product Designer, Lead UX Designer, and Design
          Researcher roles in Chicago and remote. Let's talk.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="mailto:mhenn@umich.edu"
            style={{
              background: "#fff",
              color: "#000",
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#10b981";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#fff";
              e.target.style.color = "#000";
            }}
          >
            Email Me →
          </a>
          <a
            href="https://linkedin.com/in/matthew-henning"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #333",
              color: "#fff",
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#333";
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.matthenning.me/s/MATTHEW-HENNING-RESUME-2.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #333",
              color: "#fff",
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#333";
            }}
          >
            Resume ↗
          </a>
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
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleEgg = () => {
    setShowEgg(true);
    setEggFound(true);
  };

  useEffect(() => {
    const KONAMI = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let pos = 0;
    const handler = (e) => {
      if (e.key === KONAMI[pos]) {
        pos++;
        if (pos === KONAMI.length) {
          handleEgg();
          pos = 0;
        }
      } else {
        pos = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #060608;
          color: #fff;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shake {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(16,185,129,0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.7s ease forwards;
        }
        .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.4s; opacity: 0; }
        .fade-up-4 { animation-delay: 0.55s; opacity: 0; }
      `}</style>

      {/* Sticky header: Nav + progress bar + Ticker */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(6,6,8,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Nav onEasterEgg={handleEgg} eggFound={eggFound} />
        {/* Progress bar separator */}
        <div
          style={{ position: "relative", height: "1px", background: "#222" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: scrollProgress + "%",
              background: "#10b981",
              transition: "width 0.05s linear",
            }}
          />
        </div>
        <Ticker />
      </div>

      <main style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="fade-up fade-up-1">
          <Hero />
        </div>

        {/* Work section */}
        <section
          id="work"
          aria-label="Selected work"
          style={{
            padding: "80px clamp(16px, 4vw, 48px)",
            background: "transparent",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "48px",
            }}
          >
            <div className="fade-up fade-up-2">
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "#10b981",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Selected Work
              </div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: "400",
                  color: "#fff",
                  letterSpacing: "0.02em",
                }}
              >
                PRODUCTS I'VE SHAPED.
              </h2>
            </div>
          </div>

          <div
            className="fade-up fade-up-3"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
              gap: "16px",
            }}
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={setActiveProject} />
            ))}
          </div>
        </section>

        <div className="fade-up fade-up-4">
          <About />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer
        aria-label="Site footer"
        style={{
          borderTop: "1px solid #111",
          padding: "24px clamp(16px, 4vw, 48px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "#555",
            letterSpacing: "0.08em",
          }}
        >
          © 2026 Matthew W. Henning
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "#555",
            letterSpacing: "0.08em",
          }}
        >
          Chicago, IL · Available for hire
        </span>
      </footer>

      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
      {showEgg && <EasterEggModal onClose={() => setShowEgg(false)} />}
    </>
  );
}
