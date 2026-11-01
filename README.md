# REDOWN Website

Official, public-facing website for **REDOWN • Click2Cloud**.

This is a lightweight static website designed for **Cloudflare Pages**. The REDOWN browser extension is developed separately at [thanks-cohn/REDOWN](https://github.com/thanks-cohn/REDOWN).

## Pages

- `index.html`: responsive marketing homepage and illustrative product gallery
- `privacy.html`: data-handling disclosure, requiring final implementation review before OAuth submission
- `support.html`: support, product prerequisites and troubleshooting
- `review.html`: reviewer-facing use-case explanation and OAuth demonstration checklist
- `styles.css`: shared visual system
- `app.js`: accessible gallery lightbox, navigation and FAQ enhancement
- `_headers`: Cloudflare Pages security headers

## Deploy

Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git → choose `thanks-cohn/redown-website`.

Use the `main` branch, **no build command**, and root (`/`) as the build output directory.

The site does not require an npm build, third-party scripts, a tracking pixel or credentials.

## Before public OAuth / Chrome Store submission

1. Verify domain ownership through Google Search Console and use the same domain for the OAuth homepage and privacy policy.
2. Confirm the public support contact and contact method. Current public support is via GitHub Issues; add an email address that the owner explicitly approves for public display if required.
3. Conduct a real implementation-level privacy audit against the exact extension release build. Update the policy if any actual behavior differs. Do not assert non-collection, token revocation, encryption or deletion behaviors without evidence.
4. Verify permissions, account disconnection and all data flows in the submitted extension. Match the Google Cloud console's data-access list.
5. Finish Google Drive integration before marketing it as live. The site currently labels it **planned**; the current demonstrated destination is Cloudflare R2.
6. Replace conceptual gallery illustrations with clearly labeled screenshots from a tested release candidate, or retain their illustration disclaimers.
7. Record a real OAuth consent and save-to-Drive video (if requested), and populate the reviewer guide only after the feature works. Never present a scripted mock as a working Drive integration.
8. Verify the website is publicly accessible and that all links and mobile views work.
9. Confirm any legal terms and provider trademark requirements as necessary.
10. Publish the OAuth app to production and submit verification where Google requires it. Google OAuth approval and Chrome Web Store approval are separate processes.

## Architecture

Static HTML, CSS and local JavaScript. No network services and no website form data collection are included in this website implementation. This statement is about the **website only**, not a conclusion about the REDOWN extension.

## Brand copy

**Remote downloads, without the download.**

For supported source URLs, the REDOWN Cloudflare Worker transfers files directly to the user's own Cloudflare R2 storage rather than downloading the file through their computer first. Not every website, file or transfer path is eligible for true remote transfer. Manual local uploads and browser-assisted fallbacks are distinct workflows.

## Content status

The gallery contains **illustrative product interface concepts**. The public site expressly labels these concepts. Google Drive support is **not claimed to be released**.

Last updated November 1, 2026.
