# Portfolio

Julien Gaichet's portfolio: a home page with selected work, one page per project
(`/projects/<slug>`), a downloadable CV and a contact form.

## Stack

- React 19 + Vite, Tailwind CSS 3, a ~60-line client-side router (`src/lib/router.js`)
- One Vercel serverless function for the contact form (`api/contact.js`), sending through Resend
- Deployed on Vercel

## Getting started

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

`npm run dev` also serves `POST /api/contact` with the same handler as production. Copy
`.env.example` to `.env.local`; with `CONTACT_DRY_RUN=1` messages are printed in the
terminal instead of being sent.

## Where things live

- `src/data/projects.js` — every project and its page content. Adding an entry adds a page.
- `src/data/site.js` — hero, headline figures, intro, background, links.
- `src/pages/` — home, project page, 404. `src/components/` — page sections.
- `server/contact.js` — contact form logic (validation, anti-abuse, Resend call).
- `shared/contact-rules.js` — field rules shared by the browser and the server.
- `public/cv/Julien-Gaichet-CV.pdf` — the CV behind every "Download CV" button.

## Replacing the CV

Replace `public/cv/Julien-Gaichet-CV.pdf` with the new PDF, **keeping the same file name**,
then commit and deploy. No code change is needed. Vercel serves files from `public/` with
revalidation, so visitors get the new file on the next download.

To use another file name, change `LINKS.cv` and `LINKS.cvFileName` in `src/data/site.js`.

## Contact form (Resend)

The form posts to `/api/contact`. The recipient address and the API key exist only in
server environment variables: they never appear in the page or the JavaScript bundle.

Set these in Vercel › Project › Settings › Environment Variables (Production and Preview):

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | Resend API key, "Sending access" is enough |
| `CONTACT_TO_EMAIL` | yes | inbox that receives the messages |
| `CONTACT_FROM_EMAIL` | yes | sender on a domain verified in Resend, e.g. `Portfolio <contact@your-domain>` |
| `CONTACT_ALLOWED_ORIGINS` | no | comma-separated origins allowed to post; defaults to the site's own host |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | recommended | rate limit shared across serverless instances (free tier) |

Never prefix them with `VITE_`: Vite ships `VITE_` variables to the browser.

Without the three required variables the form stays visible and answers "temporarily
unavailable", pointing visitors to LinkedIn.

Protection in place: server-side validation (lengths, email format, control characters),
a honeypot field and a minimum fill time (bots get a fake success and nothing is sent),
an origin check, and a limit of 5 messages per IP per hour. Without Upstash the limit is
kept in memory per serverless instance, which is best effort only.
