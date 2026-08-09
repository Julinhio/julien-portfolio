# Portfolio

Single-page personal portfolio: Operations &amp; Automation. Static, no API calls, no
environment variables, no secrets.

## Stack

- React 19 + Vite
- Tailwind CSS 3
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## Structure

- `src/components/` — section components (`Hero`, `HowIWork`, `Background`, `Contact`)
  and the `Section` / `Action` design-system primitives
- `src/data/` — page content and outbound links
- `src/index.css` — design tokens applied to base elements and shared utility classes
- `tailwind.config.js` — colour, type and spacing scale

## Editing the outbound links

Every external URL lives in `src/data/links.js`. `resume` is `null` until the file
exists; while it is `null`, the resume actions render as disabled controls rather
than dead links.
