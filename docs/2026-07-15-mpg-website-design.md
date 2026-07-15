# MPG Textile Chemicals — Sitio web · Diseño

Fecha: 2026-07-15 · Estado: aprobado, en implementación

## Objetivo
Sitio corporativo para **MPG Textile Chemicals**, distribuidora de químicos
textiles en El Salvador y Guatemala (+20 años). Debe transmitir tecnología,
sostenibilidad (Bluesign® / Oeko-Tex®) y asesoría cercana, y generar contacto
(email/teléfono/formulario). Español.

## Marca (extraída del logotipo oficial)
- Azul marino primario `#013856`
- Gris carbón `#323738`
- Acento teal `#1C87AF` → `#1B6B96` (degradado de la malla)
- Texto muted azul-gris `#567585` / `#8AA3B0`
- Papel claro `#F3F8FA`
- **Motivo firma:** la malla textil tejida del logo, reconstruida como SVG
  (`MeshWeave`) y usada como marca, divisores y fondo atmosférico.

## Estética
Industrial-técnico premium. Tipografía: **Archivo** (display) + **IBM Plex Sans**
(cuerpo) + **IBM Plex Mono** (etiquetas "spec" de laboratorio). Secciones claras
con mucho aire, alternadas con bandas navy. Animaciones: reveal en scroll,
titular por palabras, contadores, frase rotativa, la malla que se "teje".

## Stack
Next.js 16.2.1 (App Router) · React 19 · TypeScript · Tailwind v4 (`@theme`) ·
framer-motion 12 · GSAP + Lenis (scroll suave). Sin dependencias extra.
Deploy previsto: Vercel. Puerto dev: 4500.

## Estructura
- **Home** (`/`): Hero → 4 Pilares + stats → Nosotros (compromiso + misión/visión)
  → Aliados (certificaciones + fabricantes) → Valores (5) → Productos (4
  categorías con subproductos) → CTA de contacto.
- **/contacto**: datos + formulario (compone mailto; listo para conectar a webhook/CRM).
- **/blog**: índice + `/blog/[slug]` (contenido en datos, sin deps; 2 posts de muestra).
- SEO: metadata + OpenGraph, `sitemap.ts`, `robots.ts`, JSON-LD (Organization + WebSite),
  favicon con el rombo tejido.

## Decisiones del brief
- Sección 5: eliminada. Sección 8: no se usa. Redes sociales: fuera.
- Misión y Visión: se mantienen en Nosotros (texto del cliente).
- Aliados con logos (sección 7): slots listos en `/public/certs` y `/public/partners`.
- Footer: logo + descripción de certificaciones bajo el logo, sin redes.
- Blog: como opción de menú aparte (no en el Home).

## Contenido editable
- `lib/site.ts` — contacto, navegación, nota del footer.
- `lib/content.ts` — todo el Home.
- `lib/posts.ts` — blog.

## Pendientes (assets del cliente)
- Logos oficiales Bluesign®, Oeko-Tex®, Prochimica, Texchem → `/public/certs`, `/public/partners`.
- Logo MPG en vector/PNG transparente (opcional; hay reconstrucción SVG + PNG oficial en `/public/brand`).
- Fotos de producto (o generación IA) → `/public/products/<categoria>.jpg`.
- WhatsApp (si aplica) para botón directo.
- Dominio definitivo (asumido `mpgsv.com`) para `SITE.url`.
