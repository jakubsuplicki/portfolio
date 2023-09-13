import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const app = createApp(App)
app.use(createPinia())
app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
