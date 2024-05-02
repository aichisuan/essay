import './assets/style/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//引入element-plus官方样式
import 'element-plus/dist/index.css'

import router from './router';

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
