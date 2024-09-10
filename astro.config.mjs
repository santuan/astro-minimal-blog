import { defineConfig } from 'astro/config'
import db from '@astrojs/db'
import vercel from '@astrojs/vercel/serverless'

import tailwind from '@astrojs/tailwind'

import webVitals from '@astrojs/web-vitals';

// https://astro.build/config

export default defineConfig({
  output: 'server',
  integrations: [db(), tailwind(), webVitals()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'dracula', // Set the theme for your code blocks.
      langs: ['javascript', 'typescript', 'python', 'php'], // Extend the supported languages, if needed.
      wrap: true, // Avoid horizontal scrolling with word wrapping.
    },
  },
})