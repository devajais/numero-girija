# Numero Girija - Lo Shu Grid Numerology

A beautiful, mobile-first web application for Lo Shu Grid Numerology analysis by Girija Sharma.

🔗 **Live Site**: [https://devajais.github.io/numero-girija/](https://devajais.github.io/numero-girija/)

## ✨ Features

- **Lo Shu Grid Calculator**: Calculate your personal Lo Shu Grid based on birth date
- **Driver & Conductor Numbers**: Automatic calculation of key numerological numbers
- **2026 Predictions**: Monthly forecasts for 2026 based on your personal year
- **Custom Predictions**: Select any month and year for personalized predictions
- **Present & Missing Numbers**: Detailed analysis of energies in your chart
- **Calculation Explanations**: See exactly how your grid was created
- **Mobile-First Design**: Beautiful purple gradient UI optimized for phone screens
- **Single Page App**: Smooth navigation with bottom tab bar
- **PWA Support**: Install as an app on your phone (Add to Home Screen)
- **Offline Support**: Works offline after first visit with service worker
- **Custom App Icon**: Lo Shu Grid themed icon for your home screen

## 🚀 Commands

All commands are run from the root of the project:

| Command | Action |
| :-- | :-- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 📱 Installing as a PWA

### On iPhone/iPad:
1. Open https://devajais.github.io/numero-girija/ in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right
5. The app will appear on your home screen with a custom icon

### On Android:
1. Open https://devajais.github.io/numero-girija/ in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home screen" or "Install app"
4. Confirm by tapping "Add"
5. The app will appear on your home screen

### Desktop (Chrome/Edge):
1. Visit the site and look for the install icon in the address bar
2. Click "Install" when prompted
3. The app will open in its own window

## 📦 Deployment

### Automatic Deployment (GitHub Actions)

Every push to the `main` branch automatically triggers a GitHub Actions workflow that builds and deploys the site to GitHub Pages.

### Manual Deployment

You can also manually deploy using:

```bash
npm run deploy
```

This will:
1. Build the production site
2. Deploy to the `gh-pages` branch
3. Update the live site at https://devajais.github.io/numero-girija/

## 🛠️ Tech Stack

- **Framework**: Astro 5.16.8
- **Styling**: CSS with custom gradients
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📱 Features by Section

### Grid Tab
- Interactive Lo Shu Grid visualization
- Driver and Conductor number display
- Calculation breakdown showing how numbers were derived
- Present numbers with planetary associations
- Missing numbers analysis

### 2026 Predictions Tab
- Universal Year calculation
- Personal Year forecast
- Monthly predictions with current month highlighted

### Analysis Tab
- All 12 months of 2026 with detailed forecasts
- Custom month/year prediction selector (2026-2030)
- Visual hierarchy with color-coded cards

## 🎨 Design Features

- Purple gradient theme (#2d1b69, #6b3fa0, #8b5fbf)
- Mobile-optimized with sticky header and bottom navigation
- Smooth animations and hover effects
- High contrast for accessibility
- Touch-friendly interface

## 📄 License

© 2026 Girija Sharma • Ancient Wisdom for Modern Living

## 🔧 Configuration

The site is configured for GitHub Pages deployment with:
- Site URL: `https://devajais.github.io`
- Base path: `/numero-girija`

To use with a different repository, update `astro.config.mjs`:

```js
export default defineConfig({
    site: 'https://your-username.github.io',
    base: '/your-repo-name',
    // ...
});
```
