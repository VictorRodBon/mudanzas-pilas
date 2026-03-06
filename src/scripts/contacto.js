
import { actions } from 'astro:actions';

  const form = document.querySelector('.presupuesto__form');
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Detenemos la recarga de página
    console.log("🚀 Enviando formulario...");

    const formData = new FormData(form);
    const { data, error } = await actions.sendEmail(formData);

    if (error) {
      console.error("❌ Error de validación o servidor:", error);
      alert("Error al enviar: " + (error.message || "Revisa los campos"));
    } else {
      console.log("✅ ¡Éxito! Respuesta del servidor:", data);
      alert("¡Formulario enviado con éxito!");
      form.reset();
    }
  });