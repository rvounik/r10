import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './src/router';
import easySpinner from 'vue-easy-spinner';

import App from './App.vue'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(easySpinner, {
        prefix: 'easy',
    })
    .mount("#app");
