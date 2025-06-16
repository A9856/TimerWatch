import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
  // plugins: [react(),tailwindcss()],
})

// tailwind css use krna hai toh comment ko uncomment kro aur 7 line ko comment krk 8 line ko uncommen kro 
