import { createRouter, createWebHashHistory } from "vue-router"
import { setTitle } from "@/utils/tool"

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/home/Index.vue"),
    meta: {
      title: "首页",
      keepAlive: true,
      scrollTop: 0,
      keepAliveScrollElm: [".home-horse"],
    },
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../pages/recommend/Index.vue"),
    meta: {
      title: "分类",
      keepAlive: true,
      keepAliveScrollElm: [".activepanel"],
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../pages/cart/index.vue"),
    meta: {
      title: "购物车",
      keepAlive: true,
      keepAliveScrollElm: [".activepanel"],
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../pages/my/Index.vue"),
    meta: {
      title: "我的",
      keepAlive: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.title) setTitle(to.meta.title as string)
})

export default router
