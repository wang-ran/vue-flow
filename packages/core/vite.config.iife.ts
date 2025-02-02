import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'
import pkg from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve('src'),
    },
    extensions: ['.ts', '.vue'],
  },
  build: {
    minify: false,
    emptyOutDir: false,
    lib: {
      formats: ['iife'],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'vue-flow-core',
      name: 'VueFlowCore',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        format: 'iife',
        dir: './dist',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    replace({
      __ENV__: 'production',
      __VUE_FLOW_VERSION__: JSON.stringify(pkg.version),
      preventAssignment: true,
    }) as any,
  ],
})
