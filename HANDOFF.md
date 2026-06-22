# Glen's Garden — Project Handoff

A mobile-first, clickable garden tour. Tap a section on a photo to enter it, tap a plant to read its profile. Static site, no build step, hosted on GitHub Pages.

- **Live:** https://glenmichaelblair.github.io/garden/
- **Repo:** https://github.com/glenmichaelblair/garden
- **Calibration tool:** https://glenmichaelblair.github.io/garden/calibrate.html

This doc is a self-contained summary so a fresh session (or a new machine) can pick up with full context. Nothing here is secret.

---

## Files

| File | Role |
|------|------|
| `index.html` | Landing page — backyard hero photo with labeled zone dots + a Front Yard dropdown |
| `zone.html` | Zone view — overview photo with hotspots, plant list, and a slide-up plant drawer |
| `plant.html` | Plant profile — photos, status, highlights, garden notes, care, fun fact |
| `app.js` | Shared helpers: `loadGardenData`, `getZone`, `getPlant`, `getParam`, `statusBadge`, `DEV_MODE` |
| `photo-config.js` | Maps photo filename → Google Drive file ID; `getPhotoUrl()` builds the image URL |
| `style.css` | All styles |
| `garden-data.json` | **All content + all hotspot coordinates** — the single source of truth |
| `calibrate.html` | Visual tool for positioning/rotating every hotspot (see below) |

No framework, no bundler. Edit a file, commit, push — GitHub Pages serves it.

---

## Data model (`garden-data.json`)

Top level: `{ "zones": [ ... ] }`.

**Zone fields:**
- `id`, `slug`, `name`, `description`, `overview_photo`, `plants[]` (always present)
- `landing_hotspot {x,y}` — if present, this zone gets a labeled dot on the landing hero (backyard zones)
- `landing_label` — overrides the landing dot's text (e.g. Zone 05 shows "Thailand and Tomatoes" but is named "Thailand Bed")
- `front_yard` / `front_yard_order` — front-yard zones; shown in the Front Yard dropdown and get a lateral prev/next nav bar
- `parent` — a zone id; this zone is a sub-zone, and its back-link returns to the parent hub
- `sub_zones[]` — `{ name, target (zone id), hotspot {x,y} }`; turns a zone into a hub (see Terracotta)
- `nav_hotspots[]` — links to other sections (see below)

**Plant fields:**
- `id`, `name`, `status`, `photos[]`, `hotspot {x,y}`, `highlights[]`, `care_notes[]`, `personal_notes`, `fun_fact`
- `nickname` (optional) — shown in the profile's stats line (e.g. Palo Verde = "Paola")
- A plant with **no `hotspot`** still appears in the list, just without a dot on the photo (e.g. `marigold-c` in Zone 07).

