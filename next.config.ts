import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },

  // Performance optimizations
  poweredByHeader: false,

  // Compression
  compress: true,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    qualities: [25, 50, 75, 85, 90, 95, 100],
  },

  // Bundle analyzer in production
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      if (process.env.NODE_ENV === 'production') {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        );
      }
      return config;
    },
  }),

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@/components/ui', '@/components/sections'],
  },
};

export default nextConfig;
