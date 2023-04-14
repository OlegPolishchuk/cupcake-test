import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3030,
    watch: { usePolling: true }
  },
  resolve: {
    alias: {
      components: '/src/shared/components',
      api: '/src/api',
      hooks: '/src/shared/hooks',
      utils: '/src/shared/utils',
      constants: '/src/shared/constants'
    }
  }
})
