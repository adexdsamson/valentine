import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['heart.svg', 'favicon.svg'],
      manifest: {
        name: 'Be My Valentine',
        short_name: 'Valentine',
        description: 'A romantic Valentine\'s Day application',
        theme_color: '#e11d48',
        background_color: '#fff1f2',
        display: 'standalone',
        icons: [
          {
            src: 'heart.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          },
          {
            src: 'heart.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'heart.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
