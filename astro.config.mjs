// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bradtaylor.codes',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'one-light',
        dark: 'github-dark-default',
      },
    },
  },
  devToolbar: {
    enabled: false,
  },
});
