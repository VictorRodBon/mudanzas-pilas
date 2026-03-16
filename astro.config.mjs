import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), "");
const siteUrl = env.PUBLIC_SITE_URL || "https://mudanzas-pilas.vercel.app";

export default defineConfig({
  // El adaptador debe contener la configuración de Vercel
  adapter: vercel({
    webAnalytics: { enabled: true },
    mode: 'serverless', // Ahora está dentro del adaptador, donde toca
    functionPerRoute: false, // Esto suele evitar conflictos de runtime
  }),
  
  site: siteUrl,

  output: 'server', // Asegúrate de que esto esté presente para usar el adaptador

  trailingSlash: 'ignore',

  security: {
    checkOrigin: false, 
  },

  server: {
    headers: {
      "Access-Control-Allow-Origin": siteUrl
    }
  }
});