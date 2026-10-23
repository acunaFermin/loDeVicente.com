# Lo de Vicente — lodevicente.com

Sitio de la cabaña y quincho para eventos en Tandil. Angular 22 con **prerenderizado estático** (SSG): cada página se genera como HTML completo al compilar, así Google indexa todo el contenido sin ejecutar JavaScript.

## Desarrollo

Requiere Node 22 o superior (con nvm: `nvm use 24`).

```bash
npm install
npm start        # http://localhost:4200
npm run build    # genera dist/vicente/browser
```

## Estructura

- `src/app/paginas/` — Inicio, Alojamiento (`/estadias`), Eventos y Contacto.
- `src/app/data/sitio.ts` — teléfono, WhatsApp, email, redes, dirección y mapa. **Para cambiar un dato de contacto, editarlo acá.**
- `src/app/data/galerias.ts` — qué fotos aparecen en cada galería, con su texto alternativo y descripción.
- `src/app/data/fotos.ts` — dimensiones de cada foto (generado).
- `src/app/app.routes.ts` — título y descripción de cada página para Google.
- `src/index.html` — Google Analytics y datos estructurados (schema.org) del negocio.
- `public/img/` — fotos en WebP en tres anchos: `<nombre>-480.webp`, `-960.webp` y `-1600.webp`.
- `public/sitemap.xml` y `public/robots.txt` — si se agrega una página, sumarla al sitemap.

## Agregar una foto

1. Exportarla en WebP con los tres anchos (480, 960 y 1600 px) y guardarlas en `public/img/` como `mi-foto-480.webp`, etc.
2. Agregar `'mi-foto': { w: <ancho original>, h: <alto original> }` en `src/app/data/fotos.ts`.
3. Sumarla a la galería que corresponda en `src/app/data/galerias.ts`.

## Despliegue

Al hacer push a `main`, GitHub Actions compila el proyecto y sube `dist/vicente/browser` al VPS por SCP (`.github/workflows/deploy.yml`).
