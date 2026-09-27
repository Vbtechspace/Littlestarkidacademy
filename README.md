# Little Star Kid Academy — Abacus Practice App

An interactive soroban (Japanese abacus): Explore, Read It, Build It, Quick
Math practice modes, plus an "Assign" tab teachers can use to create
practice-set links for students. No build step, no server, nothing to
install — `index.html` is one file with everything (styles, script, the
Little Star Kid Academy logo) embedded inside it. It also installs as a
home-screen app on phones (see below), using the other small files
included in this ZIP (`manifest.json`, `sw.js`, and the icon PNGs).

## Host it on GitHub Pages (free, a few minutes)

1. Create a new repository on GitHub (e.g. `little-star-abacus`).
2. **Upload every file in this ZIP to the root of that repository — all
   in one upload, all loose, no folders.** On the repo's GitHub page:
   "Add file → Upload files", then drag in all 8 files at once
   (`index.html`, `manifest.json`, `sw.js`, `README.md`, and the 4 `.png`
   icon files). They must all sit side-by-side at the top level of the
   repo — not inside any subfolder. `git push` works too if you use the
   command line.
   - If you'd already uploaded an earlier version with an `icons/`
     subfolder, delete that folder from the repo first (open it, delete
     each file inside, or use "..." → Delete on the folder) so there's no
     confusion between the old and new icon paths.
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to **Deploy from a branch**,
   pick the **main** branch and the **/ (root)** folder, then click **Save**.
5. GitHub will give you a live URL, usually:
   `https://<your-github-username>.github.io/<repository-name>/`
   It can take a minute or two to go live the first time.

That's it — no other setup is needed. The page works entirely in the
visitor's browser.

## Making it feel like a real app, not a website

Opening the link in Chrome will always show the address bar and tabs —
that's just how any website looks in a browser, not something to fix. To
get the full "app" feel (its own icon, opens full-screen, no address bar):

**On Android (Chrome):** open the site → tap the **⋮** menu → **"Add to
Home screen"** / **"Install app"** → confirm. It now sits on the home
screen with the Little Star icon and opens full-screen, like any other app.

**On iPhone (Safari):** open the site → tap the **Share** icon → **"Add to
Home Screen"** → confirm.

This works because of the `manifest.json` and icon files included here —
without them the shortcut still works, it just won't get a proper icon or
full-screen mode.

## Using it with students

- Open the **Assign** tab, pick a practice type, level, and number of
  problems, then tap **Create practice set link**.
- Share that link with a student (WhatsApp, email, anything). Opening it
  always plays the exact same set of problems.
- When the student finishes, they tap **Send my results on WhatsApp**,
  which opens WhatsApp with their score pre-filled to send to you.

## Notes

- The WhatsApp number is set inside `index.html` (search for
  `TEACHER_WHATSAPP`) if you ever need to change it.
- Because the page is a single file, updating it later is simple: replace
  `index.html` in the repository with a new version and GitHub Pages
  updates automatically within a minute or two.
