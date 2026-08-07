<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio v2 — repo notes

Next 16.2.7 + React 19.2.4 + Tailwind v4, App Router, TypeScript strict.

## Commands

- `npm run dev` / `npm run build` / `npm run start`
- `npm run lint` — eslint only. No test framework, no typecheck script, no CI. **`npm run build` is the typecheck** (runs `tsc` + type-gen).
- `node_modules/` is not installed in this checkout; run `npm install` first.

## Architecture

- **`utils/data.ts` is the single source of truth for all site content**: `projects[]` (typed `ProjectProps`), `experiences[]`, `techTag`. Edit copy here, not in JSX.
- `app/[id]/page.tsx` is SSG — routes come from `projects` via `generateStaticParams`. Adding a project to `data.ts` auto-creates its page; `img` must exist in `public/` (path form `/file.webp`).
- Detail page renders only the first paragraph of each `*Paragraphs[]` field (`.map` never iterates them) and uses `params` as a `Promise` (must `await`).
- `modules/homepage.tsx` is one large `'use client'` component holding all sections. `components/` are small `'use client'` pieces (smooth-scroll = lenis, reveal = framer-motion, lighthouse-gauge = MUI `@mui/x-charts`).
- Path alias `@/*` → repo root (so `@/utils/data`, not `@/src/...`).

## Conventions

- Tailwind v4: no `tailwind.config`; theme/config lives in `app/globals.css` via `@import "tailwindcss"`. Custom utilities like `.base-bg` are plain CSS classes.
- Design language is consistent — dark bg `#0a0a0b`, `text-neutral-*`, micro-labels `text-[11px] uppercase tracking-[0.18em] text-neutral-500`, `font-light tracking-tight` headings. Match existing arbitrary-value classes; don't introduce a design system.
- All components start with `'use client'`. Server components are only `app/layout.tsx` and `app/page.tsx`.
- No prettier/format config; style is mixed (semicolons optional) — match the file you edit.
