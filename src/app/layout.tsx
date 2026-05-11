import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claudio Santos | Fullstack Developer",
  description:
    "Portfolio landing page for Claudio Santos, a Brazilian fullstack developer focused on impactful web and mobile experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
