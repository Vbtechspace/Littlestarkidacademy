# Little Star Kid Academy — Abacus Practice App

A single self-contained web page (`index.html`) with an interactive soroban
(Japanese abacus): Explore, Read It, Build It, Quick Math practice modes,
plus an "Assign" tab teachers can use to create practice-set links for
students. No build step, no server, no dependencies to install — it's one
HTML file with everything (styles, script, and the Little Star Kid Academy
logo) embedded inside it.

## Host it on GitHub Pages (free, a few minutes)

1. Create a new repository on GitHub (e.g. `little-star-abacus`).
2. Upload `index.html` from this ZIP to the root of that repository
   (via "Add file → Upload files" on the repo's GitHub page, or `git push`
   if you're using the command line).
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to **Deploy from a branch**,
   pick the **main** branch and the **/ (root)** folder, then click **Save**.
5. GitHub will give you a live URL, usually:
   `https://<your-github-username>.github.io/<repository-name>/`
   It can take a minute or two to go live the first time.

That's it — no other setup is needed. The page works entirely in the
visitor's browser.

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
