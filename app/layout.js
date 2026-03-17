import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata = {
  title: "Hi, I'm Matt",
  description:
    "Research-driven design for systems that matter. M.S. HCI, University of Michigan. Based in Chicago.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
