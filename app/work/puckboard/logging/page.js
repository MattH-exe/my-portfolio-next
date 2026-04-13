// ROUTE: /work/puckboard/logging
// Protected — requires password via middleware
import PBLPage from "./PBLPage";

export const metadata = {
  title: "Puckboard Logging — Post-Mission Documentation Redesign",
  description: "Digitized post-mission flight documentation for the U.S. Air Force. 95% task-time reduction, $20M+ operational savings, 375K+ labor hours reclaimed.",
};

export default function Page() {
  return <PBLPage />;
}
