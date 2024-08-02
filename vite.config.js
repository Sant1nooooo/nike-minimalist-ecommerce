import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['localforage'],
  },
  build: {
    rollupOptions: {
      external: ['localforage'],
    },
  },
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import mdx from '@mdx-js/rollup'

// export default defineConfig({
//   plugins: [
//     { enforce: 'pre', ...mdx() },
//     react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
//   ],
// })