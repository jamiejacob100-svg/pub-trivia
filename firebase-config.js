/* ============================================================
   FIREBASE CONFIG — needed only for "🎮 Live" multiplayer mode.
   Everything else in the app works without this.

   SETUP (one-time, ~5 min, free, no credit card):
   1. Go to https://console.firebase.google.com and "Add project".
   2. In the project, open "Build → Realtime Database" → "Create Database".
      - Pick a location, then choose "Start in TEST MODE" (allows read/write).
   3. Open "Project settings (gear) → General → Your apps → Web (</>)".
      Register an app, then copy the `firebaseConfig` values it shows you.
   4. Paste those values below (keep the quotes), save, and redeploy
      (git add firebase-config.js && git commit && git push).

   NOTE: these web values are safe to commit — Firebase security is
   enforced by Database Rules, not by hiding this config.
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://PASTE_YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "PASTE_YOUR_PROJECT",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
