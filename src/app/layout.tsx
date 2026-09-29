import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  description: "I use business analysis, product design, and engineering to build simple, personal tools.",
  icons: { icon: '/favicon.png' },
  openGraph: {
    images: ['/openGraph.png'],
    title: 'rishav raj',
    description: "I use business analysis, product design, and engineering to build simple, personal tools.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}