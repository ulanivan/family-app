import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'prodUrl'
    : 'http://127.0.0.1:8000'

app
  .use(router)
  .use(VueAxios, axios)
  .use(createPinia())
  .mount('#app')

app.axios.defaults.baseURL = baseURL

export default app
