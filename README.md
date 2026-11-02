# Portfolio · Nico Díaz

Portfolio personal hecho con [Astro](https://astro.build), en español e inglés.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve el build
```

## Dónde se cambia cada cosa
| Qué | Archivo |
| --- | --- |
| Textos de la interfaz (ES/EN) | `src/i18n/ui.ts` |
| Proyectos: descripciones, links, stack, capturas | `src/data/projects.ts` |
| Tecnologías de la estantería | `src/data/tech.ts` |
| Colores, tipografía, espaciado | `src/styles/global.css` (ver `DESIGN.md`) |
| Capturas de proyectos | `public/projects/*.webp` |
| Foto de perfil y foto del escritorio | `public/img/` |

## Rutas
- `/`: la home en español. `/en/` es la versión en inglés.
- `/proyectos/<slug>/` y `/en/projects/<slug>/`: el detalle de cada proyecto.

Despliegue: es un sitio estático; en Vercel o Netlify basta con importar el repo.
