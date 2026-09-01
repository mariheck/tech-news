import type { NextConfig } from 'next';
import { SECURITY_HEADERS } from './security-headers';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // Pin the Turbopack root to this project. Without it, Turbopack's
    // auto-detected root can fail to resolve `node_modules/next` in the RSC
    // client-reference transition, panicking dev with "Next.js package not
    // found" on the dynamic article route (/[date]/[slug]).
    root: import.meta.dirname
  },
  env: {
    BUILD_TIME: new Date().toISOString()
  },
  headers: async () => [{ source: '/(.*)', headers: [...SECURITY_HEADERS] }]
};

export default nextConfig;
