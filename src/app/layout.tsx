import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rishav raj",
  description: "I use business analysis, product design, and engineering to build simple, personal tools. Out-of-work 19 y/o powered by coffee, chess, music, and sketching.",
  icons: { icon: '/favicon.png' },
  openGraph: {
    images: ['/openGraph.png'],
    title: 'rishav raj — building simple things that matter',
    description: "I use business analysis, product design, and engineering to build simple, personal tools. Out-of-work 19 y/o powered by coffee, chess, music, and sketching.",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/openGraph.png'],
  },
  keywords: [
    "Rishav Raj",
    "startup founder",
    "voice AI",
    "full-stack developer",
    "product designer",
    "React",
    "Next.js",
    "AI engineer",
    "early-stage founder"
  ],
  authors: [{ name: "Rishav Raj" }],
  category: "Technology",
  robots: "index, follow",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased [--pattern-fg:var(--color-neutral-950)]/10 dark:[--pattern-fg:var(--color-white)]/5`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}