import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import './style.css'
import Index from './index.vue'
  
const app = createApp(Index);
app.use(ArcoVue);
app.mount('#app');
