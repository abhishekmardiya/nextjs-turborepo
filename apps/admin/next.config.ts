import type { NextConfig } from "next";

/**
 * Production: point Vercel (or your host) at this app and assign
 * https://admin.yourdomain.com
 */
const nextConfig: NextConfig = {
  transpilePackages: ["@repo/shared-form"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
