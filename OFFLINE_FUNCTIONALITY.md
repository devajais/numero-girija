# How Offline Functionality Works

## 🔄 Service Worker Strategy

The app uses a **Network First, Cache Fallback** strategy:

### 1. First Visit (Online) - Installation
```
User visits site → Service Worker installs → Caches core files:
  ✓ index.html (contains all CSS & JavaScript inline)
  ✓ icon.svg (app icon)
  ✓ manifest.json (PWA config)
```

### 2. Subsequent Visits (Online) - Dynamic Caching
```
User requests page → Try Network First → If successful:
  ✓ Serve fresh content from network
  ✓ Update cache with new version
  ✓ App stays up-to-date
```

### 3. Offline Mode - Cache Fallback
```
User requests page → Network fails → Check Cache:
  ✓ Found in cache? → Serve cached version
  ✓ Not found? → Serve index.html
  ✓ App works offline!
```

## 💡 Why This Works Well

### ✅ Single Page Application
- All navigation happens client-side (no page reloads)
- Switching between Grid/2026/Analysis tabs = just showing/hiding sections
- No additional HTML files to download

### ✅ Inline Resources
- **All CSS is inline** in the HTML (no external .css files)
- **All JavaScript is inline** in the HTML (no external .js files)
- **No external dependencies** (no CDN libraries)
- Once you have index.html, you have everything!

### ✅ Smart Caching
- Network First = Always get fresh content when online
- Cache Fallback = Still works when offline
- Auto-updates cache = No stale content

## 📊 What Gets Cached

### Core Cache (Installed immediately):
- `/numero-girija/` - Homepage
- `/numero-girija/index.html` - Main app
- `/numero-girija/icon.svg` - App icon
- `/numero-girija/manifest.json` - PWA config

### Runtime Cache (Cached as you use):
- Any pages you visit
- Any resources you load
- Automatically managed

## 🧪 Test Offline Mode

### Chrome DevTools:
1. Open DevTools (F12)
2. Go to "Application" tab
3. Click "Service Workers"
4. Check "Offline" checkbox
5. Refresh page - it still works!

### Mobile:
1. Visit the site while online
2. Turn on Airplane Mode
3. Try using the app - it works!

### Clear Cache:
1. DevTools → Application → Storage
2. Click "Clear site data"
3. Refresh - service worker reinstalls

## 🔧 Technical Details

### Cache Names:
- `numero-girija-v2` - Core resources
- `numero-girija-offline-v2` - Runtime cache

### Versioning:
- When you update the service worker version
- Old caches are automatically deleted
- New caches are created
- Users get fresh content

### Lifecycle:
```
Install → Activate → Fetch (repeat)
   ↓         ↓          ↓
 Cache   Cleanup    Serve
```

## 🚀 Benefits

1. **Instant Loading**: Cached content loads instantly
2. **Offline Access**: App works without internet
3. **Always Fresh**: Gets updates when online
4. **Battery Friendly**: Less network = better battery
5. **App-like Feel**: No loading spinners

## ⚠️ Limitations

- Girija Sharma's profile image won't load offline (if you add one)
- First visit requires internet connection
- Cache takes ~50KB of storage
- Service workers don't work in Private/Incognito mode

## 🔄 How to Update

When you deploy new code:
1. Change service worker version (`v2` → `v3`)
2. Deploy to GitHub Pages
3. Users automatically get update on next visit
4. Old cache is cleared
5. New cache is created
