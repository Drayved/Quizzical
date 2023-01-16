import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['uuid', 'lodash', 'react-confetti', 'html-react-parser']
    }
  }
})