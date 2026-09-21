# Wrapp'd — React Project

Real Vite + React + React Router app generated from the Figma design (not a static HTML prototype).

## Setup
```
npm install
npm run dev
```

## Structure
- `src/pages/` — one route component per screen (Landing, Corporate, Personal, Shop, Product, Curate, FAQ, Corporate Story, Contact)
- `src/components/<page>/` — the actual JSX components + assets + generated `fig-tokens.css`/`fig-assets.css` for that page, extracted directly from Figma
- `src/components/shared/WhatsAppButton.jsx` — floating WhatsApp button, shown on every route
- `src/App.jsx` — routes
- `src/styles.css` — global reset + design tokens import

## Known gaps to wire up before shipping
- Two landing images (6769d0ea7dea69ee.jpg, d4fafedf36312ba6.jpg) were >4MB and skipped by the Figma extractor — re-export those two from Figma at a smaller size and drop them into `src/components/landing/assets/`, then set their `background`/`className` on the two "Split Card" / "medium-shot-woman-opening-gift" elements in `WrappdLandingPage.jsx`.
- Booking calendar (Corporate Story page) and FAQ/Contact accordions are static markup — add real interactivity (state, click handlers) per the design-handoff README.
- WhatsApp number is a placeholder (`2340000000000`) — replace with the real one.
- Nav links currently don't navigate — wire `<a>`/button elements in NavBar3.jsx to `react-router-dom`'s `Link`/`useNavigate`.
