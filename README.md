# mudanzas-pilas

Sitio web corporativo desarrollado con Astro para la empresa Mudanzas Pilas, orientado a ofrecer servicios de mudanzas rápidas, cuidadas y económicas. El proyecto incluye un diseño moderno, componentes reutilizables, modales interactivos y una estructura escalable para futuras ampliaciones.

## Objetivos del proyecto
- Crear una web ligera, rápida y optimizada para SEO.
- Mostrar los servicios de mudanzas de forma clara y visual.
- Facilitar el contacto y la solicitud de presupuestos.
- Mantener una arquitectura limpia y modular para facilitar el trabajo en equipo.
- Garantizar una experiencia fluida en móviles y escritorio.

## Tecnologías utilizadas
- Astro - Framework principal para la generación del sitio
- HTML/CSS/JS - Base del diseño e interación
- JSON - Gestión de contenido dinámico para los servicios

## Estructura del proyecto
/
├── public/
│   ├── img/
│   │   ├── logo.png
│   │   └── hero.jfif
│   └── favicon
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Main.astro
│   │   ├── Servicios.astro
│   │   ├── Servicio.astro
│   │   ├── Modal.astro
│   │   ├── Presupuesto.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── assets/
│   │   └── servicios.json
│   └── pages/
│       └── index.astro
└── package.json