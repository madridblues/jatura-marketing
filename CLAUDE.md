# CLAUDE.md — marketing-astro

Standalone Astro marketing site for Jatura ATS. Deployed independently to Vercel.
Source pages were migrated from the React SPA at `../client/src/pages/`.

## Project Structure

```
marketing-astro/
├── src/
│   ├── layouts/MarketingLayout.astro   # Wraps every page; injects <head>, header, footer
│   ├── components/
│   │   ├── PublicHeader.tsx            # React island (client:load) — mobile menu state
│   │   ├── PublicFooter.tsx            # React island (client:load) — newsletter form
│   │   ├── islands/                    # React islands for interactive pages
│   │   │   ├── DemoPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── PricingPage.tsx         # billing toggle
│   │   │   ├── FAQPage.tsx             # search filter
│   │   │   ├── APIDocsPage.tsx         # category nav
│   │   │   ├── WhyJaturaPage.tsx       # pillar tabs
│   │   │   ├── SupportPage.tsx         # contact form
│   │   │   ├── GetStartedPage.tsx      # video selector
│   │   │   ├── CheckStatusForm.tsx
│   │   │   ├── StatusResultsView.tsx
│   │   │   ├── ROICalculator.tsx
│   │   │   ├── HiringCostCalculator.tsx
│   │   │   ├── ATSComparisonTool.tsx
│   │   │   └── ATSAssessmentTool.tsx
│   │   └── ui/                         # 17 shadcn/Radix components (copied verbatim)
│   ├── pages/                          # 51 total pages
│   │   ├── blog/
│   │   │   ├── index.astro             # SSR — fetches post list at request time
│   │   │   └── [slug].astro            # SSR — fetches single post at request time
│   │   └── **/*.astro                  # 49 prerendered static pages
│   ├── styles/global.css               # Copied from client/src/index.css (CSS vars, Tailwind)
│   └── lib/utils.ts                    # cn() helper (clsx + tailwind-merge)
├── astro.config.mjs                    # output:server, Vercel adapter, React/Tailwind/Sitemap
├── tailwind.config.ts                  # Identical to client/ config
├── tsconfig.json                       # @/ → src/ alias, react-jsx
├── vercel.json                         # Security headers, _astro/ caching, blog rewrites
└── .claude/launch.json                 # Dev server: `npx astro dev --port 4321`
```

## Architecture

- **Output mode**: `server` (Astro SSR) with `@astrojs/vercel/serverless` adapter
- **Static pages**: 49 pages use `export const prerender = true` — compiled to `.html` at build time
- **SSR pages**: 2 blog pages fetch from `https://app.jatura.com/api/blog/posts` at request time
- **React islands**: Interactive components use `<Component client:load />` — JS shipped only for those pages
- **Styling**: Tailwind CSS 3.4 + CSS variables from `global.css` — dark theme applied via `class="dark"` on `<html>`

## Dev Commands

```bash
cd marketing-astro
npm run dev          # http://localhost:4321
npm run build        # Outputs to .vercel/output/ (49 static + 1 SSR function)
npm run preview      # Preview production build locally
vercel deploy        # Deploy to Vercel (run from marketing-astro/)
```

## Conversion Patterns

### Pattern A — Static page
Remove: `useEffect` (dark mode + SEO), `<PublicHeader>`, `<PublicFooter>`
Change: `className=` → `class=`, `<Link href>` → `<a href>`
Wrap in `<MarketingLayout>` with frontmatter title/description.
Add: `export const prerender = true`

### Pattern B — React island (has useState / form logic)
Create `.tsx` in `src/components/islands/` — strip layout wrappers, keep state.
Create `.astro` wrapper: `<IslandComponent client:load />`
Add: `export const prerender = true` to the `.astro` file.

### Pattern C — SSR blog
No `prerender`. Fetch in Astro frontmatter: `const res = await fetch(API_URL)`.

## Important Caveats

- `src/pages/api/` is **reserved by Astro** for API route handlers. The API docs page lives at `api-docs.astro` (route: `/api-docs/`).
- After creating new island components, the dev server requires a **full restart** (not just HMR) to clear the module cache.
- `PrivacyHub.tsx` source was an app-internal page (useParams/useQuery/useMutation). Converted to a marketing-style static page — does not replicate app functionality.
- `GetStarted.tsx` used internal `Layout` component (not PublicHeader/Footer). Converted to island with inline video overlay.
- `Support.tsx` used `useToast` and `useRecaptcha` (not available in this project). Replaced with inline state-based notifications.

## Deployment

```bash
# From marketing-astro/
vercel deploy --prod
```

Requires:
- Vercel project linked to `marketing-astro/` subdirectory
- `buildCommand: npx astro build`, `outputDirectory: dist`
- CORS configured on `app.jatura.com` to allow the marketing domain

## Build Health

As of 2026-03-07:
- **51 pages** (49 static HTML + 2 SSR)
- **Build time**: ~16 seconds
- **Zero errors** (1 non-blocking unused-import warning)
