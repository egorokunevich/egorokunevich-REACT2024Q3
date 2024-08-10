import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vitePlugin as remix } from '@remix-run/dev';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), remix()],

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
