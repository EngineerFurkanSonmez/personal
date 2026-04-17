# Furkan Sönmez — Portfolio Website

Personal portfolio and CV website for **Furkan Sönmez**, Embedded Systems Software Engineer specializing in safety-critical avionics software, RTCA DO-178C, and real-time embedded systems.

**Live site:** `https://engineerfurkansonmez.github.io/personal/`

---

## Stack

| Layer      | Technology                         |
|------------|-------------------------------------|
| Framework  | React 18 + TypeScript               |
| Build tool | Vite 5                              |
| Styling    | Tailwind CSS 3                      |
| Icons      | Lucide React                        |
| Deployment | GitHub Pages via GitHub Actions     |

---

## Design

Dark avionics / HUD theme — inspired by cockpit displays, telemetry readouts, and embedded systems aesthetics:

- **Background:** `#070d14` — deep space navy
- **Accent:** `#00d4ff` — avionics cyan
- **Grid pattern:** subtle 56 px telemetry grid overlay
- **Typography:** Inter (body) + JetBrains Mono (technical labels, tags, code)
- Reveal-on-scroll animations, sticky nav, responsive layout

---

## Project Structure

```
personal/
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── public/
│   └── favicon.svg                # Avionics crosshair icon
├── src/
│   ├── data/
│   │   └── cv.ts                  # All CV content — edit here
│   ├── hooks/
│   │   └── useIntersection.ts     # Scroll-reveal hook
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Trainings.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment — GitHub Pages

### Automatic (recommended)

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on every push to `main`.

**One-time setup:**

1. Go to **Settings → Pages** in your GitHub repository
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow will handle the rest

Your site will be live at `https://engineerfurkansonmez.github.io/personal/`

### Manual deployment

```bash
npm run build
# then upload the contents of ./dist to your hosting provider
```

### Custom domain

If you point a custom domain to this repo:

1. Update `base` in `vite.config.ts` from `'/personal/'` to `'/'`
2. Add a `CNAME` file to the `public/` folder containing your domain
3. Configure the domain in **Settings → Pages**

---

## Updating Content

All CV content lives in a single file: **`src/data/cv.ts`**

- Edit `personal` — name, email, LinkedIn, location
- Edit `experience` — add/remove/reorder jobs
- Edit `skills` — add/remove skill groups and items
- Edit `trainings` — certifications and courses
- Edit `education` — degrees

No component code needs to change when updating CV content.

---

## Sections

| Section     | ID            | Description                                      |
|-------------|---------------|--------------------------------------------------|
| Hero        | `#hero`       | Name, animated role title, CTA, contact links    |
| About       | `#about`      | Bio, strength cards, profile stats               |
| Skills      | `#skills`     | Categorized skill chips (7 categories)           |
| Experience  | `#experience` | Expandable timeline of all work history          |
| Education   | `#education`  | METU degree card                                 |
| Trainings   | `#trainings`  | 5 TAI certification cards                        |
| Contact     | `#contact`    | Contact cards + terminal-style status block      |

---

## License

Personal use. All content © Furkan Sönmez.
