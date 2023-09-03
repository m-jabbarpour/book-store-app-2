/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "imgcdn.taaghche.com",
      "newcdn.fidibo.com",
      "img.taaghche.com",
      "cdn.fidibo.com",
    ],
  },
};

module.exports = nextConfig
