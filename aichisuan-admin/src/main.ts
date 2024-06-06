import './assets/main.css'
import * as Icons from '@ant-design/icons-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'dayjs/locale/zh-cn';

const app = createApp(App)

app.use(createPinia())
app.use(router)

for(const i in Icons) {
  const iconName = i as keyof typeof Icons; // Explicitly define the type of `i`
  app.component(iconName, Icons[iconName]);
}

app.mount('#app')
