import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'normalize.css'
import { IconFont } from '@nutui/icons-vue'
import '@nutui/icons-vue/dist/style_iconfont.css'
import '@/utils/adaptation'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(IconFont)

app.mount('#app')
