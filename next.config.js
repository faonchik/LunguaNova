/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.tildacdn.com'],
    unoptimized: true,
  }
}

export default nextConfig; 