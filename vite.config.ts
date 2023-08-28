import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode, ssrBuild }) => {
  let devConfig: Object
  let prodConfig: Object
  if (command === 'serve') {
    devConfig = {}
  } else {
    prodConfig = {}
  }
  return {
    ...devConfig,
    ...prodConfig,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/index.scss";'
        }
      }
    }
  }
})
