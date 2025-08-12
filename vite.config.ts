import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vitali-portafolio/',  // <-- add this line with your repo name
  plugins: [react()],
})
