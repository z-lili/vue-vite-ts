<template>
  <div id="app-container">
    <!-- 异步组件suspense -->
    <Suspense>
      <template #default>
        <Layout>
          <router-view v-slot="{ Component }">
            <keep-alive :include="includes">
              <component :is="Component" class="page-view" :key="$route.fullPath" />
            </keep-alive>
          </router-view>
        </Layout>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Layout from "./layout/Layout.vue"

// 设置需要缓存的页面
const includes = ref([])
</script>

<style lang="scss" scoped>
html,
body,
body {
  #app {
    height: 100vh;
  }

  #app-container {
    width: p2r(750);
    height: 100vh;
    margin: 0 auto;
    background-color: #fff;
  }
}
</style>
