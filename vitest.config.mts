import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    // server/ modules import 'server-only', which throws everywhere except
    // Next's react-server layer; point it at the package's no-op empty module
    // so the loader tests can import them.
    alias: {
      'server-only': path.join(
        process.cwd(),
        'node_modules/server-only/empty.js'
      )
    }
  },
  test: {
    environment: 'jsdom',
    // Point every content loader at the fixture tree so tests never read the
    // live content/ directory. CONTENT_ROOT in server/constants.ts honours this.
    env: {
      CONTENT_ROOT: path.join(process.cwd(), '__tests__/fixtures/content')
    },
    setupFiles: ['./vitest.setup.ts']
  }
});
