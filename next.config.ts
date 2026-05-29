import type { NextConfig } from "next";
import { SECURITY_HEADERS } from "./security-headers";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    BUILD_TIME: new Date().toISOString(),
  },
  headers: async () => [
    { source: "/(.*)", headers: [...SECURITY_HEADERS] },
  ],
};

export default nextConfig;
