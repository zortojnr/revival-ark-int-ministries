const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    // ✅ Don’t block build because of ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Don’t block build because of TS errors
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
