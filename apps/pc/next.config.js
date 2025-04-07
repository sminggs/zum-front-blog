const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '*.zumst.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.zumst.com',
        port: '',
      },
    ],
    deviceSizes: [430],
  },
  experimental: {
    scrollRestoration: true,
  },
  env: {
    version,
  },
};
