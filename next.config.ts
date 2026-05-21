import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
