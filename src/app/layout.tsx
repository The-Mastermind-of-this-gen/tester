import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Tech Horizon",
  description:
    "Tech Horizon is the student robotics club at AASTMT. Engineering and computer science students learning together to build Baymax, Wall-E and Boomie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-outfit: 'Outfit', sans-serif;
            --font-space-grotesk: 'Space Grotesk', sans-serif;
            --font-jetbrains: 'JetBrains Mono', monospace;
            --font-inter: 'Inter', sans-serif;
          }
          .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
          }
        `}</style>
      </head>
      <body className="bg-brand-black text-brand-ink font-display antialiased selection:bg-brand-magenta selection:text-white relative overflow-x-clip">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
