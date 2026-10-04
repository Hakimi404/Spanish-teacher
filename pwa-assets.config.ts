import { defineConfig, type Preset } from '@vite-pwa/assets-generator/config'

// The logo is a full-bleed square, so maskable/apple icons need no padding.
// Regenerate icons with: npm run icons
const preset: Preset = {
  transparent: { sizes: [64, 192, 512], favicons: [[48, 'favicon.ico']] },
  maskable: { sizes: [512], padding: 0, resizeOptions: { background: '#E5383B' } },
  apple: { sizes: [180], padding: 0, resizeOptions: { background: '#E5383B' } },
}

export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset,
  images: ['public/logo.svg'],
})
