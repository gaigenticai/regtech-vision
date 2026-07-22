# Gaigentic AI design system — "Ledger" (flipprr family language)

The site shares the design language of flipprr.com: dark ink canvas framing warm paper panels,
mono uppercase labels, numbered index rows, hatch dividers, pill buttons. Reference
implementations (canonical, copy their patterns exactly): `src/pages/Index.tsx`,
`src/pages/Verify.tsx`, `src/pages/Solutions.tsx`, `src/pages/About.tsx`, `src/pages/Platform.tsx`.

## Tokens (already in tailwind.config.ts)

- Colors: `bg-ink` (#121410 page canvas), `bg-paper` (#E9E8E2 sheet panels), `paper-bright`
  (#F2F1EC cards on paper), `text-ink` / `ink-soft` / `ink-faint` (on paper),
  `text-paper` + opacity modifiers `/65 /45 /35` (on ink), `ledger` (#1E5B41 brand green,
  headline accents on paper), `ledger-deep` (#143D2C CTA panels), `tick` (#2E9E6B success/live
  dots only), `flag` (#C2402A flagged states only), `amber` (#DF8A1F secondary accent: roadmap
  tags, product dots, phase labels), `rule` (#D3D2C8 hairlines on paper).
- Type: `font-sans` = Archivo. Display headlines add `font-expanded font-extrabold tracking-tight`
  (font-stretch 115%). `font-mono` = Spline Sans Mono for ALL data/labels/timestamps/regulatory refs.
- Utility classes (index.css): `.eyebrow` (mono 11px uppercase tracked labels),
  `.hatch-band` (diagonal hatch divider on ink), `.hatch-band-light` (on paper).

## Page skeleton

```jsx
<div className="bg-ink min-h-screen pt-16">
  {/* hero: paper sheet */}
  <section className="px-3 md:px-5 pt-3 md:pt-5">
    <div className="bg-paper rounded-2xl md:rounded-3xl">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
        <span className="eyebrow text-ink-faint">EYEBROW</span>
        <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
          Headline with <span className="text-ledger">green accent phrase</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">Standfirst.</p>
      </div>
    </div>
  </section>
  {/* body sections: dark, max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20 */}
  {/* optional second paper sheet for a major light section */}
  {/* CTA: bg-ledger-deep rounded sheet, centered */}
</div>
```

## Patterns

- **Index rows** (features, capabilities, sub-products): `border-t border-paper/10` container;
  each row `grid md:grid-cols-[56px_220px_1fr] gap-6 py-8 border-b border-paper/10` with mono
  index number (`01`…), `font-expanded font-bold text-2xl text-paper` name, `text-paper/60` detail.
  Number rows ONLY when they form a real sequence or catalog index.
- **Card grids on paper**: `grid md:grid-cols-3 gap-px bg-rule rounded-xl overflow-hidden border
  border-rule`, cells `bg-paper-bright p-7 md:p-9`.
- **Framework/regulatory stamps**: `border-t-2 border-ink pt-5` columns with
  `font-mono text-xs text-ledger` reference line (e.g. `EU AI ACT · ART. 14`).
- **Tags**: `font-mono text-[11px] uppercase tracking-[0.14em] border rounded-full px-3 py-1`
  (`text-paper/45 border-paper/15` on ink, `text-ink-soft border-rule-dark` on paper).
- **Buttons**: pill only. Primary on paper: `eyebrow bg-ink text-paper rounded-full px-6 py-3.5`.
  On ink/green: `bg-paper text-ink`. Secondary: `border border-ink/25 text-ink`.
- **Dividers**: `<div className="h-10 hatch-band rounded-sm" aria-hidden />` inside
  `max-w-[1400px] mx-auto px-5 md:px-12` between major dark sections.
- **Status dots**: `w-1.5 h-1.5 rounded-full bg-tick` (live/first) or `bg-amber` (roadmap/product).

## Forbidden (this is the anti-AI-slop line)

No gradients (`bg-gradient-*`, `bg-clip-text text-transparent`). No emoji anywhere. No floating
blur blobs / `animate-float` / glassmorphism / `backdrop-blur` decor. No glow shadows. No
counting-number animations. No `rounded-3xl` cards inside sheets (sheets themselves are the only
3xl). No purple/blue/pink/cyan. No stat chips with percentages. Old-design classes
(`text-purple-600`, `from-blue-400/20`, `bg-white/70` etc.) must not survive.

## Content rules

Copy is factual and claim-safe: no invented numbers, no held certifications, no customer claims
(honesty scrub of 2026-07-22 must be preserved). Regulatory references in mono
(`DNB · SAFEST`, `EU AI ACT · ART. 12`). Sentence case everywhere except `.eyebrow` labels.
