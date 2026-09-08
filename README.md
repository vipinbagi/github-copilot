# DigiSoftX Labs Website

A responsive, multi-page static website for DigiSoftX Labs, built with plain HTML, CSS and JavaScript.

## Pages

- `index.html` - Homepage
- `about.html` - Company overview
- `services.html` - Services catalogue
- `contact.html` - Contact and project enquiry form

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Local SVG assets

No framework, package manager or build step is required.

## Quick Start

### Requirements

- A modern browser
- Python 3, or any static HTTP server

### Run locally

From the project root:

```bash
python3 -m http.server 3000
```

Open <http://localhost:3000>.

Use an HTTP server instead of opening the files directly because the shared layout is loaded by JavaScript.

## Project Structure

```text
.
├── index.html
├── about.html
├── services.html
├── contact.html
└── assets/
    ├── css/
    │   └── styles.css       # Shared styles and responsive layout
    ├── images/              # Logo and service illustrations
    └── js/
        ├── layout.js        # Shared header, footer and chat CTA
        └── script.js        # Form feedback and copyright year
```

## Common Changes

| Change | File |
| --- | --- |
| Header, footer or chat button | `assets/js/layout.js` |
| Colors, typography or responsive styles | `assets/css/styles.css` |
| Contact form behavior | `assets/js/script.js` |
| Page content | The relevant `.html` file |
| Logo or service artwork | `assets/images/` |

## Deployment

The project can be deployed directly to any static host:

- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

Upload the project while preserving its folder structure. No build command is needed. Configure the custom domain in the hosting provider's dashboard.

## Contact Details

- Website: <https://www.digisoftx.com>
- Email: <contact.digisoftx@gmail.com>
- Phone: [+91 80765 00700](tel:+918076500700)

## Production Note

The contact form currently shows front-end feedback only. Connect it to a backend or form service before using it for real enquiries.
