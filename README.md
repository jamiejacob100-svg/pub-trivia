# 🍺 Sydney Pub Crawl Trivia

An interactive map of **32 Sydney pubs** — tap a marker, answer that pub's trivia round, and clear the map. Or enter **Pub Crawl mode** and tackle a themed route where pubs unlock one at a time.

**▶️ Play it live:** https://jamiejacob100-svg.github.io/pub-trivia/

## How it works
- A full-screen map of Sydney drops a 🍺 pin on each pub.
- Click a pin → a popup shows the **pub name**, its **trivia topic**, and a **Start Quiz** button.
- Each round is **10 questions** with an optional **per-question timer** (Off / 15 / 20 / 30s).
- Clear a pub and its pin turns into a ✅. Progress shows in the top bar.

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
