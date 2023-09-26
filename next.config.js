/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['plus.unsplash.com'],
  },
}

module.exports = nextConfig
