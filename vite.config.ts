import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: o site funciona na raiz de um domínio próprio
  // e também em subpasta (ex.: usuario.github.io/nome-do-repositorio/).
  base: './',
})
