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

For the mockup, photos load straight from the current live site. To self-host them before the old site goes away:

1. Run `scripts/get-images.ps1` from the repo root (Windows PowerShell). It saves all 34 images into `assets/img/`.
2. In `assets/js/site.js`, change the `IMG` line to `"assets/img/"`.

## Still to do before going live

- Contact form is display only. Wire it to a form handler (Formspree, PHP mail, etc.).
- Individual project pages still link to the old site.
- Privacy, Cookie and Marketing opt-out pages need carrying over.

## Preview

Enable GitHub Pages (Settings > Pages > Deploy from branch > `main` / root) to get a shareable preview link.
