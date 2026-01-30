/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Standalone output per Docker deployment
  output: 'standalone',

  // PWA Configuration
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    // Abilita ottimizzazione immagini con Next.js Image
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compress output
  compress: true,
}

module.exports = nextConfig
