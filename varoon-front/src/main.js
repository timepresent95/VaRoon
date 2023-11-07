import {createApp} from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {useAuth} from "@/context/auth";

const app = createApp(App)
app.config.globalProperties.$env = import.meta.env.MODE;
app.provide('auth', useAuth());
app.use(store).use(router).mount(document.body)
