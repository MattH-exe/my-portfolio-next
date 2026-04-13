import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: {
    default: "Matthew Henning — Product Designer",
    template: "%s — Matthew Henning",
  },
  description:
    "Research-driven design for systems that matter. Nearly 5 years of enterprise UX experience on Puckboard, a multi-product DoD platform. M.S. HCI, University of Michigan. Based in Chicago.",
  metadataBase: new URL("https://matt-henning.com"),
  openGraph: {
    title: "Matthew Henning — Product Designer",
    description: "Research-driven design for systems that matter. Enterprise UX, DoD, design systems.",
    url: "https://matt-henning.com",
    siteName: "Matthew Henning",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
