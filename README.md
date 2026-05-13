# Reshaan — Portfolio

Personal developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Fonts:** Playfair Display, Space Grotesk, JetBrains Mono
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Content

All project data lives in `/data/projects.ts`. Edit that file to add, remove, or update projects — no other files need to change.

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo to Vercel and it deploys automatically on every push to `main`.

## Structure

```
app/
  layout.tsx        # Fonts, metadata, OG tags
  page.tsx          # Section composition
  globals.css       # Base styles, grain overlay, utilities
components/
  Navigation.tsx    # Sticky nav + mobile drawer
  Hero.tsx          # Full-viewport hero with particle canvas
  About.tsx         # Bio + rotating monogram
  Projects.tsx      # Card grid
  ProjectModal.tsx  # Framer Motion slide-up modal
  Skills.tsx        # Grouped skill chips
  Contact.tsx       # Form + social links
  Footer.tsx        # Minimal footer
data/
  projects.ts       # All project content — edit here
public/
  favicon.svg       # SVG monogram favicon
```
