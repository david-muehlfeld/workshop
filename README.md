# Portfolio template

A clean, content-driven personal portfolio. Built with Next.js + Tailwind.

## Architecture

Content and layout are kept separate. Most edits happen in one file: `content.ts`.

```
content.ts              ← all editable text lives here
components/             ← one file per page section
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  Skills.tsx
  Testimonials.tsx
  Contact.tsx
app/
  page.tsx              ← composes the sections in order
  layout.tsx            ← HTML wrapper, page title from content.ts
  globals.css           ← base styles
tailwind.config.ts      ← colors and fonts
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 (or click the auto-forwarded port in Codespaces).

## What to ask Claude

Common edits — Claude will edit `content.ts`:

- *"Change my name to Sara Patel."*
- *"Update the headline to say I'm looking for senior roles."*
- *"Add a fourth project called 'Berlin Coffee Map'."*
- *"Replace the Tide testimonial with one from someone at Stripe."*
- *"Remove the Skills section entirely."*
- *"Update my email to sara@example.com."*

Layout / design tweaks — Claude will edit `components/` or `tailwind.config.ts`:

- *"Make the headline bigger and use a serif font for it."*
- *"Switch the accent color from blue to a deep orange."*
- *"Use a dark background everywhere."*
- *"Show projects as a grid instead of a list."*

## Deploy to Vercel

```bash
vercel login
vercel --prod
```

Follow the prompts — accept the defaults. You'll get a URL like `your-portfolio.vercel.app`.
