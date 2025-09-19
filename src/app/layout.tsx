import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { PWAProvider } from '@/components/providers/PWAProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Stratex AI',
  },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#003a70" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/api/critical-data" as="fetch" crossOrigin="anonymous" />
        <link rel="prefetch" href="/our-work" />
        <link rel="prefetch" href="/our-insights" />
        <link rel="prefetch" href="/contact" />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PWAProvider>
          {children}
        </PWAProvider>
      </body>
    </html>
  );
}
