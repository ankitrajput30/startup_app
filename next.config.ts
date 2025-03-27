import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Change '*' to '**' (safer wildcard in some cases)
      },
    ],
  },
};

export default nextConfig;

