import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Cargamos las variables (asegúrate de que el tercer parámetro sea '')
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), "");
const siteUrl = env.PUBLIC_SITE_URL || "https://mudanzas-pilas.vercel.app";

export default defineConfig({
  // 1. Usar el adaptador de Vercel (Correcto)
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  
  // 2. Definir el sitio (Sin barra final al final del string si es posible)
  site: siteUrl,

  // 3. LA CLAVE: Configuración de seguridad
  security: {
    // Si quieres máxima seguridad y que funcione, déjalo en true 
    // PERO asegúrate de que PUBLIC_SITE_URL sea EXACTAMENTE la URL de Vercel.
    // Si sigue fallando, cámbialo a false temporalmente.
    checkOrigin: false, 
  },

  server: {
    headers: {
      "Access-Control-Allow-Origin": siteUrl
    }
  }
});