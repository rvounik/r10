import { createApp } from 'vue'
import router from './src/router';
import App from './App.vue'

// todo: enable when you need it (probably not before implementing backend)
// import { createPinia } from "pinia";

const app = createApp(App)
app.use(router)
app.mount('#app')
