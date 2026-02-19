import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // basePath must match your GitHub repo name for GitHub Pages
  basePath: isProd ? "/MyResume" : "",
  assetPrefix: isProd ? "/MyResume/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
