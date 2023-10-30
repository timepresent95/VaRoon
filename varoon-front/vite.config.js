import {defineConfig} from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'
import envCompatible from 'vite-plugin-env-compatible';
import {createHtmlPlugin} from 'vite-plugin-html';
import {viteCommonjs} from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'vue',
        replacement: '@vue/compat'
      },
      {
        find: /^~/,
        replacement: ''
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }),
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'varoon-front'
        }
      }
    })
  ],
  build: {}
})
