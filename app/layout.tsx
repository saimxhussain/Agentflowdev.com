import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentFlow — B2B AI Automation Agency",
  description: "We build AI systems that replace manual work at scale — lead gen, outreach, social media, voice agents. Running 24/7.",
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
