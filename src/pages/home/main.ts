import { createApp } from 'vue'
import App from "./App.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 挂载前配制属性
app.config.globalProperties.$backend = ''
app.use(ElementPlus)
app.mount('#app')