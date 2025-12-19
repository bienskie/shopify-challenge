import { defineConfig } from 'vite';
import path from 'path';
import styles from 'rollup-plugin-styles';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../assets/css',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        global: path.resolve(__dirname, 'src/scss/global.scss'),
        homepage: path.resolve(__dirname, 'src/scss/homepage.scss')
      },
      output: {
        entryFileNames: '[name].js',       // dummy JS
        assetFileNames: '[name].css'       // compiled CSS
      },
      plugins: [
        styles({
          mode: 'extract',    // extract CSS to a file
          sourceMap: true
        })
      ]
    }
  }
});