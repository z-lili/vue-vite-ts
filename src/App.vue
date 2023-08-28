<template>
  <div id="app-container">
    <!-- 异步组件suspense -->
    <Suspense>
      <template #default>
        <Layout>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" class="page-view" :key="$route.fullPath" />
            </keep-alive>
          </router-view>
        </Layout>
      </template>
      <template #fallback>
        <div>loading</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Layout from './layout/Layout.vue'

</script>

<style lang="scss" scoped>
#app-container {
  height: 100px;
  background-color: $test-color;
}
</style>