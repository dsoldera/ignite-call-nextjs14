/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  test: {
    coverage: {
      reporter: ['html'],
      reportsDirectory: './coverage'
    },
    environment: 'jsdom',
    setupFiles: ["vitestSetup.ts"],
  },
})