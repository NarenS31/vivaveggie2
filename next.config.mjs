/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['@prisma/client', 'bcrypt'],
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
  // Simplify turbo configuration to avoid syntax errors
  experimental: {
    turbo: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;