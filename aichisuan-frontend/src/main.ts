import './assets/style/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
//引入element-plus官方样式
import 'element-plus/dist/index.css'

import router from './router';

const app = createApp(App)

const pina = createPinia()
pina.use(piniaPluginPersistedstate)

app.use(pina)

app.use(router)

app.mount('#app')
