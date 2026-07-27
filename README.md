# Kincumber K&N Nails & Spa — Website

A static, single-page site for Kincumber K&N Nails & Spa (Shop 21/43 Avoca Drive,
Kincumber NSW 2251), built in an achromatic editorial style (Founders Grotesk-style
type, off-white canvas, shadowless flat surfaces).

## Structure

- `index.html` — all page content and sections
- `css/style.css` — full styling (design tokens as CSS custom properties)
- `js/main.js` — mobile nav toggle + footer year
- `images/` — put real photos here (see below)

## Running locally

No build step. Just serve the folder, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Replacing placeholder photos

Every image on the site is currently a striped placeholder block with a text
label describing what should go there (dimensions are a guide, not a hard
requirement — the layout will crop/cover). To swap one in:

1. Add your photo to `images/` (e.g. `images/hero.jpg`).
2. In `index.html`, find the matching `<div class="... ph" data-label="...">`
   and replace it with an `<img class="...">` pointing at your file, e.g.:

   ```html
   <div class="hero-image">
     <img src="images/hero.jpg" alt="Salon interior" style="width:100%;height:100%;object-fit:cover;">
   </div>
   ```

## Content notes

- Business name, address, phone, and hours were pulled from public listings
  (the salon's Fresha booking page and shopping-centre directory), since the
  Facebook page itself isn't reachable by automated tools. Please double-check
  these are current, especially the hours.
- "Book Now" links to the salon's public Fresha booking page. Update if the
  salon uses a different booking system.
- No pricing is listed since it isn't published anywhere public — the
  services section just invites visitors to call or book for a quote.
- The contact form submits via `mailto:` (opens the visitor's email app) since
  there's no backend — update the address in `index.html`
  (`action="mailto:..."`) to the salon's real inbox.
