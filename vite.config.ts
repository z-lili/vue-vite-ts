import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import NutUIResolver from "@nutui/nutui/dist/resolver"
import viteCompression from "vite-plugin-compression"
import path from "path"

export default defineConfig(({ command, mode, ssrBuild }) => {
  // 获取路径
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    plugins: [
      vue(),
      // 开启 unplugin 插件，自动引入 NutUI 组件
      Components({
        resolvers: [NutUIResolver()],
      }),
      // 自动导入
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "./src/type/auto-imports.d.ts",
      }),
      // gzip
      { ...viteCompression(), apply: "build" },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@nutui/nutui/dist/styles/variables.scss";@import "@/style/index.scss";',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          // 分包
          manualChunks: {
            vue: ["vue", "pinia", "vue-router"],
            // elementIcons: ['@element-plus/icons-vue'],
          },
          // js文件和css文件分离
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
    server: {
      // 指定host以及端口
      host: env.VITE_HOST || true,
      port: +env.VITE_PORT, // number类型+
      open: true,
      https: false,
    },
  }
})
