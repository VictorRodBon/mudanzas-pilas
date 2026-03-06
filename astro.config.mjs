import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Cargamos las variables (asegúrate de que el tercer parámetro sea '')
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), "");
const siteUrl = env.PUBLIC_SITE_URL || "https://mudanzas-pilas.vercel.app";

export default defineConfig({
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  
  site: siteUrl,

  trailingSlash: 'ignore',

  security: {
    checkOrigin: true, 
  },

  server: {
    headers: {
      "Access-Control-Allow-Origin": siteUrl
    }
  }
});