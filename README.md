# Didi Wedding Website

Single-page wedding website built with React + TypeScript and designed for both mobile and laptop screens.

## Setup

1. Install dependencies:
   - `npm install`
2. Create `.env` from `.env.example` and add your Google Form link.
3. Run locally:
   - `npm run dev`

## Dynamic Wedding Functions

All wedding functions are configured in:

- `src/data/events.ts`

Add/remove event objects there and the UI updates automatically.

## Guest Details (Google Form)

Guest responses are collected with an embedded Google Form. No email service or backend is required.

### Create the form

1. Go to [Google Forms](https://forms.google.com) and create a new form.
2. Add questions that match what you need, for example:
   - Guest Name (short answer, required)
   - Phone (short answer)
   - Email (short answer)
   - Number of Attendees (short answer or number, required)
   - Event (dropdown — use the same titles as in `src/data/events.ts`)
   - Message (paragraph, optional)
3. Open the **Responses** tab → click the Sheets icon to **Link to Sheets**. All submissions will appear in that spreadsheet.
4. To get Excel: open the linked Google Sheet → **File → Download → Microsoft Excel (.xlsx)**.

### Connect the form to the website

1. In the form, click **Send** → **Link** and copy the form URL  
   (or use **Send → Embed** and copy the `src` from the iframe).
2. Paste the URL into `.env`:
   ```
   VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
   ```
3. Restart `npm run dev` so Vite picks up the new env value.

## Deploy to GitHub Pages

Your repo: `https://github.com/pakya-1909/didi-wedding`  
Live site (after deploy): `https://pakya-1909.github.io/didi-wedding/`

### One-time GitHub setup

1. Push all project files to the `main` branch (see commands below).
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

After that, every push to `main` rebuilds and publishes the site automatically.

### Push your code (first time)

From the `didi-wedding` folder:

```bash
git add .
git commit -m "Add wedding website"
git push origin main
```

Wait 1–2 minutes, then open **Actions** in the repo to confirm the “Deploy to GitHub Pages” workflow succeeded.

### Manual deploy (optional)

If you prefer deploying from your laptop instead of GitHub Actions:

```bash
npm run deploy
```

Then in **Settings → Pages**, set **Source** to branch `gh-pages` / folder `/ (root)`.

The Google Form URL for production builds is in `.env.production` (safe to commit — it is already a public form link).
