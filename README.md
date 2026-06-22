# 🍺 Sydney Pub Crawl Trivia

An interactive map of **560+ Sydney pubs & bars** — tap a marker, answer that pub's trivia round, and clear the map. Play solo, in **teams**, or tackle a themed **Pub Crawl** where pubs unlock one at a time.

**▶️ Play it live:** https://jamiejacob100-svg.github.io/pub-trivia/

## How it works
- A full-screen map of Sydney drops a 🍺 pin on each pub (clustered for clarity — zoom in to split them out).
- Click a pin → a popup shows the **pub name**, its **trivia topic**, and a **Start Quiz** button.
- Each round is **10 questions** with an optional **per-question timer** (Off / 15 / 20 / 30s).
- Clear a pub and its pin turns into a ✅. Progress shows in the top bar.

## 👥 Team mode
Hit **Teams** to add up to 6 teams and pass the device around. Each round you finish is scored to whoever's turn it is, then play passes to the next team. The top bar shows whose turn it is, and **Scores** opens a live leaderboard.

## 📷 Camera & Photos
Every pub popup has a **📷 Camera** button — open the in-app camera, snap photos while you're there, and they're saved against that pub's name. The **Photos** tab in the menu bar shows the whole night's gallery grouped by pub; tap any shot to view, save, or delete it. At the end of the night, **⬇ Download All Photos (ZIP)** bundles everything into a single zip with a folder per pub. Photos are stored locally in your browser (IndexedDB), so they persist through refreshes and last all night. On devices without a camera, an upload option lets you add pictures from the gallery instead. *(The live camera needs HTTPS — which GitHub Pages provides — plus camera permission.)*

## ⛳ Pub Golf mode
Play **Pub Golf** (rules from the Last Night of Freedom pack): **9 pubs = 9 holes**, each with a drink and a **par** (swigs to finish). Sink it in par or fewer; every extra gulp adds a stroke. Penalty strokes for mishaps (spilled drink +1, missed pub +2, fell over +3, caught cheating +5). **Lowest total wins.** Trivia is intertwined — answer the hole's bar-trivia correctly for a **birdie boost (−1 stroke)**. Pick a 9-hole course on the map, add players, and there's a **soft-drink / water option** that scores identically. Please drink responsibly.

## The pubs
- **12 featured pubs** — hand-curated with themed topics, blurbs, and used in the crawl routes.
- **530 more** pulled live from [OpenStreetMap](https://www.openstreetmap.org/) with real, community-mapped coordinates, spanning The Rocks to Newtown, Manly, Coogee, Balmain and beyond.

## 🍻 Pub Crawl mode
Pick a route and the pubs unlock in order — clear each round to reach the next pub (🔒 = locked). Routes:
- 🪨 **The Rocks Historic Crawl** — 8 pubs
- 🏙️ **CBD After-Work Circuit** — 4 pubs
- 🌆 **Surry Hills & Darlo** — 8 pubs
- 🚋 **Inner West Wander** — 6 pubs (Chippendale, Newtown, Glebe, Balmain)
- 🌊 **Harbourside & Beaches** — 6 pubs (Pyrmont, the 'Loo, Manly, Coogee)
- 🏆 **The Full Sydney Marathon** — all 32 pubs

## The pubs
Curated from the [publocation.com.au Sydney list](https://publocation.com.au/pubs/nsw/sydney), each placed at its real location across The Rocks, the CBD, Surry Hills, Darlinghurst, Woolloomooloo, Pyrmont, Chippendale, Newtown, Glebe, Balmain, Paddington, Manly and Coogee.

## Topics
12 topics, each with 12 questions (shuffled per game): Australian History, Sydney & Landmarks, Music, World Geography, Science & Space, Food & Drink, General Knowledge, Beer/Wine & Cocktails, Arts & Literature, Sport, Animals & Wildlife, Film & TV.

## Tech
- Single `index.html`, no build step.
- [Leaflet](https://leafletjs.com/) + CARTO/OpenStreetMap dark tiles (no API key).
- Served as a static site via GitHub Pages.

## Run locally
Open `index.html` in any browser (needs internet for the map tiles).
