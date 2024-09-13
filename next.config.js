/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverMinification: false
  },
  compress: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
