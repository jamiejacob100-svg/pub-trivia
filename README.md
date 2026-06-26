# 🍺 Sydney Pub Crawl Trivia

An interactive map of **560+ Sydney pubs & bars** — tap a marker, answer that pub's trivia round, and clear the map. Play solo, in **teams**, or tackle a themed **Pub Crawl** where pubs unlock one at a time.

**▶️ Play it live:** https://jamiejacob100-svg.github.io/pub-trivia/

## How it works
- A full-screen map of Sydney drops a 🍺 pin on each pub. By default nearby pins **cluster** into numbered bubbles; tap **⦿ Clustered / ⦿ All pins** in the top bar to switch to showing **every pin individually**, even zoomed out (your choice is remembered).
- Click a pin → a popup shows the **pub name**, its **trivia topic**, and a **Start Quiz** button.
- Each round is **10 questions** with an optional **per-question timer** (Off / 15 / 20 / 30s).
- Clear a pub and its pin turns into a ✅. Progress shows in the top bar.

## 🎮 Live multiplayer (Kahoot-style)
Tap **🎮 Live** in the menu bar to **Host** or **Join** a game across separate phones:
- **Host** picks a topic, question count and timer, and gets a **6-digit PIN**. The host screen shows the question, a live answer tally, a countdown, and a leaderboard between rounds.
- **Players** open the same site → **🎮 Live → Join**, enter the PIN and a nickname, and answer on their own phones with Kahoot-style coloured buttons. **Faster correct answers score more** (up to 1000 pts).

