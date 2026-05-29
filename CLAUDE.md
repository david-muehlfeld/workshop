# Portfolio template

The user is editing this template to make it their personal portfolio.

## Where things live (this matters)

This project is structured to keep **content separate from layout**, so most edits happen in one file.

- **`content.ts`** — all editable text (name, role, bio, projects, experience, skills, testimonials, contact). **Edit here first for any text change.**
- **`components/`** — one file per page section. Edit these when changing how a section *looks* or *behaves*, not what it says.
  - `Hero.tsx` — name, role, headline, CTA buttons
  - `About.tsx` — about paragraphs
  - `Experience.tsx` — work history list
  - `Projects.tsx` — selected work
  - `Skills.tsx` — skill groups with chips
  - `Testimonials.tsx` — pull quotes
  - `Contact.tsx` — email + social links
- **`app/page.tsx`** — the page composition (which sections appear, in what order)
- **`app/layout.tsx`** — site-wide HTML wrapper (reads page title from `content.ts`)
- **`tailwind.config.ts`** — colors and fonts
- **`app/globals.css`** — base styles

## Rules for making changes

- **Text/content edit?** → edit `content.ts`, never the components.
- **New section?** → create a new component in `components/`, import it into `app/page.tsx`, add corresponding data to `content.ts`.
- **Visual / layout change to an existing section?** → edit the matching `components/[Section].tsx`.
- **Color or font change?** → edit `tailwind.config.ts`. Avoid hardcoded hex values in components.
- **Remove a section?** → remove its `<Component />` line from `app/page.tsx`. Optionally also remove its export from `content.ts`. **Don't delete the component file** unless explicitly asked.
- **Reorder sections?** → reorder the `<Component />` lines in `app/page.tsx`.

## After each change

Remind the user to check the preview tab — Next.js auto-reloads, so they'll see the change immediately. Suggest a `git commit` after meaningful changes.

## Things to avoid

- Don't add new packages without asking.
- Don't restructure the file layout — non-technical users need stable mental models.
- Don't write inline styles. Use Tailwind utility classes.
- Don't use the colors `#22c55e` etc directly in components — use the named Tailwind colors from `tailwind.config.ts` (`accent`, `ink`, `paper`).
