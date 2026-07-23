# August & Ash — Interior Design Studio Website

A fictional boutique interior design studio, built as a demo/portfolio site. Dark,
editorial "luxury" design system: warm charcoal canvas, brass/gold accent, Fraunces
serif for display type paired with Inter for body copy.

Everything — business name, founder, projects, testimonials, contact details — is
invented for this build. Swap in real content before using it for an actual business.

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
- `assets/images/` — drop real photos here (see below for what's needed)

## Photos

All photo slots are filled with real images. Any new/replacement photo should
use the `.photo-frame` wrapper (border + `object-fit: cover`), e.g.:

```html
<div class="hero-photo photo-frame">
  <img src="assets/images/hero.jpg" alt="..." />
</div>
```

The unused `.photo-placeholder` CSS (gradient block + caption) is still in
`styles.css` in case you add another slot later and want a placeholder while
sourcing that photo.

### Shot list (11 images) — all filled ✅

| Location | Spec |
|---|---|
| `assets/images/hero.jpg` | Hero. Wide living room with natural light and a garden view. |
| `assets/images/portfolio/project-1-01.jpg` + `project-1-02.webp` | The Rosedale Residence — wide kitchen/dining shot + a moody navy velvet lounge vignette. |
| `assets/images/portfolio/project-2-01.jpg` + `project-2-02.jpg` | Harbourside Apartment — neutral living room wide shot + the Sydney Harbour Bridge/Opera House view. |
| `assets/images/portfolio/project-3-01.jpg` + `project-3-02.jpg` | The Fig Tree House — blush-toned living room wide shot + timber house exterior in greenery. |
| `assets/images/about/founder.jpg` | Portrait of Jordan Ashworth, Principal Designer. |
| `assets/images/details/detail-{1,2,3}.jpg` | Styled console vignette, illuminated wall art panel, folded linen close-up. |

Note `project-1-02.webp` is a `.webp` file (the others are `.jpg`) — browsers handle
this fine, but keep it in mind if you script anything against file extensions.

## Known placeholders — update before launch

- **Photos** — see above.
- **Contact details** — email/Instagram/hours are invented; not real, functioning
  contacts.
- **Testimonials** — clearly fictional, flagged inline as placeholder quotes.
- **Contact form** — submits nothing (`script.js` just shows a confirmation message).
  Wire it to an email service, formspree-style endpoint, or backend before going live.
