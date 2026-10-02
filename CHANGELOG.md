# Changelog — Little Star Abacus

This file tracks the major milestones of the app so far. Git history in this
folder starts today (see note at the bottom for why), but this changelog
covers everything built before that too, so you have a full record either way.

## 2026-09-30 — Quote widened and enlarged
- Moved the header quote out from beside the logo into its own full-width
  line below the header, matching the width of the Timed/Oral tabs and
  skill-tab strip beneath it, and increased its font size so it reads
  clearly instead of being squeezed into the narrow title column.

## 2026-09-30 — Header layout cleanup
- Aligned the logo and menu/mute buttons to the top of the header instead of
  centering them against the full height of the (now taller, 3-line) title
  block, so the logo sits neatly beside "Little Star Kid Academy" instead of
  floating lower, next to the quote. Shrank the logo slightly (38px → 32px)
  to keep the header compact and balanced.

## 2026-09-30 — Header quote, removed top video link
- Removed the "▶ Watch a 30-second how-to video" link from the install tip
  banner at the top of the app (the rest of that banner — the Android/iPhone
  install steps and its close button — is unchanged). The "Watch install
  video" option in the menu still opens the same install-tutorial screen, so
  that video is still reachable, just not from the top banner.
- Added a quote under the app name/subtitle in the header: "Learning never
  exhausts the mind. Life is a cycle of learning, unlearning & relearning."
  — Leonardo da Vinci.

## 2026-09-29 — Freemium paywall re-added (Addition / Subtraction / Mix aware)
- Brought back the freemium/member paywall that was removed earlier the same
  day, rebuilt to match the new skill list: free visitors can practice every
  skill — Addition, Subtraction, Mix, Multiply, Divide, Square, Square Root,
  Percentage, Mean, Decimals — in both Timed and Oral modes, but only at
  single-digit difficulty.
- Logging in with the shared member username/password unlocks every digit
  level (2-4 digits depending on the skill) on all ten skills. Login persists
  on that device via local storage, and logging out re-locks it.
- The lock banner and locked dropdowns clearly mark what needs a login, and
  the login modal has a green "Contact us on WhatsApp to purchase full
  access" button that opens a pre-filled WhatsApp chat to the teacher.
- The Assign (teacher) tool stays fully open for everyone regardless of
  login status, same as before.
- Note: this is a shared username/password baked into the page, not real
  per-customer accounts — anyone who has the credentials can log in from any
  device, and the credentials are visible to anyone who inspects the page
  source. It's a simple gate to encourage purchases, not a secure paywall.

## 2026-09-29 — Addition / Subtraction / Mix split, rows up to 100, paywall removed
- Split the old combined "Add/Subtract" tab (with its Sums Type dropdown) into
  three separate skill tabs: Addition, Subtraction, and Mix (a random blend of
  both). Each has its own No of Digits (1-4) and No of Rows (2-100) settings,
  for both Timed and Oral practice.
- Raised "No of Rows" from a max of 5 to a max of 100 for these three skills,
  to support long continuous add/subtract drills.
- Fixed a correctness bug found while testing the rows-to-100 change: pure
  Subtraction problems could silently show a "+" sign partway through (a
  safety clamp meant only for the Mix skill was also affecting Subtraction).
  Subtraction now builds its starting number to comfortably cover everything
  being subtracted, so every row is a genuine subtraction and results never
  go negative.
- The on-screen problem now wraps and shrinks for long prompts (50-100 rows)
  instead of overflowing.
- Removed the freemium paywall (member login, single-digit lock on free
  visitors, and the WhatsApp-contact button that lived inside that login
  modal) at the user's request — every skill and digit level is open to all
  visitors again. The Instagram reel, home-screen footer (address/copyright),
  and the Assign tool's own WhatsApp results button are unaffected.

## 2026-09-29 — Freemium paywall, WhatsApp button, home footer
- Added a freemium/member paywall: free visitors can practice every skill in
  both Timed and Oral modes, but only at single-digit difficulty. Logging in
  with a shared member username/password unlocks all digit levels (2–4
  digits depending on skill) on every skill. Login persists on that device
  via local storage. The Assign (teacher) tool stays fully open for everyone
  regardless of login status.
- Added a green "Contact us on WhatsApp to purchase full access" button to
  the login modal, opening a pre-filled WhatsApp chat to the teacher's number.
- Added a footer to the bottom of the home/Practice screen: the Instagram
  install-tutorial reel (attempted autoplay), the studio address, and a
  copyright line. This footer only shows on the Practice screen, not during
  an active session or on History/High Scores/Statistics/Assign.

## 2026-09-28 — Instagram install-tutorial reel
- Added an "Install as an app" screen (opened from the menu or the install
  tip banner) embedding the Instagram reel that walks through installing the
  app to a phone's home screen, with a fallback link to watch it directly on
  Instagram.

## 2026-09-28 — Full rebuild to match reference app
- Replaced the earlier bead-clicking soroban app entirely with a numbers-only
  practice configurator modeled on a reference "Abacus Practice" app the
  user shared screenshots of.
- Two practice types (Timed, Oral) across 8 skills (Add/Subtract, Multiply,
  Divide, Square, Square Root, Percentage, Mean, Decimals), each with its own
  digit/row/count config fields.
- Oral practice speaks each problem aloud via the browser's text-to-speech.
- Kept and carried forward the teacher "Assign" tool (shareable practice
  links, WhatsApp results delivery) and added High Scores / Statistics /
  History screens.
- Applied Little Star Kid Academy's real logo, name, and brand colors
  throughout, with light/dark theme support.

## Earlier — original bead-abacus app + Training drills
- The very first version of this app was a clickable bead-and-rod soroban
  simulator, later extended with a "Training" tab of 10 type-the-answer math
  drills. This was fully replaced by the 2026-09-28 rebuild above and no
  longer exists in the current code.

---

**Why git history starts today:** earlier versions of `index.html` were
edited in place rather than saved as separate snapshots, so their exact old
content isn't available to reconstruct byte-for-byte into past commits. From
this commit forward, every future change will get its own git commit, so
you'll have real, restorable history going forward. The `git log` in this
repo is your backup mechanism from here on — commit after every change (or
ask Claude to do it) and you'll always be able to roll back.
