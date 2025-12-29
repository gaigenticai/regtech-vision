# GaigenticAI / ComplianceAI — Brand & UI Guide

This repo’s UI is built on **Tailwind CSS + shadcn/ui (Radix primitives)** with a **modern B2B “trust + tech”** aesthetic: clean neutral surfaces, high-contrast typography, and **purple→blue gradients** used for emphasis (hero, CTAs, highlights).

**Primary sources in this repo**
- `tailwind.config.ts` (color palette extensions, fonts, radius, animations, shadows)
- `src/index.css` (CSS variables, base typography, custom animation + utility classes)
- `src/components/ui/*` (shadcn component baselines: Button, Input, Card, Badge, etc.)
- `src/components/*` + `src/pages/*` (real usage patterns: hero, CTAs, sections, cards)

---

## 1) Foundations

### Tech + component stack
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Radix UI primitives)
- **Icons:** `lucide-react`
- **Motion:** Tailwind animations + `framer-motion` (used in some sections)

### Design principles (as implemented)
- **Professional + readable:** neutral backgrounds (`slate/gray`), dark text (`gray-900`), generous whitespace.
- **“Futuristic” emphasis:** purple/blue gradients, soft blurred “orb” backgrounds, subtle grid overlays.
- **Round + friendly:** heavy use of `rounded-lg` / `rounded-xl` / `rounded-full`.
- **Clear hierarchy:** large hero headers (5xl–7xl), section headers (3xl–4xl), body at base–xl.

---

## 2) Color System

This repo uses **three overlapping color layers**:
1) **Semantic CSS variables** (shadcn-style tokens) in `src/index.css`
2) **Extended Tailwind palettes** in `tailwind.config.ts` (`primary`, `secondary`, `muted`, status colors)
3) **Direct Tailwind default colors** in JSX (e.g. `purple-600`, `blue-600`, `gray-900`)

### 2.1 Core gradient (most visible “brand”)
Used heavily in hero text, badges, and CTAs:
- `purple-600` `#9333ea`
- `blue-600` `#2563eb`
- `indigo-600` `#4f46e5`
- Optional blend helpers (from `tailwind.config.ts`):
  - `gradient-start` `#6366f1` (≈ `indigo-500`)
  - `gradient-middle` `#8b5cf6` (≈ `violet-500`)
  - `gradient-end` `#a855f7` (≈ `purple-500`)

Common patterns:
- **Text gradient:** `bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent`
- **CTA gradient:** `bg-gradient-to-r from-purple-600 to-blue-600` (e.g. sticky CTA)

### 2.2 CTA accent palette (orange + cobalt)
Used in `src/components/shared/CTASection.tsx` and solution pages’ CTAs:
- **CTA Orange:** `#FF7A00` (hover `#E56A00`)
- **CTA Cobalt:** `#0052CC` (hover border `#003d99`)
- **CTA Teal (gradient endpoint):** `#00A3CC`

Common patterns:
- Primary CTA: `bg-[#FF7A00] text-white shadow-lg hover:shadow-xl hover:scale-105`
- Secondary CTA: `border-2 border-[#0052CC] text-[#0052CC] bg-white hover:bg-[#0052CC] hover:text-white`

### 2.3 Semantic tokens (CSS variables)
Defined in `src/index.css` under `:root` and `.dark`:
- Surfaces: `--background`, `--card`, `--popover`
- Text: `--foreground`, `--muted-foreground`
- Brand: `--primary`, `--secondary`, `--accent`, `--gold`
- Status: `--success`, `--warning`, `--destructive`
- UI: `--border`, `--input`, `--ring`
- Radius: `--radius` (`0.75rem`)

These are consumed via Tailwind mappings like:
- `bg-background`, `text-foreground`, `border-border`, `ring-ring`

Important note (for reuse/consistency):
- `src/index.css` sets `--primary` to a **dark navy** (`hsl(210 40% 20%)`, comment: `#1a365d`)
- `tailwind.config.ts` also defines a **hex “primary” scale** with `primary.DEFAULT = #0ea5e9`
- If you want a single “source of truth” across projects, decide whether **primary is semantic (`--primary`)** or **primary is the hex scale**, then align the other layer.
- Dark mode variables exist under `.dark`, but this app doesn’t currently wrap the tree in a theme provider; reuse projects should add a `class="dark"` toggle (commonly via `next-themes`) if you want dark mode to work end-to-end.

### 2.4 Neutral backgrounds (default layout)
Very common layout background:
- Page/hero background: `bg-gradient-to-br from-slate-50 via-white to-blue-50`
  - `slate-50` `#f8fafc`, `blue-50` `#eff6ff`
