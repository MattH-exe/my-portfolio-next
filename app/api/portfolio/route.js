import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Matthew W. Henning",
    title: "Product Designer",
    location: "Chicago, IL",
    email: "mhenn@umich.edu",
    linkedin: "https://linkedin.com/in/matthew-henning13",
    portfolio: "https://matt-henning.com",
    status: "Open to new opportunities — Product Design, UX Design, and UX Research roles",
    education: {
      degree: "M.S. in UX Research & Design / User-Centered Agile Development (HCI)",
      institution: "University of Michigan School of Information",
    },
    clearance: "Active DoD Secret Clearance",
    experience_summary:
      "Nearly 5 years of enterprise UX experience, primarily on Puckboard — a multi-product DoD platform spanning flight logging (iOS), personnel document management (web), collaborative scheduling (web), and readiness testing (web). Progressed from Product Designer to Lead Product Designer.",
    core_skills: [
      "Interaction Design", "UX Research", "Design Systems", "Information Architecture",
      "Usability Testing", "Accessibility (WCAG AA)", "Figma", "Agile / Scrum",
    ],
    key_impact: [
      { metric: "95% task-time reduction", context: "Post-mission documentation (Puckboard Logging)" },
      { metric: "$20M+ operational fuel savings", context: "Enabled by improved data accuracy from validated digital inputs" },
      { metric: "375,000+ labor hours reclaimed", context: "Across Air Mobility Command" },
      { metric: "65% eval process time reduction", context: "End-to-end evaluation cycle (My Docs / FEF)" },
      { metric: "R&D 100 Award (2023)", context: "Puckboard product suite" },
    ],
    projects: [
      {
        name: "Puckboard Logging",
        type: "Shipped Product",
        platform: "iOS (iPad)",
        role: "Product Designer",
        year: "2022–2023",
        summary: "Digitized post-mission flight documentation for the U.S. Air Force — replacing 3+ hours of manual paperwork with a structured, validated 10-minute workflow.",
        impact: ["3hrs to <10min documentation time", "$20M+ operational savings", "375K+ labor hours reclaimed", "Air Mobility Command-wide adoption"],
      },
      {
        name: "My Docs / Flight Evaluation Folder",
        type: "Shipped Product",
        platform: "Web",
        role: "Lead Product Designer",
        year: "2024–2025",
        summary: "Centralized, career-spanning document system within Puckboard Personnel. Led end-to-end design including information architecture and ownership model shift.",
        impact: ["0→1 net-new system", "65% eval process time reduction", "17hrs to ~6hrs end-to-end eval cycle"],
      },
      {
        name: "ParkPal",
        type: "Academic Capstone",
        platform: "Mobile",
        role: "UX Designer & Researcher",
        year: "2022",
        summary: "Accessibility-first trail and park discovery app with graded, multi-dimensional accessibility scoring.",
        impact: ["40% task completion improvement between test rounds", "WCAG AA compliance"],
      },
    ],
    awards: [
      { name: "R&D 100 Award", year: 2023, product: "Puckboard", url: "https://www.rdworldonline.com/rd-100-2023-winner/puckboard/" },
    ],
  });
}
