# Generating PNG Icons from SVG

The app uses an SVG icon (`public/icon.svg`) that works on most modern devices. However, for optimal PWA support, you may want to generate PNG versions.

## Option 1: Online Tool (Easiest)

1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload `public/icon.svg`
3. Download the generated package
4. Copy `android-chrome-192x192.png` to `public/icon-192.png`
5. Copy `android-chrome-512x512.png` to `public/icon-512.png`

## Option 2: Using ImageMagick (If installed)

```bash
# Install ImageMagick if not already installed
brew install imagemagick  # macOS
# or
sudo apt-get install imagemagick  # Linux

# Generate icons
convert public/icon.svg -resize 192x192 public/icon-192.png
convert public/icon.svg -resize 512x512 public/icon-512.png
```

## Option 3: Using Node.js Sharp

```bash
npm install sharp-cli -g
sharp -i public/icon.svg -o public/icon-192.png resize 192 192
sharp -i public/icon.svg -o public/icon-512.png resize 512 512
```

After generating the PNG files, the manifest.json will automatically use them when users add the app to their home screen.
