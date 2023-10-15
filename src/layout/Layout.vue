<!-- 布局组件 -->
<template>
  <div class="layout">
    <div class="layout__container">
      <slot></slot>
    </div>
    <div class="layout__tabbar">
      <nut-tabbar v-model="activeName" @tab-switch="tabSwitch">
        <nut-tabbar-item v-for="item in List" :name="item.name" :tab-title="item.title" :icon="item.icon">
        </nut-tabbar-item>
      </nut-tabbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Home, Category, Cart, My } from "@nutui/icons-vue"

const activeName = ref("home")
const List = [
  {
    title: "首页",
    icon: h(Home),
    name: "home",
  },
  {
    title: "分类",
    icon: h(Category),
    name: "category",
  },
  {
    title: "购物车",
    icon: h(Cart),
    name: "cart",
  },
  {
    title: "我的",
    icon: h(My),
    name: "my",
  },
]

const router = useRouter()
const tabSwitch = (item: any, name: any) => {
  console.log(item, name)
  router.push(`/${name}`)
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;

  &__container {
    height: calc(100% - 52px);
  }
}
</style>
