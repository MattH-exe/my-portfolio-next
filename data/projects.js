// ── Shared Data ──────────────────────────────────────────────
// Single source of truth for all project content.
// Imported by pages and components throughout the site.

export const TICKER_ITEMS = [
  "✦ 65% Task-Time Reduction - My Docs ✦",
  "✦ 95% Task-Time Reduction — Logging ✦",
  "✦ $20M+ Operational Savings ✦",
  "✦ R&D 100 Award Winner 2023 - Puckboard ✦",
  "✦ ~375K+ Labor Hours Reclaimed ✦",
  "✦ 5 Years Enterprise UX ✦",
  "✦ Active DoD Secret Clearance ✦",
  "✦ Design Systems Expertise ✦",
  "✦ M.S. UX & HCI — University of Michigan ✦",
];

// ── Puckboard Ecosystem (public parent page) ──────────────────
export const PUCKBOARD_ECOSYSTEM = {
  title: "Puckboard",
  tagline: "One platform. Every mission.",
  description:
    "For 5 years, I've shaped Puckboard — the Department of Defense’s first accredited, web-based, collaborative scheduling application. What started as an iPad logging tool & a web-based scheduling tool has evolved into a multi-product enterprise suite spanning scheduling, post-mission documentation, personnel records, and readiness testing.",
  role: "Product Designer → Senior Product Designer · 2022–Present · Active DoD Secret Clearance",
  stats: [
    { value: "95%", label: "Task-Time Reduction (Logging)" },
    { value: "$20M+", label: "Operational Fuel Savings" },
    { value: "375K+", label: "Labor Hours Reclaimed" },
    { value: "980,000+", label: "Events scheduled to date" },
  ],
  products: [
    {
      name: "Puckboard Logging",
      platform: "iOS (iPad)",
      description: "Digitized post-mission flight documentation — replacing 3+ hours of manual paperwork with a structured, validated 10-minute workflow.",
      href: "/work/puckboard/logging",
      protected: true,
    },
    {
      name: "My Docs / Flight Evaluation Folder",
      platform: "Web",
      description: "Centralized, career-spanning document system with lifecycle-driven evaluation tracking — reduced end-to-end eval process from 17hrs to ~6hrs.",
      href: "/work/puckboard/mydocs",
      protected: true,
    },
    {
      name: "+ 3 Features in Active Development",
      platform: "iOS + Web",
      description: "Nimbus Design System (token-based, 42+ components), Mission Review Dashboard, and Puckboard Testing — currently in design or development.",
      href: null,
      wip: true,
    },
  ],
  awards: [
    { label: "R&D 100 Award", year: "2023", url: "https://www.rdworldonline.com/rd-100-2023-winner/puckboard/" },
  ],
  links: [
    { label: "Product Website", url: "https://puckboard.dso.mil/pbl/" },
    { label: "App Store (iPad)", url: "https://apps.apple.com/us/app/puckboard-logging/id1525979103" },
  ],
  testimonials: [
    {
      text: "The software balances enterprise needs while improving the quality of life of personnel, and today is considered the DoD's most powerful C-17 crew planning tool.",
      attr: "R&D World",
    },
    {
      text: "You have a really good product that's straightforward and has a lot of elements that make our lives easier.",
      attr: "C-17 Pilot Scheduler",
    },
    {
      text: "The way you reach out to us, ask for feedback, and are always available if we have problems is unlike any other program.",
      attr: "Aircrew Member",
    },
  ],
};