- Text neutrals:
  - `gray-900` `#111827` (headlines)
  - `gray-600` `#4b5563` (body)
  - `gray-200` `#e5e7eb` (borders)

### 2.5 Extended palettes (from `tailwind.config.ts`)
These are the repo’s **configured** design tokens (beyond Tailwind defaults):
- `primary` scale (DEFAULT `#0ea5e9`): `50 #f0f7ff`, `100 #e0effe`, `200 #bae6fd`, `300 #7dd3fc`, `400 #38bdf8`, `500 #0ea5e9`, `600 #0284c7`, `700 #0369a1`, `800 #075985`, `900 #0c4a6e`
- `secondary` scale (DEFAULT `#a855f7`): `50 #faf5ff`, `100 #f3e8ff`, `200 #e9d5ff`, `300 #d8b4fe`, `400 #c084fc`, `500 #a855f7`, `600 #9333ea`, `700 #7c3aed`, `800 #6b21b6`, `900 #581c87`
- `muted` scale (DEFAULT `#f1f5f9`): `50 #f8fafc`, `100 #f1f5f9`, `200 #e2e8f0`, `300 #cbd5e1`, `400 #94a3b8`, `500 #64748b`, `600 #475569`, `700 #334155`, `800 #1e293b`, `900 #0f172a`
- Status defaults:
  - `success.DEFAULT` `#22c55e`
  - `warning.DEFAULT` `#f59e0b`
  - `destructive.DEFAULT` `#ef4444`

### 2.6 Neutral alias note (`neutral-light` / `neutral-dark`)
Some components use semantic class names like `bg-neutral-light` and `text-neutral-dark`. These **do not appear in `tailwind.config.ts`** as-is, so if you want to reuse those names across projects, explicitly define them (common mapping in this codebase is close to the `muted` scale: `muted-50` for “light” and `muted-900` for “dark”).

---

## 3) Typography

### Fonts
Loaded in `index.html`:
- **Montserrat** (400/600/700) — intended for headings/accent
- **Open Sans** (400/500/600) — intended for body

Configured in `tailwind.config.ts`:
- `font-headline`, `font-body`, `font-accent` currently point to **Inter**.

Recommendation for reuse:
- Pick one approach and standardize. If you want the repo’s *intended* typography, map:
  - `fontFamily.headline = ['Montserrat', 'system-ui', 'sans-serif']`
  - `fontFamily.body = ['Open Sans', 'system-ui', 'sans-serif']`
  - `fontFamily.accent = ['Montserrat', 'system-ui', 'sans-serif']`

### Base heading styles
Global heading styles are defined in `src/index.css`:
- `h1`: `text-4xl lg:text-5xl font-bold tracking-tight font-headline`
- `h2`: `text-3xl font-bold tracking-tight font-headline`
- `h3`: `text-2xl font-bold tracking-tight font-headline`
- `h4`: `text-xl font-bold tracking-tight font-headline`

### Common page hero hierarchy (observed)
- Hero title: `text-5xl lg:text-6xl` or `text-5xl lg:text-7xl`, bold, tight leading.
- Hero subtitle: `text-xl`, neutral gray (`text-gray-600`), `leading-relaxed`.
- Section title: `text-4xl font-bold`.
---

## 4) Layout, Grid, and Spacing

### Containers
Two common patterns:
- Tailwind container (from `tailwind.config.ts`): centered, `padding: 2rem`, `2xl: 1400px`
- Explicit max width: `max-w-7xl mx-auto px-4` (used across header/sections)

### Spacing scale
Uses Tailwind’s default 4px scale; most common spacings in JSX:
- Section padding: `py-20` (80px) and `py-24` (96px)
- Section header spacing: `mb-16` (64px)
- Card padding: `p-6` (24px) or `p-8` (32px)
- Grid gaps: `gap-8` (32px), `gap-12` (48px)

### Header offsets
Pages commonly use:
- `pt-28` to clear the fixed header + breadcrumbs

---

## 5) Shape, Borders, and Elevation

### Border radius
Tokenized radius in `tailwind.config.ts`:
- `rounded-lg` = `var(--radius)` (12px)
- `rounded-md` = `calc(var(--radius) - 2px)` (~10px)
- `rounded-sm` = `calc(var(--radius) - 4px)` (~8px)

Common usage patterns:
- Cards/panels: `rounded-xl` / `rounded-2xl`
- Pills/chips: `rounded-full`

