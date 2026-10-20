# Kidderminster Petroleum Services: website rebuild (mockup)

### 🔗 [View the new website](https://bhxuk.github.io/kidderminsterpetroleumservices/)

[![View the new website](https://img.shields.io/badge/View%20the%20new%20website-f5a300?style=for-the-badge)](https://bhxuk.github.io/kidderminsterpetroleumservices/)


A redesign of [kidderminsterpetroleumservices.com](https://www.kidderminsterpetroleumservices.com/) using the same text, photos and contact details as the current WordPress site, rebuilt as a fast static site.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About Us |
| `services.html` | Our Services (anchors: `#pipework`, `#drainage-installations`, `#dispensing-equipment`, `#tank-gauge`, `#electrical-installations`, `#fabric-works`) |
| `projects.html` | Projects |
| `contact.html` | Contact (with map) |

Shared header, footer and accreditation strip are injected by `assets/js/site.js`, styles live in `assets/css/styles.css`.

## Images

All 34 photos and logos are self-hosted in `assets/img/`. They were copied from the current site by the **Fetch site images** GitHub Action (`.github/workflows/fetch-images.yml`), which reruns whenever `scripts/images.txt` changes. `scripts/get-images.ps1` does the same job locally on Windows.

## Still to do before going live

- Contact form is display only. Wire it to a form handler (Formspree, PHP mail, etc.).
- Individual project pages still link to the old site.
- Privacy, Cookie and Marketing opt-out pages need carrying over.

## Preview

Live preview (GitHub Pages): https://bhxuk.github.io/kidderminsterpetroleumservices/

Pages is served from the `main` branch, root folder (Settings > Pages).
