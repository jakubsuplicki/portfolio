import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
