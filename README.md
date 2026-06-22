# 🍺 Sydney Pub Crawl Trivia

An interactive map of Sydney pubs — tap a marker, answer that pub's trivia round, and clear the whole map.

**▶️ Play it live:** https://jamiejacob100-svg.github.io/pub-trivia/

## How it works
- A full-screen map of Sydney drops a 🍺 pin on each pub.
- Click a pin → a popup shows the **pub name**, its **trivia topic**, and a **Start Quiz** button.
- Each pub has its own distinct topic, often themed to the venue.
- Clear a pub and its pin turns into a ✅. Progress shows in the top bar.

## The pubs & their topics
Curated from the [publocation.com.au Sydney list](https://publocation.com.au/pubs/nsw/sydney), each placed at its real location:

| Pub | Area | Topic |
|-----|------|-------|
| Lord Nelson Brewery Hotel | Millers Point | Australian History |
| Harbour View Hotel | Dawes Point | Sydney & Landmarks |
| Mercantile Hotel | The Rocks | Music |
| The Glenmore | The Rocks | World Geography |
| Observer Hotel | The Rocks | Science & Space |
| Establishment Hotel | CBD | Food & Drink |
| GPO Sydney | Martin Place | General Knowledge |
| The Baxter Inn | Clarence St | Beer, Wine & Cocktails |
| Marble Bar (Sydney Hilton) | George St | Arts & Literature |
| Strawberry Hills Hotel | Surry Hills | Sport |
| The Dolphin Hotel | Surry Hills | Animals & Wildlife |
| The Oxford Hotel | Darlinghurst | Film & TV |

## Tech
- Single `index.html`, no build step.
- [Leaflet](https://leafletjs.com/) + CARTO/OpenStreetMap dark tiles (no API key).
- Served as a static site via GitHub Pages.

## Run locally
Open `index.html` in any browser (needs internet for the map tiles).
