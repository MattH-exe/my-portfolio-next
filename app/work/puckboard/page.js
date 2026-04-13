// ROUTE: /work/puckboard
// Public Puckboard ecosystem overview — fully parseable by AI tools and crawlers
import PuckboardPage from "./PuckboardPage";

export const metadata = {
  title: "Puckboard — Enterprise UX for Air Force Flight Operations",
  description:
    "5 years shaping Puckboard, the digital backbone of U.S. Air Force flight operations. 95% task-time reduction, $20M+ operational savings, 375K+ labor hours reclaimed. R&D 100 Award 2023.",
};

export default function Page() {
  return <PuckboardPage />;
}
