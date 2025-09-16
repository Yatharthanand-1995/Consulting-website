import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GenAI Consulting - Transforming Business Through Intelligence",
  description: "Leading GenAI consulting firm specializing in AI strategy, implementation, and business transformation. Where enterprise excellence meets AI innovation.",
  keywords: ["AI consulting", "GenAI", "artificial intelligence", "machine learning", "digital transformation"],
  authors: [{ name: "GenAI Consulting" }],
  robots: "index, follow",
  openGraph: {
    title: "GenAI Consulting - AI Transformation Experts",
    description: "Transforming enterprises with cutting-edge AI solutions and strategic consulting services.",
    type: "website",
    locale: "en_US",
    siteName: "GenAI Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenAI Consulting - AI Transformation Experts",
    description: "Transforming enterprises with cutting-edge AI solutions and strategic consulting services.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
