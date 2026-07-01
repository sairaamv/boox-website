# Books & Beyond — Web

Next.js 14 static site for booksnb.com. Deployed via GitHub → Cloudflare Pages (auto-deploy on push to `main`).

## Stack

- Next.js 14 (App Router), `output: "export"` — static export to `out/`
- Tailwind CSS, TypeScript
- Fonts: Satoshi (Fontshare) + Space Grotesk (Google) loaded in `globals.css`

## Deploy

Push to `main` → Cloudflare Pages picks it up automatically. No manual wrangler deploy needed for the frontend. The `worker/` directory (contact form backend) uses wrangler separately.

## Brand

Final brand identity is from `booksnb.zip` handoff — do not change tokens without a new handoff.

- **Logo in nav/footer:** Use `public/booksnb-mark.svg` (glyph only, no tile) via `<Image>`
- **Favicon/browser icon:** `public/booksnb-icon.svg` (gradient squircle tile) — wired in `app/layout.tsx` metadata
- **Color tokens:** defined in `globals.css` — `--brand-forest`, `--bnb-coral`, `--brand-gradient`, etc.
- **Wordmark:** `books & beyond`, Satoshi 900, lowercase, `letter-spacing: -0.04em`, `&` in coral

## Key files

- `app/layout.tsx` — root metadata (icons, OG, fonts)
- `components/nav.tsx` — navbar + logo
- `components/footer.tsx` — footer + logo
- `app/globals.css` — CSS tokens + font imports
- `public/` — SVG assets, favicon, OG image
