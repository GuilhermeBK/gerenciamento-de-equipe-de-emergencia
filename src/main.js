import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './store'

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')
Vue.use(Store)
