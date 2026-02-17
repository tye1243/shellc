/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/shellc',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/shellc',
  },
}

module.exports = nextConfig
