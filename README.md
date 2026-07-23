# Central Coast Elite Carpentry — Website

A static one-page site styled with a dark "void + ember" design system (black canvas,
single orange accent, zero border-radius, Inter as the Geist substitute).

## Run locally

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Files

- `index.html` — page structure and copy
- `styles.css` — design system tokens + components
- `script.js` — scroll nav state, mobile menu, contact form handler
- `assets/work/` — drop real project photos here

## Known placeholders — update before launch

This build could not reach `centralcoastelitecarpentry.com.au` or any photo/stock-image
host from the sandbox it was built in, so the following are placeholders and need real
values:

- **Photos** — the "Selected Work" gallery uses SVG line-art stand-ins instead of real
  project photography. Replace the `.work-media` SVGs in `index.html` with `<img>` tags
  pointing at files you add to `assets/work/`.
- **Contact details** — phone number, email, and licence/ABN in the `#contact` section
  are bracketed placeholders (`[Add phone number]`, etc.).
- **Stats** — the "Years on the Tools" and rating figures in `#about` are examples;
  replace with real numbers.
- **Testimonials** — none were added since none were sourced from the real site; add a
  testimonials section with real client quotes if you have them.
- **Contact form** — submits nothing (`script.js` just shows a confirmation message).
  Wire it to an email service, formspree-style endpoint, or backend before going live.
