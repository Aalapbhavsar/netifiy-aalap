import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aalap Bhavsar | Full Stack Developer",
  description:
    "Premium portfolio of Aalap Bhavsar — Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Open to full-time, internship, freelance, and remote opportunities.",
  keywords: [
    "Aalap Bhavsar",
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Aalap Bhavsar" }],
  creator: "Aalap Bhavsar",
  openGraph: {
    title: "Aalap Bhavsar | Full Stack Developer",
    description:
      "Explore Aalap's premium portfolio featuring 3D interactive design, project showcase, and AI assistant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
