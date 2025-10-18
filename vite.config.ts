import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

const manifestIcons = [
    {
        src: '/pwa-192.png',
        sizes: '192x192',
        type: 'image/png',
    },
    {
        src: '/pwa-512.png',
        sizes: '512x512',
        type: 'image/png',
    }
]
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'DB Rad+',
                short_name: 'DB Rad+',
                icons: manifestIcons,
            }
        })
    ],
})
