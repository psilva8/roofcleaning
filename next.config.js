/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  output: 'export', // Static site export for Cloudflare Pages
}

module.exports = nextConfig 