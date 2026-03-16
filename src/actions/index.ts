import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

export const server = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      nombre: z.string(),
      apellidos: z.string(),
      correo: z.string().email(),
      mensaje: z.string(),
      telefono: z.string(),
    }),
    handler: async (input) => {
        const apiKey = import.meta.env.RESEND_API_KEY;

        console.log("¿API Key cargada?:", apiKey ? "SÍ (empieza por " + apiKey.slice(0, 5) + "...)" : "NO (es undefined)");

        const resend = new Resend(apiKey);
        
        try {
          const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev", // Prueba primero con este
            to: ["prueba-practicas@outlook.com"],
            subject: `Nuevo mensaje de ${input.nombre}`,
            text: `Teléfono: ${input.telefono}\nCorreo: ${input.correo}\nMensaje: ${input.mensaje}`,
            replyTo: input.correo,
          });
      
          if (error) {
            console.error("DETALLE DEL ERROR DE RESEND:", error);
            return { success: false, message: error.message };
          }
      
          return { success: true, data };
        } catch (err) {
          console.error("ERRORINESPERADO:", err);
          return { success: false };
        }
      },
  }),
};
