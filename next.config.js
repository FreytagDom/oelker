/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 
  distDir: 'all-inkl',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
