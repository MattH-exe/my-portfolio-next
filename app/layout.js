import { Analytics } from '@vercel/analytics/next';
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
      </body>
    </html>
  );
}
