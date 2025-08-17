# Quarterly Earnings — RevealJS Deck

Interactive presentation built with [RevealJS](https://revealjs.com).

**Includes:**
- Markdown slide
- Fragments (animations)
- Code with syntax highlighting
- Financial math (KaTeX via RevealMath)
- Speaker notes
- Tiny D3 demo
- Email shown: `24f1000823@ds.study.iitm.ac.in`

## Quick Preview
```bash
# Option A: simple preview (requires Node)
npm install
npm run start
# open http://localhost:8000/index.html
```

## Publish to GitHub Pages (recommended)
### 1) Create a new repo on GitHub called `earnings-deck`
### 2) Push files
```bash
git init
git add .
git commit -m "Initial commit: earnings deck"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/earnings-deck.git
git push -u origin main
```

### 3) Enable Pages with GitHub Actions
In your repo, go to **Settings → Pages** and set:
- **Source:** GitHub Actions

The included workflow will build and deploy automatically on each push to `main`.

### 4) Your URL
`https://YOUR_USERNAME.github.io/earnings-deck/`

To bypass cache on updates, append `?v=1`, `?v=2`, etc.

---

## Keyboard Shortcuts
- **S**: Speaker notes
- **O/ESC**: Overview
- **F**: Fullscreen
- **.** or **B**: Pause (blank/black)
