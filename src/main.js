import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router/routers.js'
const pinia = createPinia()

let all = createApp(App)
all.use(router)
all.use(pinia)
all.mount('#app')
