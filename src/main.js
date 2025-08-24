import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routers.js'

let all = createApp(App)
    all.use(router)
    all.mount('#app')
