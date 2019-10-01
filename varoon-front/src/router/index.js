import Vue from "vue";
import VueRouter from "vue-router";
//이동에 사용할 컴포넌트 import할 것
import Main from "../components/Main.vue";
import LoginManager from "../components/LoginManager.vue";
import Home from '../components/Home.vue';
import MarketManager from '../components/MarketManager.vue';
import SellerManager from '../components/SellerManager.vue';
import PatientCenter from '../components/PatientCenter.vue';
import DoctorCenter from '../components/DoctorCenter.vue';
import Manager from '../components/Manager.vue';
import MypageManager from '../components/MypageManager.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",

    routes: [
        { path: "/", component: Main },
        { path: "/loginManager", component: LoginManager },
        { path: "/home", component: Home },
        { path: "/MarketManager", component: MarketManager },
        { path: "/SellerManager", component: SellerManager },
        { path: "/PatientCenter", component: PatientCenter },
        { path: "/DoctorCenter", component: DoctorCenter },
        { path: "/Manager", component: Manager },
        { path: "/MypageManager", component: MypageManager },
    ]
});

export default router;