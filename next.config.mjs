/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SITE_DOMAIN: process.env.SITE_DOMAIN,
  },
};

export default nextConfig;
