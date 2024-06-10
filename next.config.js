/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  trailingSlash: true,
  output: 'export',
  // distDir: '../sfs',
  // basePath:"/heroic",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
