/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/blog-template" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
