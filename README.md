# OJM Project Construction

Professional building, plumbing, and finishing services in Johannesburg. Quality construction solutions built on trust.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — build tool
- **Tailwind CSS v4** — styling
- **React Router v7** — client-side routing
- **Motion** (Framer Motion) — animations
- **Lucide React** — icons

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run TypeScript type-checking |
| `npm run clean` | Remove dist folder |

## Project Structure

```
src/
├── main.tsx                    # App entry point
├── App.tsx                     # Router + layout
├── index.css                   # Tailwind config + global styles
├── components/
│   ├── Navbar.tsx              # Navigation with mobile menu
│   ├── Hero.tsx                # Landing hero section
│   ├── About.tsx               # Company info section
│   ├── Services.tsx            # Services cards
│   ├── Projects.tsx            # Filterable project gallery
│   ├── Reviews.tsx             # Client testimonials
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── CTA.tsx                 # Call-to-action section
│   ├── Footer.tsx              # Site footer
│   ├── WhatsAppFloat.tsx       # Floating WhatsApp button
│   └── animations/
│       ├── BlurReveal.tsx      # Letter-by-letter blur animation
│       ├── Counter.tsx         # Animated number counter
│       └── TypingText.tsx      # Typewriter text effect
└── pages/
    ├── Home.tsx                # Homepage (all sections)
    ├── AboutPage.tsx           # About + CTA
    ├── ServicesPage.tsx        # Services + CTA
    ├── ProjectsPage.tsx        # Projects + CTA
    └── ContactPage.tsx         # Contact form + map
```
