import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://thomasrobert.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), icon()],
});
