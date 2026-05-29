import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: 'jsdom',
    // Point every content loader at the fixture tree so tests never read the
    // live content/ directory. CONTENT_ROOT in utils/constants.ts honours this.
    env: {
      CONTENT_ROOT: path.join(process.cwd(), '__tests__/fixtures/content')
    },
    setupFiles: ['./vitest.setup.ts']
  }
});
