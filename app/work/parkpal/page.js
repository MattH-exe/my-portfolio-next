// ROUTE: /work/parkpal
// Protected — requires password via middleware
import ParkPalPage from "./ParkPalPage";

export const metadata = {
  title: "ParkPal — Accessibility-First Trail Discovery",
  description: "Designed an accessibility-first park and trail discovery app with graded, multi-dimensional accessibility scoring. 40% task completion improvement. WCAG AA compliant.",
};

export default function Page() {
  return <ParkPalPage />;
}
