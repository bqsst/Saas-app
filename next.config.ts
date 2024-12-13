import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'smcqfuzvcxytdmeikvxz.supabase.co'
      }
    ]
  }
};

export default nextConfig;
