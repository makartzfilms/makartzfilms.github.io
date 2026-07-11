import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://3jpictures.com',
  integrations: [sitemap()],
  output: 'static',
});
