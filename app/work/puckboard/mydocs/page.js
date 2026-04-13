// ROUTE: /work/puckboard/mydocs
// Protected — requires password via middleware
import MyDocsPage from "./MyDocsPage";

export const metadata = {
  title: "My Docs / FEF — Career Document Management System",
  description: "Led end-to-end design of My Docs within Puckboard Personnel. 65% eval process time reduction, member-centric ownership model, career-spanning document persistence.",
};

export default function Page() {
  return <MyDocsPage />;
}
