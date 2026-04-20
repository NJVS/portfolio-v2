import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const srcPath = (dir) => resolve(__dirname, 'src', dir);

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio-v2/' : '/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: srcPath('assets'),
      components: srcPath('components'),
      data: srcPath('data'),
      hooks: srcPath('hooks'),
      pages: srcPath('pages'),
    },
  },
}));
