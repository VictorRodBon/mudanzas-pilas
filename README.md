## Mudanzas Pilas – Sitio web corporativo

Este repositorio contiene el código fuente de la web corporativa de **Mudanzas Pilas**, una empresa de mudanzas orientada a ofrecer servicios **rápidos**, **cuidados** y **económicos**.  
El proyecto está desarrollado con **Astro** y organizado en componentes reutilizables, con foco en rendimiento, SEO y una experiencia fluida en dispositivos móviles y escritorio.

---

## Funcionalidades principales

- **Página principal (`index.astro`)**: landing page con la propuesta de valor de la empresa, bloques de información y llamadas a la acción.
- **Sección de servicios**:
  - Listado de servicios cargados desde `servicios.json` (mudanzas de hogar, oficina, guardamuebles, grúa, viajes combinados, etc.).
  - Cada servicio se renderiza mediante el componente `Servicio.astro`, lo que facilita añadir, quitar o modificar servicios solo tocando el JSON.
- **Componentes reutilizables**:
  - `Navbar.astro`: navegación principal del sitio.
  - `Hero.astro`: cabecera visual con mensaje principal.
  - `Main.astro`: contenedor principal del contenido.
  - `Servicios.astro`: listado de servicios.
  - `Presupuesto.astro`: bloque para solicitar presupuesto o contacto.
  - `Modal.astro`: ventana modal reutilizable para formularios y mensajes.
  - `Footer.astro`: pie de página con información de contacto y enlaces.
- **Formulario de contacto/presupuesto**:
  - Lógica asociada en `src/scripts/contacto.js` y `src/actions/index.ts`.
  - Validación básica y envío de datos a una acción del lado del servidor (dependiendo de la configuración final).
- **Diseño responsive**:
  - Componentes y layout pensados para verse correctamente tanto en móvil como en escritorio.
- **Contenido gestionable**:
  - Los servicios están definidos en `src/assets/servicios.json`, permitiendo editar textos, iconos e información sin tocar el código de los componentes.

---

## Objetivos del proyecto

- **Web ligera y rápida**, optimizada para SEO.
- **Mostrar servicios de mudanza de forma clara y visual**.
- **Facilitar el contacto y la solicitud de presupuestos** (formulario, modales, llamadas a la acción).
- **Arquitectura limpia y modular**, apoyada en componentes Astro y datos en JSON.
- **Buena experiencia de usuario en móviles y escritorio**.

---

## Tecnologías y stack

- **Astro**: framework principal para la generación del sitio.
- **HTML / CSS / JavaScript**: base del marcado, estilos e interacción.
- **TypeScript**: en `src/actions/index.ts` para la lógica de acciones.
- **JSON**: como fuente de datos para los servicios (`servicios.json`).
- **Assets SVG**: iconografía de servicios y elementos visuales en `public/img`.

---

## Estructura del proyecto (resumen)

```text
/
├── public/
│   └── img/                 # Iconos e imágenes (mudanzas, guardamuebles, grúa, etc.)
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
│   │   └── servicios.json   # Configuración de servicios ofrecidos
│   ├── pages/
│   │   ├── index.astro      # Página principal
│   │   └── about.astro      # Página de "¿Quiénes somos?"
│   ├── scripts/
│   │   └── contacto.js      # Lógica de interacciones del formulario
│   └── actions/
│       └── index.ts         # Acciones (por ejemplo, manejo de formularios)
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── todo.md                  # Lista de tareas pendientes del proyecto
```

---

## Flujo básico de desarrollo

- **Instalación de dependencias**:

```bash
npm install
```

- **Ejecución en desarrollo**:

```bash
npm run dev
```

- **Build de producción**:

```bash
npm run build
```

> Los scripts exactos dependen de `package.json`, pero el flujo habitual en proyectos Astro sigue esta estructura.

---

## Tareas pendientes relevantes (`todo.md`)

En el fichero `todo.md` se recogen algunas tareas a futuro, entre ellas:

- Añadir la página de **"¿Quiénes somos?"** (about) con más contenido.
- Añadir sección de **"Inventario digital"** a servicios.
- Modificar textos de **"Viajes combinados"**.
- Refactorizar el bloque de **"¿Por qué elegirnos?"** para reutilizar el mismo componente de servicios (usando un JSON similar a `servicios.json`).

---

## Posibles ampliaciones futuras

- Integración con un backend o servicio externo para gestionar solicitudes de presupuesto.
- Panel de administración ligero para editar servicios y textos sin tocar código.
- Mejora de analítica y seguimiento de conversiones (Google Analytics, etc.).
- Internacionalización (multiidioma) para llegar a más clientes.

