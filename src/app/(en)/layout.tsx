import type { Metadata, Viewport } from "next";
import { fontClass } from "@/lib/fonts";
import "@/styles/tokens.css";
import "@/styles/typography.css";
import "@/styles/globals.css";
import { revealBootScript } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Florencia UX · Commercial proposal",
  description: "Private commercial proposal.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClass} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