// ── Case Studies ──────────────────────────────────────────────
export const CASE_STUDIES = {
  pbl: {
    id: "pbl",
    year: "2022–2023",
    tag: "iOS · Enterprise UX",
    title: "Puckboard Logging",
    subtitle: "The future of post-mission paperwork.",
    color: "#00d4ff",
    heroImage: "/case-studies/PBL/hero.png",
    featuredArtifact: {
      src: "/case-studies/PBL/Form651.mp4",
      caption: "AF Form 651 digitization flow — structured, validated inputs replace a paper-based form",
    },
    role: "Product Designer · Cross-functional team of 1 designer, multiple iOS engineers, and a PM · Active DoD Secret Clearance required",
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    context:
      "After every military flight, U.S. Air Force pilots are required to document crew performance, fuel usage, and mission data across paper forms that feed three separate systems of record. For a single C-17 crew, that process took 3+ hours — time spent on paperwork instead of mission readiness.",
    challenge:
      "3+ hours of post-mission paperwork per flight, across thousands of annual missions. The operational cost wasn't just time — error-prone manual entry made downstream fuel reporting unreliable.",
    bet:
      "Instead of digitizing the forms as-is, I advocated for restructuring the workflow around pre-populated, validated inputs — trading flexibility for accuracy, because research showed re-keyed data was the root cause of most errors.",
    outcome:
      "Documentation dropped from 3+ hours to under 10 minutes. That data accuracy directly enabled $20M+ in fuel savings and reclaimed 375,000+ labor hours across Air Mobility Command.",
    metrics: [
      { value: "3hrs → <10min", label: "Documentation Time" },
      { value: "$20M+", label: "Operational Fuel Savings" },
      { value: "~375K+", label: "Labor Hours Reclaimed" },
      { value: "AMC Wide", label: "Adoption" },
    ],
    contributions: [
      "Owned the AF Form 651 digitization flow — structured, validated inputs over flexible freeform approach after field research showed majority of errors came from ambiguous entry points",
      "Designed fuel metrics tracking workflows that directly enabled $20M+ in operational cost savings",
      "Contributed to Aircrew Editor interaction patterns — opted for confirmation steps on role assignments despite extra tap, because mis-assignments had real operational consequences",
      "Designed PDF generation experience — outputs had to be print-ready and compliance-grade with traceable validation",
      "Improved evaluation import workflows by aligning system terminology with aircrew mental models",
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "Understanding a Workflow Built on Friction",
        body: "The first thing I learned in discovery was that the problem wasn't 'paperwork is slow' — it was that post-mission documentation touched at least three disconnected systems, and every hand-off introduced error risk that compounded downstream. I mapped the end-to-end workflow and identified that the majority of the 11 manual steps involved re-entering data that already existed in another system. That finding reframed the entire product strategy: this wasn't a form digitization project, it was a data integration project.",
        callout: {
          type: "quote",
          text: '"We spend more time on paperwork after a flight than we do on the actual debrief."',
          attr: "— C-17 Pilot, contextual interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Three Options, One Clear Winner",
        body: "We had three approaches: (1) digitize existing forms as-is, (2) build a flexible data entry tool, or (3) restructure workflows around pre-populated, validated inputs. Option 1 would lock in error-prone patterns. Option 2 appealed to stakeholders wanting 'flexibility,' but research showed flexibility was exactly what caused errors. I advocated for Option 3 despite higher engineering cost — the payoff was a system trusted as a source of truth, unlocking $20M fuel savings through reliable downstream reporting.",
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
        body: "The real constraint wasn't screen layout — it was operational context. Aircrew complete documentation on iPads in cramped cockpits, often one-handed, sometimes in turbulence. The early 651 interface mirrored the physical form field-for-field. Testing showed it carried over all the friction along with the familiarity. Decoupling the input experience from the output format was a turning point. I also designed around progressive disclosure with persistent state: every field auto-saved, eliminating the most common complaint from field testing — losing progress when interrupted.",
        callout: {
          type: "principles",
          items: [
            "Auto-save everything — interruptions are the norm",
            "Reduce inputs, don't just digitize them",
            "Align with operational mental models, not database schemas",
            "Design for one-handed, constrained-environment use",
          ],
        },
      },
      {
        phase: "04 — Design & Test",
        title: "Learning from Real Users",
        body: "Testing with active-duty aircrew surfaced a problem I didn't anticipate: domain language mismatch. Early designs used terminology from database schemas — technically accurate but misaligned with how aircrew talked about their work. Task completion rates improved significantly after I remapped every label to match operational vocabulary. The other major insight was about trust: aircrew were skeptical of pre-populated data because they couldn't verify its source. Adding a provenance indicator ('auto-filled from ARMS') resolved the hesitation without adding interaction cost.",
        callout: {
          type: "quote",
          text: '"We were able to fill & sign a Form 8 in 12 minutes whereas G/TIMS takes 12 minutes probably just to sign in."',
          attr: "— C-17 Loadmaster, usability test session",
        },
      },
      {
        phase: "05 — Deliver",
        title: "Measurable Impact at Scale",
        body: "The shipped product reduced documentation from 3+ hours to under 10 minutes — a 95% reduction that translated directly into operational capacity. But the number I'm proudest of is the $20M+ in fuel savings — a business outcome made possible by the design decision to prioritize data accuracy over speed-to-ship. Across Air Mobility Command, the product has reclaimed 375,000+ labor hours.",
        callout: {
          type: "stat",
          stats: [
            { v: "95%", l: "Task time reduction" },
            { v: "$20M+", l: "Savings" },
            { v: "375K+ hrs", l: "Given Back to Users" },
          ],
        },
      },
    ],
    media: [
      { type: "image", src: "/case-studies/PBL/PBL_old_workflow.jpg", caption: "End-to-end post-mission workflow — 11 manual steps, redundant data entry, and system hand-offs" },
      { type: "image", src: "/case-studies/PBL/PBL_new_workflow.jpg", caption: "Reworked digital-first flow eliminating redundant steps" },
      { type: "image", src: "/case-studies/PBL/AircrewSearch.png", caption: "Aircrew Search — queries across unit rosters and ARMS & ARTEMIS databases" },
      { type: "video", src: "/case-studies/PBL/AircrewSearch.mp4", caption: "Aircrew Search in action" },
      { type: "image", src: "/case-studies/PBL/651Process.png", caption: "Paper Form 651 (left) vs. redesigned digital input (right)" },
      { type: "video", src: "/case-studies/PBL/Form651.mp4", caption: "AF Form 651 — structured digital flow with validated inputs and pre-populated data" },
      { type: "image", src: "/case-studies/PBL/PBL_PDF_Navigation_V3_page-0001.jpg", caption: "Early PDF generation workflow exploration" },
      { type: "video", src: "/case-studies/PBL/pdfgen.mp4", caption: "Final PDF generation — validated inputs produce standardized compliance-ready outputs" },
    ],
    tags: ["iOS", "Contextual Inquiry", "Interaction Design", "Usability Testing", "Figma", "DoD"],
    links: [
      { label: "App Store (iPad)", url: "https://apps.apple.com/us/app/puckboard-logging/id1525979103" },
      { label: "Product Website", url: "https://puckboard.dso.mil/pbl/" },
      { label: "R&D 100 Award - 2023", url: "https://www.rdworldonline.com/rd-100-2023-winner/puckboard/" },
    ],
  },

  mydocs: {
    id: "mydocs",
    year: "2024–2025",
    tag: "Enterprise UX · Web · Secure Document Storage",
    title: "My Docs / Flight Evaluation Folder",
    subtitle: "Career documents that follow the mission — and you.",
    color: "#a78bfa",
    heroImage: "/case-studies/MyDocs/hero.png",
    featuredArtifact: {
      src: "/case-studies/MyDocs/Artifact4.png",
      caption: "Shipped FEF member view — surfaces real-time evaluation status, pending actions, and completion state",
    },
    role: "Lead Product Designer · Puckboard Office (web) · Active DoD Secret Clearance required",
    cuiDisclaimer:
      "*Operational data for this product is CUI. Any images & artifacts were created under an NDA and from a secure product and are intentionally limited or obscured.",
    context:
      "When U.S. Air Force service members transfer to a new base (a PCS move), their evaluation records often don't follow them — because the records were owned by their unit, not by them. The result: lost documentation, broken evaluation timelines, and service members unable to access their own career history.",
    challenge:
      "Service members were losing evaluation records during base transfers — not from carelessness, but because documents were owned by units, not individuals. The system was architecturally broken.",
    bet:
      "I advocated for restructuring ownership from unit-centric to member-centric, despite significant political complexity — because adding a sync layer would paper over the root cause rather than fix it.",
    outcome:
      "End-to-end eval process cut from 17+ hours to ~6 hours. Documents now persist across a service member's entire career, regardless of where they're stationed.",
    metrics: [
      { value: "Net New", label: "Built From Scratch" },
      { value: "65%", label: "Eval Process Time Reduction" },
      { value: "17hrs → ~6hrs", label: "End-to-End Eval Cycle" },
      { value: "Career-Spanning", label: "Document Persistence" },
    ],
    contributions: [
      "Defined the information architecture — document taxonomy, folder structure, and access model resolving tension between individual privacy and command-level visibility",
      "Designed the FEF lifecycle system — structured state-machine approach over flexible tagging after testing showed ambiguous ownership drove missed deadlines",
      "Designed automatic document deposit — zero-touch association vs. manual filing, eliminating the failure mode causing document loss during PCS transfers",
      "Architected PCS-persistent document model — most contentious decision, requiring stakeholder alignment across three organizational levels",
      "Designed role-differentiated views of shared data (member vs. Stan/Eval vs. command)",
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "Lost in the Locker: The Document Problem",
        body: "Through interviews with aircrew and admin personnel, I uncovered a problem simultaneously well-known and poorly understood. Everyone knew evaluation records got lost during PCS transfers. The root cause wasn't carelessness — it was architectural: documents were owned by units, not individuals. I reframed the problem from 'we need better file storage' to 'we need to change who owns these records and how they travel.'",
        callout: {
          type: "quote",
          text: '"Folks don\'t even really know how to access their FEF\'s in the current system"',
          attr: "— Aircrew member, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Designing a System, Not a Feature",
        body: "Two viable options: (1) keep unit-ownership and add sync for transfers, or (2) restructure so documents are permanently tied to individuals. Option 1 was lower-risk but would paper over the root cause. I chose to advocate for Option 2 despite the political complexity — three rounds of stakeholder alignment. I used discovery data to make the case and built a permission model giving commanders visibility without compromising member ownership.",
        callout: {
          type: "principles",
          items: [
            "Member-centric ownership — documents follow the person, not the unit",
            "Automatic deposit — zero manual action required",
            "Lifecycle-aware records, not static files",
            "Permissioning based on role and context",
          ],
        },
      },
      {
        phase: "03 — Design & Test",
        title: "Turning Static Records into a Managed Lifecycle",
        body: "The FEF was where the design got genuinely hard. My first iteration gave users too much flexibility in how they moved evaluations through review stages. Testing revealed this created ambiguity about who owned the next action — exactly the problem causing missed deadlines in legacy. I redesigned around explicit state transitions: every evaluation has a clear status, a clear owner, and a clear next action. Less 'elegant' but dramatically more effective.",
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
        title: "Career Continuity Infrastructure",
        body: "My Docs launched as a foundational system within Puckboard Personnel. Documents are now automatically deposited and associated with the correct individual, eliminating manual filing and reducing loss during PCS. The FEF introduced a structured, trackable evaluation lifecycle giving commanders clear visibility into review status.",
        callout: {
          type: "quote",
          text: '"We have done multiple Form 8\'s and the process was very easy to use. I think the entire process is very seamless."',
          attr: "— MSgt Loadmaster, post-launch",
        },
      },
    ],
    media: [
      { type: "image", src: "/case-studies/MyDocs/MetricsStrategy.png", caption: "Evaluation Process Metrics — comparing legacy (17+ hours) vs. Puckboard flow (~6 hours), quantifying 65% reduction" },
      { type: "image", src: "/case-studies/MyDocs/Artifact4.png", caption: "Shipped member-facing FEF view — 'Action Required' and 'Status' columns surface urgency at the list level" },
      { type: "image", src: "/case-studies/MyDocs/Artifact3.png", caption: "Stan/Eval officer view — same data, entirely different information hierarchy for aggregate visibility" },
      { type: "image", src: "/case-studies/MyDocs/Artifact7.png", caption: "Requirements synthesis across three user groups — surfacing the core tension that shaped system architecture" },
      { type: "image", src: "/case-studies/MyDocs/Artifact5.png", caption: "System-level data flow mapping within the full Puckboard suite" },
      { type: "image", src: "/case-studies/MyDocs/Artifact1.png", caption: "End-to-end FEF workflow map — 14+ discrete actions, branching paths, and cross-product dependencies" },
    ],
    tags: ["Enterprise UX", "Web", "Information Architecture", "Interaction Design", "DoD", "Personnel", "Figma"],
    links: [
      { label: "R&D 100 Award - 2023", url: "https://www.rdworldonline.com/rd-100-2023-winner/puckboard/" },
    ],
  },

  parkpal: {
    id: "parkpal",
    year: "2022",
    tag: "Accessibility · Mobile",
    title: "ParkPal",
    subtitle: "Getting outside shouldn't have barriers.",
    color: "#10b981",
    heroImage: "/case-studies/parkpal/hero.jpg",
    featuredArtifact: {
      src: "/case-studies/parkpal/Design+1.webp",
      caption: "Trail detail view with accessibility grade, surface type, and real-time condition data",
    },
    role: "UX Designer & Researcher · Capstone Project, University of Michigan School of Information",
    cuiDisclaimer: null,
    challenge:
      "People with mobility-related disabilities had no reliable way to understand whether a park or trail was actually accessible before visiting. Every competitor treated accessibility as a binary filter, not a data type.",
    bet:
      "I identified that the core product opportunity was building a planning tool that gives mobility-impaired users confidence to commit to a trip before leaving home — because discovering inaccessibility on arrival means a wasted trip with no fallback.",
    outcome:
      "Task completion improved 40% between testing rounds. The product was recognized within the Michigan School of Information for its accessibility-first rigor.",
    metrics: [
      { value: "4", label: "Research Participants" },
      { value: "3", label: "Interview Rounds (12 Sessions)" },
      { value: "↑ 40%", label: "Task Completion Improvement" },
      { value: "WCAG AA", label: "Compliance Target" },
    ],
    contributions: [
      "12 total sessions with elderly and mobility-impaired participants across 3 rounds",
      "Competitive analysis identifying every competitor uses wrong accessibility data model",
      "Defined core differentiation: graded, multi-dimensional accessibility scoring",
      "Designed structured community contribution system for crowdsourced trail conditions",
      "Two rounds of moderated usability testing with same participant pool (40% improvement)",
      "WCAG AA compliance throughout",
    ],
    phases: [
      {
        phase: "01 — Discover",
        title: "A Gap Nobody Had Filled Well",
        body: "Competitive audit found the same pattern everywhere: accessibility as a checkbox, not a data type. AllTrails let you filter for 'wheelchair accessible' but that binary didn't capture reality — a paved path with a 12% grade is technically 'accessible' but practically unusable. The market gap wasn't 'no app exists' — every existing solution used the wrong data model.",
        callout: {
          type: "quote",
          text: '"I just want to know if I can get my wheelchair to the picnic area. Nobody tells you that."',
          attr: "— Research participant, discovery interview",
        },
      },
      {
        phase: "02 — Define",
        title: "Planning Tool First, Navigation Tool Second",
        body: "The central insight: this had to be a planning tool first. For able-bodied users, a bad trail is a minor inconvenience. For someone in a wheelchair, it means a wasted trip. I chose to model accessibility as a graded, multi-dimensional score rather than binary — because research showed different users had different thresholds.",
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
        title: "Two Rounds with Target Users",
        body: "Three major changes between rounds: simplified trail detail hierarchy after participants scrolled past accessibility data; added explicit surface-material callouts after every participant asked about pavement in round one; redesigned community contribution from freeform to structured inputs after older participants abandoned open-text. Task completion improved 40%.",
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
        title: "Built For, Not Adapted For",
        body: "Users consistently described the product as something built for them, not adapted for them. Accessibility wasn't a compliance layer — it was the foundation. The competitive gap still exists: no major trail app treats accessibility as a graded, multi-dimensional data type.",
        callout: {
          type: "quote",
          text: '"This feels like it was actually made for me, not just adapted for me."',
          attr: "— Usability test participant, final round",
        },
      },
    ],
    media: [
      { type: "image", src: "/case-studies/parkpal/Research+Process.webp", caption: "Research Process Overview" },
      { type: "image", src: "/case-studies/parkpal/Findings.webp", caption: "Summary of Findings" },
      { type: "image", src: "/case-studies/parkpal/Prototyping+and+Evaluation.webp", caption: "From Research to prototypes, wireframing & testing" },
      { type: "image", src: "/case-studies/parkpal/Design+1.webp", caption: "Trail detail with accessibility grade, surface type, and condition" },
      { type: "image", src: "/case-studies/parkpal/Design+2.webp", caption: "Emergency Services Features" },
      { type: "image", src: "/case-studies/parkpal/Design+3.webp", caption: "Trip-Planning" },
    ],
    tags: ["Accessibility", "User Research", "Journey Mapping", "Mobile UX", "Usability Testing", "WCAG"],
    links: [
      { label: "Watch Demo", url: "https://www.youtube.com/watch?v=WLHUd0M-6Cc" },
    ],
  },
};

// ── Landing page card data ────────────────────────────────────
export const PROJECT_CARDS = [
  {
    id: "puckboard",
    title: "Puckboard",
    subtitle: "The digital backbone of U.S. Air Force flight operations.",
    tag: "Enterprise UX · iOS + Web · DoD",
    impact: "95%",
    impactLabel: "Task Time Reduction",
    color: "#00d4ff",
    href: "/work/puckboard",
    heroImage: "/case-studies/PBL/hero.png",
    protected: false,
  },
  {
    id: "parkpal",
    title: "ParkPal",
    subtitle: "Getting outside shouldn't have barriers.",
    tag: "Accessibility · Mobile · UX Research · M.S.I. Capstone",
    impact: "↑ 40%",
    impactLabel: "Task Completion",
    color: "#10b981",
    href: "/work/parkpal",
    heroImage: "/case-studies/parkpal/hero.jpg",
    protected: false,
  },
];

// ── All 151 Gen 1 Pokemon ─────────────────────────────────────
export const POKEMON = [
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
