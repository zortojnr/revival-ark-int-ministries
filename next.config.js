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
  // Ensure Next.js correctly identifies the workspace root to avoid build warnings
  outputFileTracingRoot: path.join(__dirname),
  // Temporarily ignore TypeScript build errors to avoid Windows OOM crash during type checking
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;