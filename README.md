# Philip Traylen — Creative Technologist Portfolio

A Next.js + React + TypeScript sample portfolio inspired by the supplied references, redesigned around teal `#008080` with deep maroon `#550000` as the primary ink.

## Run locally

1. Install Node.js 20+.
2. Put `Montague.ttf` in `public/fonts/` (see `public/fonts/README.md`).
3. Open a terminal in this folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

## Pages

Only the home page is implemented. The navbar includes SERVICES, WORK, ABOUT and BLOG, plus a contact action. Those links are intentionally clickable and currently resolve to the site's 404 page.

## Interaction

- Custom desktop cursor with a trailing halo and small sparkle points.
- Interactive cursor changes to a hand on links/cards/buttons.
- Cards and buttons have restrained glow/hover feedback.
- Responsive mobile layout removes the custom cursor for touch usability.
- Motion is intentionally limited. The only continuous animation is the subtle services marquee.
- `prefers-reduced-motion` is respected.

## Main files

- `app/page.tsx` — home page
- `app/not-found.tsx` — temporary 404 page
- `app/globals.css` — complete visual system and responsive styles
- `components/Navbar.tsx` — shared navbar
- `components/CustomCursor.tsx` — cursor interaction
- `components/ProjectCard.tsx` — portfolio cards
- `data/projects.ts` — fictional creative-technology projects


## Font setup

This project uses Montague for display headings and Semi-Coder for all normal UI/body text.

1. Download Montague from https://www.1001freefonts.com/montague.font and place the TTF at `public/fonts/Montague.ttf`.
2. Download Semi-Coder from the font source you are using and place the TTF at `public/fonts/Semi-Coder.ttf`.
3. Restart the Next.js development server after adding the font files.

If the font filenames differ, either rename the files to the names above or update the two `@font-face` URLs in `app/globals.css`.


## Font file placement

Place the font files in this exact structure before running the app:

```text
public/
└── fonts/
    ├── Montague.ttf
    └── semi-coder/
        ├── OFL.txt
        └── Semi-Coder-Regular.otf
```

The stylesheet loads Semi-Coder from `/fonts/semi-coder/Semi-Coder-Regular.otf`. The OFL.txt file is not loaded by the app, but keeping it beside the font preserves the font's license information.
