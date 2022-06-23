import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

process.env = { ...process.env, ...loadEnv('development', process.cwd()) }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: parseInt(process.env.VITE_PORT ? process.env.VITE_PORT : '')
  }
})
