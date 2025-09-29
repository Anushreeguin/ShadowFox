# Sakthi Dental Clinic Website

A clean, modern, and responsive static website for Sakthi Dental Clinic (Hosur), specializing in women’s and children’s dental care.

## Tech Stack
- Pure HTML, CSS, JavaScript
- No build tools required

## Structure
- `index.html` — Home
- `about.html` — About the clinic and team
- `treatments.html` — Treatments list and descriptions
- `contact.html` — Contact form and clinic details
- `privacy.html` — Privacy policy (replace placeholder with provided text)
- `assets/css/styles.css` — Global styles
- `assets/js/main.js` — Mobile nav, simple testimonials carousel, basic form validation
- `assets/icons/` — Copyright-free, custom SVG icons
- `assets/img/hero-placeholder.svg` — Placeholder hero/Og image

## Placeholders to Update
- Clinic address: replace `[Clinic Address]`
- Phone: replace `[Phone Number]`
- Email: replace `[Email]`
- PIN code: replace `[PIN]`
- Social links in footer: `#` → actual URLs
- Privacy content in `privacy.html`

## SEO
- Meta tags and OpenGraph/Twitter in each page head
- JSON-LD schema in `index.html` (`Dentist`)
- `robots.txt` and `sitemap.xml` included

## How to Run
Just open `index.html` in a browser or serve the folder with any static server.

On Windows (PowerShell), for a quick local server (Python installed):
```powershell
python -m http.server 8000
```
Open http://localhost:8000/ in your browser.

## Notes
- The contact form is a demo; integrate with a backend or a form service for submissions.
- Images are optimized SVGs for speed and crisp rendering on all devices.
