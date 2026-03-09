import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://jatura.com',
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
