export const metadata = {
  title: "Matthew Henning — Product Designer",
  description:
    "Research-driven design for systems that matter. M.S. HCI, University of Michigan. Based in Chicago.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
