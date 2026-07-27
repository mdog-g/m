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

## Photos

The logo, hero (storefront), about, and gallery images are real photos from
the salon. The 9 service cards still use striped placeholder blocks — no
photo was confirmed to match a specific service (acrylic vs. gel vs. dip
powder, etc.), so rather than guess and mislabel a technique, those stay as
placeholders until real per-service shots come through.

To swap a placeholder for a real photo:

1. Add your photo to `images/` (e.g. `images/service-acrylic.jpg`).
2. In `index.html`, find the matching `<div class="... ph" data-label="...">`
   and replace it with an `<img>` pointing at your file, e.g.:

   ```html
   <div class="service-image">
     <img src="images/service-acrylic.jpg" alt="Acrylic nail set">
   </div>
   ```

The gallery (`#gallery`) uses a CSS masonry layout (`column-count`), so photos
of any aspect ratio drop in at their natural proportions — no cropping needed.
Photos were resized to a 1600px max dimension and re-compressed on the way in
to keep page weight down; do the same for any new ones you add (e.g. via
Squoosh or TinyPNG) if they come straight off a phone.

## Adding real videos

The Videos section (`#videos` in `index.html`) has 4 placeholder cards, each a
vertical 9:16 "reel" slot with a play badge and a label describing what should
go there. To swap one in:

1. Add your clip to `videos/` (e.g. `videos/reel-1.mp4`) and, optionally, a
   still-frame poster image to `images/` (e.g. `images/reel-1-poster.jpg`).
2. Replace the matching placeholder `<div class="video-item ph ph-video" ...>`
   in `index.html` with:

   ```html
   <div class="video-item">
     <video controls preload="metadata" poster="images/reel-1-poster.jpg">
       <source src="videos/reel-1.mp4" type="video/mp4">
     </video>
   </div>
   ```

Keep clips reasonably compressed (H.264 MP4, a few MB each) so the page loads
quickly on mobile data. `js/main.js` already pauses any other playing video
when one starts, so visitors don't get overlapping audio.

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
