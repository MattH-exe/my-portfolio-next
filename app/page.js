// ROUTE: / (landing page)
// Server component — exports metadata for SEO/AI parseability, renders client HomePage
import HomePage from "./HomePage";

export const metadata = {
  title: "Matthew Henning — Product Designer · Chicago",
  description:
    "Research-driven design for systems that matter. 5 years of enterprise UX on Puckboard (DoD). 95% task-time reduction, $20M+ savings, 375K+ hours reclaimed. M.S. HCI, University of Michigan.",
};

export default function Page() {
  return <HomePage />;
}
