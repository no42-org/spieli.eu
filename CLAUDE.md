@RTK.md

# spieli.eu

Playground finder website for families in German-speaking regions. Landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + tailwind-merge + clsx
- **Icons**: lucide-react
- **Font**: Nunito (Google Fonts)

## Development

```bash
make install   # install dependencies
make dev       # start dev server (http://localhost:3000)
make build     # production build
make start     # start production server
make lint      # run linter
make clean     # remove .next and node_modules
```

## Project Structure

```
app/
  layout.tsx       # root layout, metadata, font setup
  page.tsx         # home page
  globals.css      # global styles
components/
  header.tsx
  hero.tsx
  region-cards.tsx
  features.tsx
  footer.tsx
lib/
  utils.ts         # cn() helper (clsx + tailwind-merge)
```

## Language

UI copy is in German. Keep all user-facing strings in German.
