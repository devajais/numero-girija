// @ts-check
import { defineConfig } from 'astro/config';

// Use base path only in production (for GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    site: 'https://devajais.github.io',
    base: isProd ? '/numero-girija/' : '/',
    compressHTML: true,
    build: {
        inlineStylesheets: 'always',
        format: 'directory',
        assets: '_astro'
    },
    trailingSlash: 'always',
    devToolbar: {
        enabled: false
    }
});
