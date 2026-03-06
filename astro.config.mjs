import { loadEnv } from "vite";

// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: PUBLIC_SITE_URL
});