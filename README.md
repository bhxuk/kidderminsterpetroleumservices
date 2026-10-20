# Kidderminster Petroleum Services: website rebuild (mockup)

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

Enable GitHub Pages (Settings > Pages > Deploy from branch > `main` / root) to get a shareable preview link.
