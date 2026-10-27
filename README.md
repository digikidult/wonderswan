# DigiKidult WonderSwan 香港中文化

Buildless, responsive static website. No dependencies, tracking, remote fonts, ROMs, or patch binaries. All three translation projects are unreleased. Original game box covers are included for game identification; cover rights remain with their respective owners. The hero illustration is an original design.

## GitHub Pages

1. Upload this folder's **contents** into a GitHub repository (including `.github` and `.nojekyll`).
2. Under Settings → Pages → Build and deployment, select **GitHub Actions**.
3. Push to `main`, or run the included Deploy GitHub Pages workflow.
4. The deployment supplies your actual URL. Nothing has been published by this delivery.

Alternatively select “Deploy from a branch”, `main`, `/ (root)` and remove the workflow to avoid two deployments. Relative asset paths and hash routes work on both username.github.io and username.github.io/repository/. A detail permalink looks like `https://YOUR-USER.github.io/YOUR-REPO/#project/anode-tamer` (example only).

Open `index.html` locally to browse; no build/server required. JavaScript is needed for cards and details; a no-script status summary is included. Use a local static server if preferred.

## Updating projects

Edit `projects.js`; it is the sole project data file. Update status labels, notes and next steps together. Stage labels and notes must not imply release just because a translation is finished. No invented completion percentages or release dates.

To release a translation, first verify both the creator's public announcement and the actual IPS file. Confirm intended language, project, ROM version/checksum, archive contents, and rights to distribute the patch. Then change `status` to `released`, revise `label`, `stage`, `summary`, `notes` and `next`, and replace `verifiedRelease: null` with:

```js
verifiedRelease: {
  version: 'actual published version',
  format: 'IPS',
  url: 'https://actual-verified-download-url',
  source: 'https://actual-public-release-announcement',
  verifiedOn: 'YYYY-MM-DD',
  baseROM: 'exact original game/revision',
  baseChecksum: 'checksum algorithm and value',
  notes: 'actual release notes and compatibility caveats'
}
```

The renderer requires all these fields and HTTPS URLs before showing a download. This is an editorial guard, not automated verification of the external file. Never use Ver.Zero gameplay releases as evidence for a Cantonese translation release. Never add a ROM link. When adding/removing projects or releasing one, also update overview filter counts, hero project count and overview notice in `index.html`. Replace covers in `assets/` only with art you have permission to publish, updating alt text and attribution.

## Sources and verification — 2026-10-27

Owner-supplied facts: Anode Tamer TBB r8 translation content final, UAT pending, NOT released; Cathode Tamer planned/in progress; Digimon Adventure 02 Tag Tamers HK translation in progress. No translation download was independently verified; no download links or patch files are included.

Public research:

- https://withthewill.net/threads/game-guide-for-digital-monster-d-project-for-wonder-swan-by-digikidult.31124/ — DigiKidult's public game-guide post, context only; not a Cantonese patch release.
- https://www.juksy.com/article/144314 — identifies the X account @DigiKidult. Social URL used: https://x.com/DigiKidult . Direct access returned HTTP 403 during research; account attribution is corroborated, current profile content is not directly verified.
- https://search.yahoo.co.jp/realtime/search/%E3%82%AA%E3%83%A1%E3%82%AC%E3%83%A2%E3%83%B3/ — search result surfaced a DigiKidult Ver.Zero gameplay announcement. This is dynamic search evidence, not a stable release/download verification. No Ver.Zero release claim or download is included.
- Design reference inspected directly in browser: https://digikidult.github.io/WS_Anode_Cathode/ . Exact palette: paper #f5f6f0, ink #172a32, dark #101d26, accent #c5e6a4. Header, dotted hero, type hierarchy, card treatments and social links follow that page. Facebook, Instagram, Threads and X addresses were confirmed as links on that page; destination platform content was not independently verified.
- The reference links to https://digikidult.github.io/Anode-Cathode-Ver-Zero/index-zh-TW.html#features as separate gameplay-patch information. This is linked only as information, not an IPS download or a Cantonese release.

## Design and accessibility

Restyled to match the supplied existing DigiKidult guide page; original placeholder illustrations are retained without copying game artwork. Hong Kong Traditional Chinese primary language, English technical labels. Keyboard-operable filters and hash navigation, visible focus, skip link, responsive one-to-three-column cards, reduced-motion support. Original LCD/handheld illustrations are conceptual, not official WonderSwan branding assets. Site is unofficial and unaffiliated with Bandai.

## Confirmed full catalogue

`catalog.json` stores the 14 owner-approved game names, aliases, development statuses and enhancement indicators. After editing it, run `node update-catalog.cjs` from this folder to regenerate the static, accessible table in `index.html`. The generated table works without JavaScript. Status totals: completed 2, developing 4, not started 6, no plans 2. These are owner-supplied project statuses, not public patch release claims. The existing three detailed translation cards remain a separate featured section. A dash in enhancement data means unspecified, not No. The Veedramon alias uses 英文版 rather than 美版. Update hero statistics when catalogue totals change.

The approved hero reads: 重遊WS數碼世界 / 不一樣香港演譯.


## Original game covers

All 14 catalogue entries and the three featured/detail project images now use original box covers. Local files live in assets/covers; catalog.json stores their paths. COVER-SOURCES.json records retrieval provenance for maintenance. No source credit text is displayed on the page, as requested. Covers are shown uncropped in full colour; these are original game editions, not Cantonese patch packaging.

All 14 catalogue items now have project/# hash routes, cover cards and detail sections. Unknown descriptions and version histories are marked pending. The supplied XLSX/CSV editorial form uses stable IDs. Return a completed file to update the site; editing the spreadsheet does not automatically publish or modify the website.


Owner-filled workbook imported on 2026-10-27: all 14 records matched by stable ID. Added translation scope, enhancement descriptions, testing, known issues and release preparation status. Current Anode version is Ver. TBB v1a and Cathode version is Ver. TBB v1c; both content-final pending UAT. No public release URLs were supplied, and no download was enabled. The older r8 wording was reconciled to the current version.

