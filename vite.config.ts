import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import NutUIResolver from '@nutui/nutui/dist/resolver'
import viteCompression from 'vite-plugin-compression'
import path from 'path'

export default defineConfig(({ command, mode, ssrBuild }) => {
  let devConfig: Object
  let prodConfig: Object
  if (command === 'serve') {
    devConfig = {}
  } else {
    prodConfig = {
      // 生产环境配置  这样写会被后面的覆盖掉
      // plugins: [{
      //   ...viteCompression(),
      // }],
      build: {
        rollupOptions: {
          output: {
            // 分包
            manualChunks: {
              vue: ['vue', 'pinia', 'vue-router'],
              // elementIcons: ['@element-plus/icons-vue'],
            },
            // js文件和css文件分离
            chunkFileNames: "static/js/[name]-[hash].js",
            entryFileNames: "static/js/[name]-[hash].js",
            assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          },
        },
      },
    }
  }
  return {
    ...devConfig,
    ...prodConfig,
    plugins: [
      vue(),
      // 开启 unplugin 插件，自动引入 NutUI 组件
      Components({
        resolvers: [NutUIResolver()],
      }),
      // 自动导入
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: './src/type/auto-imports.d.ts'
      }),
      // gzip
      { ...viteCompression(), apply: 'build' }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@nutui/nutui/dist/styles/variables.scss";@import "@/style/index.scss";'
        }
      }
    },
    server: {
      // 指定host以及端口
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
    }
  }
})
