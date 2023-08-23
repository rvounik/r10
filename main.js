import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './src/router';
import vue3Spinner from 'vue3-spinner';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(vue3Spinner)
    .component('EasyDataTable', Vue3EasyDataTable)
    .use(pinia)
    .mount("#app");
