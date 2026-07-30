# Muse Hair Co

Marketing website for Muse Hair Co, a hair salon in Toukley, NSW.

Plain static site — HTML, CSS and vanilla JS, no framework, no build step, no dependencies.

```
index.html
vercel.json          static asset caching + clean URLs on Vercel
assets/
  css/style.css
  js/main.js
  img/
    muse-badge.png, favicon-32.png, apple-touch-icon.png, favicon-512.png   logo/favicon (cropped from the studio's own Instagram badge)
    og-image.jpg      social share preview image
    team.jpg          team photo (About section)
    services/          drop-in photos for the Services section — see services/README.md for exact filenames
    gallery/            drop-in photos for the Gallery section — see gallery/README.md for exact filenames
```

## Run locally

No build step — just serve the folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project → Import** this repo.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty — it's static.
4. Deploy.

## Adding real photos

Service and gallery images are wired up to look for specific filenames (see the README in each `assets/img/services/` and `assets/img/gallery/` folder). Drop a photo in with the exact filename and it appears automatically, replacing the placeholder — no code changes needed.

## Booking

Booking is handled externally via [Fresha](https://www.fresha.com/a/muse-hair-co-toukley-3-315-main-road-qrs86ser/all-offer?menu=true&pId=719013).
