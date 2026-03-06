// src/components/contacto.js
import { actions } from 'astro:actions';

const setupForm = () => {
  const form = document.querySelector('.presupuesto__form');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("🚀 Enviando formulario...");

    const formData = new FormData(form);
    
    // Aquí es donde Astro hace la magia del lado del cliente
    const { data, error } = await actions.sendEmail(formData);

    if (error) {
      console.error("❌ Error:", error);
      alert("Error al enviar: " + (error.message || "Revisa los campos"));
    } else {
      console.log("✅ ¡Éxito!", data);
      alert("¡Formulario enviado con éxito!");
      form.reset();
    }
  });
};

// Se ejecuta al cargar la página
setupForm();

// Si usas ViewTransitions de Astro, añade esto también:
document.addEventListener('astro:after-swap', setupForm);