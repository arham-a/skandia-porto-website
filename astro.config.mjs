// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro + Tailwind CSS v4.
// inlineStylesheets: "always" forces ALL CSS (incl. Tailwind output) to be inlined
// into the generated HTML <style> tags instead of external /_astro/*.css files,
// so styling works even when only dist/index.html is served.
export default defineConfig({
  site: 'https://arham-a.github.io',
  base: '/skandia-porto-website',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 100000000,
    },
  },
});
