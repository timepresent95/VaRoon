import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$imageURI = import.meta.env.VITE_APP_IMAGE_URI;
app.use(store).use(router).mount('#app')
