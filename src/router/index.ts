import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home/Index.vue'),
    meta: {
      title: '首页',
      keepAlive: true,
      scrollTop: 0,
      keepAliveScrollElm: ['.home-horse']
    }
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../pages/recommend/Index.vue'),
    meta: {
      title: '推荐',
      keepAlive: true,
      keepAliveScrollElm: ['.activepanel']
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../pages/my/Index.vue'),
    meta: {
      title: '我的',
      keepAlive: true
    }
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})



export default router

