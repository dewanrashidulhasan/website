import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // এখানে এলিয়াস যুক্ত করুন
    },
  },
  plugins: [react()],
})