### One-time setup (required for Live mode only)
Live mode needs a free **Firebase Realtime Database** (the rest of the app works without it). Open `firebase-config.js` for step-by-step instructions:
1. Create a free project at [console.firebase.google.com](https://console.firebase.google.com).
2. **Build → Realtime Database → Create Database** → start in **Test mode**.
3. **Project settings → Your apps → Web** → copy the config values.
4. Paste them into `firebase-config.js`, then `git commit` & `git push`.

Until configured, the **Live** button shows these setup steps and everything else keeps working.

## 👥 Team mode
Hit **Teams** to add up to 6 teams and pass the device around. Each round you finish is scored to whoever's turn it is, then play passes to the next team. The top bar shows whose turn it is, and **Scores** opens a live leaderboard.

## 📷 Camera & Photos
Every pub popup has a **📷 Camera** button — open the in-app camera, snap photos while you're there, and they're saved against that pub's name. The **Photos** tab in the menu bar shows the whole night's gallery grouped by pub; tap any shot to view, save, or delete it. At the end of the night, **⬇ Download All Photos (ZIP)** bundles everything into a single zip with a folder per pub. Photos are stored locally in your browser (IndexedDB), so they persist through refreshes and last all night. On devices without a camera, an upload option lets you add pictures from the gallery instead. *(The live camera needs HTTPS — which GitHub Pages provides — plus camera permission.)*

## ⛳ Pub Golf mode
Play **Pub Golf** (rules from the Last Night of Freedom pack): **9 pubs = 9 holes**, each with a drink and a **par** (swigs to finish). Sink it in par or fewer; every extra gulp adds a stroke. Penalty strokes for mishaps (spilled drink +1, missed pub +2, fell over +3, caught cheating +5). **Lowest total wins.** Trivia is intertwined — answer the hole's bar-trivia correctly for a **birdie boost (−1 stroke)**. Pick a 9-hole course on the map, add players, and there's a **soft-drink / water option** that scores identically. Please drink responsibly.

## The pubs
- **12 featured pubs** — hand-curated with themed topics, blurbs, and used in the crawl routes.
- **530 more** pulled live from [OpenStreetMap](https://www.openstreetmap.org/) with real, community-mapped coordinates, spanning The Rocks to Newtown, Manly, Coogee, Balmain and beyond.

## 🗺️ Crawl Planner (customiser)
Open **🍻 Pub Crawl → Build your own crawl** to plan a route in advance: tap pubs on the map to add them in order. The planner draws a numbered path and shows the **total walking distance and time**. You can reorder or remove stops, and then:
- **Start This Crawl** — play your custom route through the normal crawl engine (pubs unlock in order, trivia, etc.).
- **💾 Save** — give the crawl a custom name (e.g. "Friday Rocks crawl") and keep it for future use. Saved crawls appear in the **🍻 Pub Crawl** menu, where you can start, ✏️ edit, or 🗑 delete each one.
- **🔗 Share** — copies a link that opens your exact planned route on anyone's device (great for organising a group).
- The in-progress plan also auto-saves, so you can come back to it later.

## 🏠 Fridge to Fridge mode
A BYO crawl between people's homes instead of pubs. Open **🍻 Pub Crawl → Fridge to Fridge**, then **search an address** (powered by OpenStreetMap, biased to Sydney) to drop a home precisely, or **tap anywhere on the map** to place one by hand (name each one). Build the route in order with walking distance/time, reorder/remove/rename stops, then **Start This Crawl** to play it with trivia at each home (each gets a random topic). Fridge crawls can be **saved with a name** and reappear in the Pub Crawl menu to start, edit, or delete. Saved locally on the device.

## 🧭 Directions (walking or driving)
Pub crawls and fridge crawls now draw the **real road route** between stops (not straight lines), with a **🚶 Walk / 🚗 Drive** toggle that shows the **total distance and time** for that mode. Tap **🧭 Directions** to see **turn-by-turn instructions** for each leg. Powered by the free OpenStreetMap-based Valhalla routing service; if it's unavailable it falls back to a straight-line estimate (marked "approx").

**Navigate on the night:** the Directions panel can open the whole route in **Google Maps** or **Apple Maps**, and each leg has a **Navigate ▶** button that opens turn-by-turn GPS navigation from your *current location* to the next stop. During a crawl, each pub's popup also has a **🧭 Navigate here** button.

## 🍻 Pub Crawl mode
Pick a preset route — or your own custom plan — and the pubs unlock in order; clear each round to reach the next pub (🔒 = locked). Preset routes:
- 🪨 **The Rocks Historic Crawl** — 8 pubs
- 🏙️ **CBD After-Work Circuit** — 4 pubs
- 🌆 **Surry Hills & Darlo** — 8 pubs
- 🚋 **Inner West Wander** — 6 pubs (Chippendale, Newtown, Glebe, Balmain)
- 🌊 **Harbourside & Beaches** — 6 pubs (Pyrmont, the 'Loo, Manly, Coogee)
- 🏆 **The Full Sydney Marathon** — all 32 pubs

## The pubs
Curated from the [publocation.com.au Sydney list](https://publocation.com.au/pubs/nsw/sydney), each placed at its real location across The Rocks, the CBD, Surry Hills, Darlinghurst, Woolloomooloo, Pyrmont, Chippendale, Newtown, Glebe, Balmain, Paddington, Manly and Coogee.

## Topics & difficulty
12 topics, each with **18 questions ordered easy → hard**: Australian History, Sydney & Landmarks, Music, World Geography, Science & Space, Food & Drink, General Knowledge, Beer/Wine & Cocktails, Arts & Literature, Sport, Animals & Wildlife, Film & TV.

- **Progressive difficulty** — in Pub Crawl and Pub Golf, the questions get harder at each successive pub/hole (early stops draw the easy questions, later stops the hard ones).
- **Fresh questions per team** — each pub remembers which questions it has already served, so team 1, team 2 and team 3 each get a completely different set at the same pub (and "Play Again" always serves new questions). The bank recycles only once a pub's whole set is exhausted.

## Tech
- Single `index.html`, no build step.
- [Leaflet](https://leafletjs.com/) + CARTO/OpenStreetMap dark tiles (no API key).
- Served as a static site via GitHub Pages.

## Run locally
Open `index.html` in any browser (needs internet for the map tiles).
