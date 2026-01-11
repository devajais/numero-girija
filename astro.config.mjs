// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://devajais.github.io',
    base: '/numero-girija',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto'
    },
    devToolbar: {
        enabled: false
    }
});
