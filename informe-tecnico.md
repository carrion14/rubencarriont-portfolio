# Informe Técnico: Rubén Carrión Portfolio

## URL
- Preview local: http://localhost:3457
- Producción: pendiente

## Stack
- **Framework:** Next.js 16.2.9 (App Router)
- **Estilos:** Tailwind CSS v4 + shadcn/ui
- **Animaciones:** Framer Motion
- **Fuentes:** Inter (body), JetBrains Mono (mono)
- **Iconos:** lucide-react

## Estructura de Archivos
```
src/
├── app/
│   ├── globals.css          ← Design tokens + bg-grid
│   ├── layout.tsx           ← Layout con Header, Footer, Cursor
│   ├── page.tsx             ← Home (7 secciones)
│   ├── not-found.tsx        ← 404
│   ├── sitemap.ts
│   ├── robots.ts
│   └── projects/[slug]/
│       └── page.tsx         ← Página individual de proyecto
├── components/
│   ├── custom-cursor.tsx    ← Halo azul translúcido
│   ├── scroll-reveal.tsx    ← Wrapper fadeInUp
│   ├── header.tsx           ← Nav flotante
│   ├── footer.tsx
│   ├── hero.tsx             ← Stagger animado
│   ├── about.tsx
│   ├── current-work.tsx     ← Kärcher
│   ├── projects-grid.tsx    ← IA + Design grids
│   ├── project-card.tsx     ← Card con hover overlay
│   ├── skills.tsx
│   └── contact.tsx
├── lib/
│   ├── utils.ts             ← cn()
│   └── projects.ts          ← Datos de proyectos hardcodeados
└── types.ts
```

## Proyectos incluidos
1. Cicada 3301 (IA)
2. Lake City (IA)
3. LOL Superman (IA)
4. Proyecto Diseño I (Design)
5. Proyecto Diseño II (Design)
6. Kärcher Automation (Kärcher)

## Assets
- Ruta base: `public/img/`
- Subcarpetas: `hero/`, `brand/`, `projects/{slug}/`
- Placeholders SVG generados hasta que Rubén meta imágenes reales en:
  `/home/cash/.openclaw/workspace/rubencarriont-portfolio/img/`

## Notas
- Dark mode permanente (no toggle)
- Sin backend ni base de datos
- Proyectos editables en `src/lib/projects.ts` (también se puede migrar a MDX)
- Build compila sin errores ✅