**`nav_hotspots[]` entry:**
- `target` — destination zone id
- `hotspot {x,y}` — position (percent)
- `style: "dot"` — renders a simple labeled dot. **Omit** `style` for the default **arrow**.
- `angle` — arrows only: rotation in degrees. **0 = right, 90 = down, 180 = left, 270 = up.**
- `label` (optional) — overrides the link text (defaults to the destination zone's name)

All coordinates are **percent of the natural image** (`x` from left, `y` from top), applied with `transform: translate(-50%,-50%)`. Images are always `width:100%; height:auto` (never cropped) so percentages stay valid.

---

## Zone / navigation structure (current)

```
Landing (index.html) = backyard hero "01-full-garden-hero"
  ├─ dot → 04 Blueberry Corner
  ├─ dot → 05 Thailand Bed   (labeled "Thailand and Tomatoes")
  ├─ dot → 07 Basil Bed
  ├─ dot → 08 Terracotta Row (hub)
  └─ Front Yard ▾ dropdown (bottom-left) → 03 Street Garden, 02 Fruit Trees, 10 Nica's Succulents

Front-yard zones (02, 03, 10) also get a ← prev / next → bar across each other.

08 Terracotta Row is a HUB (zoomed-out photo) with area dots:
  ├─ 08a The Table        (8 herb/pepper pots)
  ├─ 08b Friends of Terracotta Row (jalapeño, sweet green pepper, toddler tomato, cucumber)
  └─ 08c Seedlings        (the nursery)
  (each sub-zone has parent:08, so its back-link returns to the hub)

Nav arrows / dots between sections:
  02 → 03 (arrow), 02 → 10 (arrow)
  05 → 08 (arrow), 05 → 04 (arrow), 05 → 06 (dot)
  07 → 04 (arrow), 07 → 08 (arrow)
  08 → 05 (arrow), 08 → 07 (arrow)
  08b → 06 (arrow), 08b → 07 (arrow)
```

- **Zone 03 (Street Garden):** the photo is oblique, so only Palo Verde + the **3 left-side shrubs** (rosemary, lavender, texas-sage) have hotspots. Each shrub profile holds **2 photos** (left + right specimen). The right-side trio is intentionally omitted.
- **Zone 10 (Nica's Succulents):** `plants: []` on purpose — care notes pending from Nica.

---

## Images (Google Drive)

- Photos live in a Google Drive folder; `photo-config.js` maps each filename to its Drive **file ID**.
- `getPhotoUrl()` builds `https://drive.google.com/thumbnail?id=FILE_ID&sz=w1200` (this pattern embeds reliably; the older `uc?export=view` one does not).
- **Swapping a photo without touching code:** in Drive, use **Manage versions** to upload a new version of the same file — the file ID stays the same, so the app picks it up automatically.
- A filename with no ID renders a gray "photo coming soon" placeholder.
- The Drive images are shared "anyone with the link," so the public site can load them.

---

## Calibration workflow (`calibrate.html`)

This is how every dot/arrow got positioned. Works great on a phone.

1. Open `/calibrate.html`. It shows **every image** with its hotspots as numbered, color-coded dots (landing / plant / area / nav).
2. **Position:** drag a dot, **or** tap a dot then tap the photo, **or** type into the X%/Y% boxes.
3. **Rotate (arrows only):** tap a nav arrow → a rotation dial appears in the header (← ↑ → ↓ buttons + slider + number box). The arrow spins live.
4. **Get changes out:** tap **📋 Copy coordinates** and paste the result to a Claude session — it applies them to `garden-data.json` with a script. Or **⬇ Download JSON** for the whole file.

Copy format (what you paste back):
```
landing 04 -> 38,63
plant 05 thai-basil-a -> 21,48
sub 08 #0 (The Table) -> 50,50
nav 05 08 -> 5,91 @135      ← arrows include @angle
nav 05 06 -> 12,68          ← dots have no angle
```

**Dev overlay:** add `?dev=1` to any zone URL (e.g. `zone.html?zone=05&dev=1`) to see hotspot labels in place.

---

## Running locally

Static site — but don't open `index.html` straight from Finder (the `fetch('garden-data.json')` call fails on `file://`). Serve it:

```
cd garden
python3 -m http.server
# then open http://localhost:8000
```

Or just keep using the live GitHub Pages URL.

---

## Not in this repo (machine-local)

- **`garden_log.py`** — a separate Google Sheets care-logger; untracked, so it won't clone. Copy it manually if you want it.
- **Google service-account credentials** (`~/.config/loudness_watcher/credentials.json`) — only needed for the Drive/Sheets helper scripts (e.g. fetching new Drive file IDs). The calibration loop does **not** need it. Move it securely (AirDrop, etc.), never through the public repo.

---

## Working on the road — new-machine setup

Everything needed to edit, preview, and ship this project from another Mac.

**1. Install the tools** (versions on the original machine, for reference: git 2.39, node v24, npm 11, python 3.9, gh 2.95, Claude Code 2.1):
- Xcode Command Line Tools — `xcode-select --install` (gives `git` and `python3`)
- Node.js v20+ — from nodejs.org or `brew install node` (needed by Claude Code and the JS check helper)
- Claude Code — `npm install -g @anthropic-ai/claude-code`
- GitHub CLI (optional but handy) — `brew install gh`

**2. Sign in — each login is per-machine, so you redo these on the laptop:**
- Claude Code: run `claude` and follow the prompt
- GitHub (required to push): `gh auth login` → GitHub.com → HTTPS → browser. (A Personal Access Token or SSH key works too.)
- Commit identity (if not set):
  ```
  git config --global user.name "Glen Blair"
  git config --global user.email "glenmichaelblair@gmail.com"
  ```
- Google Drive: just log in at drive.google.com in a browser (only needed for photo changes)

**3. Hand-carry these only if you'll run the Sheets/Drive helper scripts** (AirDrop them — keep them OUT of the public repo):
- `garden_log.py` (the Google Sheets care logger)
- `~/.config/loudness_watcher/credentials.json` (Google service-account key)

You do **not** need either of these to edit the app, change content, or calibrate hotspots.

**4. Add or swap a photo with just a browser + the repo** (no service account needed):
- *Replace* an existing photo: in Drive, open the file → **Manage versions** → upload new version. The file ID is unchanged, so nothing in the code changes.
- *Add* a new photo: upload to the Drive garden folder → Share → "Anyone with the link" → copy the link → the **file ID** is the long string between `/d/` and `/view` → paste it into `photo-config.js` under the matching filename.

**5. The edit → check → ship loop:**
```
python3 -m http.server                 # preview at http://localhost:8000
python3 -m json.tool garden-data.json >/dev/null   # validate JSON after data edits
git add -A && git commit -m "…" && git push        # live on the site in ~30s
```

---

## Open / optional items

- Hidden **"Calibrate" link** inside the app for easy phone access — not done yet.
- **Seedlings (08c)** is currently a tappable card; could become pure photo + text.
- Nav arrow labels use the **destination zone's name** (e.g. "Thailand Bed", not "Bed 1"). Custom labels are supported via the `label` field if you want different wording.
- **Zone 10 (Nica's)** awaiting care notes; add plant profiles when they arrive.
- **Zone 03** could get a straight-on parkway photo later to enable hotspots for all 7 shrubs.
