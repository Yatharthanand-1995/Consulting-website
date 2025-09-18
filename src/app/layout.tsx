import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Stratex AI - Strategic Excellence in AI Transformation',
  description:
    'Leading AI consulting firm specializing in strategic AI implementation and business transformation. Where strategy meets excellence in AI innovation.',
  keywords: [
    'AI consulting',
    'Stratex AI',
    'artificial intelligence',
    'machine learning',
    'digital transformation',
    'strategic AI',
  ],
  authors: [{ name: 'Stratex AI' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Stratex AI - Strategic AI Transformation Experts',
    description:
      'Transforming enterprises with cutting-edge AI solutions and strategic consulting services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Stratex AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stratex AI - Strategic AI Transformation Experts',
    description:
      'Transforming enterprises with cutting-edge AI solutions and strategic consulting services.',
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
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
