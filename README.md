# Gels by Chanel

Website for Gels by Chanel, a nail salon in Wyong, NSW. Static HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html    All page markup and content
styles.css    Design tokens, layout, and component styles
script.js     Mobile nav drawer behaviour
```

All visuals (hero graphic, nail-art swatches, icons) are built with pure CSS and inline SVG — there are no external image files to manage.

## Run locally

Any static file server works, for example:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **New Project** and import the repo.
3. Leave the framework preset as **Other** — no build command or output directory is needed, the project is served as-is.
4. Deploy.

## Editing content

- Business info (phone, address, Instagram, booking link) lives directly in `index.html`.
- Colors, fonts, and spacing are defined as CSS custom properties at the top of `styles.css`.
