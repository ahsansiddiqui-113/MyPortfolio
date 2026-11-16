# Muhammad Ahsan Siddiqui - Portfolio

Next.js 14 (App Router) + Tailwind CSS portfolio for a Full-Stack Software Engineer.

## What is on the site

- Hero, highlights, about, experience (with achievements per role) and education
- Skills: scrolling icon marquee plus categorised cards (mobile, backend, frontend, data, cloud, tools)
- Projects: filterable cards with **Live** badges, tech stack, role and links (live site and code)
  - Live products: WealthNX AI, WealthNX Web (wealthnx.ai), Inexor website (inexor.ai), CloakPaste
- More on GitHub: every other public repository, pulled live from the GitHub API (hourly) with a built-in fallback list
- Contact form (EmailJS), downloadable resume, SEO metadata and a favicon

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Copy `.env.example` to `.env.local` and fill in what you use:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_EMAILJS_*` | Contact form (EmailJS service, template and public key) |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployed site (SEO / social metadata) |
| `NEXT_PUBLIC_GTM` | Optional Google Tag Manager id |
| `GITHUB_TOKEN` | Optional. Raises the GitHub API rate limit for the live repository list |

## Edit the content

All content lives in `utils/data/`:

- `personal-data.js` - name, bio, links, highlight numbers, resume path
- `experience.js`, `educations.js` - timeline
- `skills.js` - skill categories (each has a brand icon)
- `projects-data.js` - projects, filters and short blurbs for other repositories

Replace `public/Ahsan_Siddiqui_Resume.pdf` to update the resume download.

## Notes

- Inter is bundled in `app/fonts/`, so builds do not depend on Google Fonts.
- `react-fast-marquee` and `lottie-react` only run in the browser to avoid server-render errors.
