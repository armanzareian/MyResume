import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // No basePath needed — repo is named <username>.github.io so it serves at root
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
