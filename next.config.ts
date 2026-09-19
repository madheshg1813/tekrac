import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/chennai",
        destination: "/chennai/e-waste-recycling-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
