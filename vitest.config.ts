import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['**/*.test.tsx', '**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
});