### Borders
Common border patterns:
- Hairline: `border border-gray-200`
- Emphasis: `border-2` (CTAs, feature list rows)
- Focus rings: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`

### Shadows (elevation)
Common elevation ladder (observed):
- `shadow-sm`: subtle cards/containers
- `shadow-lg`: primary card elevation
- `shadow-2xl`: hero panels / “floating” demo windows

Optional glow shadows exist in `tailwind.config.ts` (`shadow-glow-sm|md|lg`, `shadow-inner-glow`) but are not widely used in JSX yet.

---

## 6) Component Patterns

### Buttons
Base API (shadcn) in `src/components/ui/button.tsx`:
- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes:
  - `default`: `h-10 px-4 py-2`
  - `sm`: `h-9 px-3`
  - `lg`: `h-11 px-8`
  - `icon`: `h-10 w-10`

Repo-specific CTA styling (overrides are common):
- Large CTAs often use: `px-8 py-4 rounded-xl font-semibold transition-all duration-300`
- Primary CTA often uses either:
  - Gradient: `bg-gradient-to-r from-purple-600 to-blue-600`
  - Orange: `bg-[#FF7A00] hover:bg-[#E56A00]`

### Cards
Baseline (shadcn) in `src/components/ui/card.tsx`:
- Card surface: `rounded-lg border bg-card shadow-sm`

Common “marketing card” pattern (observed):
- `bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300`

### Badges / chips
Baseline (shadcn) in `src/components/ui/badge.tsx`:
- Rounded pill: `rounded-full px-2.5 py-0.5 text-xs font-semibold`

Common usage:
- Small “tag” pills with colored outline/background (emerald/blue/violet/amber/slate).

### Forms (inputs, textarea, selects)
Baseline (shadcn) in `src/components/ui/input.tsx` and `src/components/ui/textarea.tsx`:
- Height: `h-10` (inputs)
- Border: `border-input`, background: `bg-background`
- Focus: ring + ring-offset

Observed “custom form” pattern (used in some pages):
- `px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`

### Navigation
Header style:
- Fixed header: `fixed top-0 ... bg-white border-b border-gray-200`
- Desktop nav active state: `text-primary` + underline bar (`h-0.5 bg-primary rounded-full`)
- Mobile nav items: `px-4 py-4 rounded-lg` with active background.

### Toasts
`src/components/ui/sonner.tsx` uses semantic surface tokens:
- Toast surface: `bg-background text-foreground border-border shadow-lg`
- Action button: `bg-primary text-primary-foreground`

---

## 7) Backgrounds & Decorative Motifs

### Hero background recipe (used across multiple pages)
- Base: `bg-gradient-to-br from-slate-50 via-white to-blue-50`
- Orbs: large blurred gradient circles (`w-72 h-72 ... blur-xl ... animate-float`)
- Grid overlay: `bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]`

### Glassy surfaces (used in some CTA sections)
- `bg-white/10 backdrop-blur-sm border border-white/20`

---

## 8) Motion & Interaction

### Animation utilities
Defined in `tailwind.config.ts` and `src/index.css`:
- Entrance: `animate-fade-in-up`, `animate-slide-in-left`, `animate-slide-in-right`, `animate-scale-in`
- Ambient: `animate-float`
- Attention: `animate-pulse-glow`, `animate-shimmer`
- Staggering: `.delay-100` … `.delay-2000`

### Motion guidelines (consistent with current usage)
- Prefer **subtle lift** on cards: small translate + shadow increase (`hover:-translate-y-0.5`, `hover:shadow-2xl`).
- Prefer **gradient shifts** for emphasis, not everywhere.
- Respect reduced motion: `src/index.css` disables animations under `prefers-reduced-motion: reduce`.

---

## 9) Accessibility Checklist (as implemented)
- Always keep a **visible focus ring** on interactive elements (shadcn components already do).
- Use sufficient contrast for body text (`gray-600` on white is common here).
- Prefer semantic tokens (`bg-background`, `text-foreground`, `border-border`) when building reusable UI.

---

## 10) Reuse Across Projects (minimum set)

If you want this design language in another project, copy/adapt:
- `tailwind.config.ts` sections for `theme.extend` (colors, borderRadius, fontFamily, animations, shadows)
- `src/index.css`:
  - semantic CSS variables in `:root` / `.dark`
  - base typography for `h1`–`h4`
  - animation utility classes + reduced-motion overrides
- `src/components/ui/*` (Button/Input/Card/Badge/etc.) or regenerate via shadcn/ui with the same tokens
- Font links from `index.html` (Montserrat + Open Sans), or update Tailwind fonts to match your chosen font source
