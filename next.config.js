/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  rewrites: () => [
    {
      source: '/category/oferta',
      destination: '/oferta',
    },
    {
      source: '/category/uslugi',
      destination: '/uslugi',
    },
    {
      source: '/realizacje',
      destination: '/katalog',
    },
  ],
}

module.exports = nextConfig
