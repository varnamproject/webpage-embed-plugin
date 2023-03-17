import { defineConfig } from 'vite'
import * as path from "path"

import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,

    lib: {
      entry: path.resolve(__dirname, "./src/main.ts"),
      
      // TODO: Edit this to select which all types of bundling you support
      formats: ['es', 'cjs', 'umd'],

      // TODO: Update this to reflect your library name
      name: 'Example',

      // TODO: Update this to reflect your dist file name
      fileName: 'example',
    }
  },
  plugins: [
    vue(),
    dts()
  ],
})
