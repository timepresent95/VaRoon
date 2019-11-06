import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import LoginManager from "../components/LoginManager.vue";
import Home from '../components/Home.vue';
import MarketManager from '../components/MarketManager.vue';
import SellerManager from '../components/SellerManager.vue';
import PatientCenter from '../components/PatientCenter.vue';
import DoctorCenter from '../components/DoctorCenter.vue';
import Manager from '../components/Manager.vue';
import MypageManager from '../components/MypageManager.vue';
import Error404 from '../components/Error404.vue';

import store from '../store'

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`; //이전 페이지가 어딘지 기억
    store.getters.isAuth ? next() : next(loginPath);
};

const mainHome = (to, from, next) => {
    store.getters.isAuth ? next() : next('/main')
}

const router = new VueRouter({
    mode: "history",

    routes: [{
            path: "/main",
            component: Main
        },
        {
            path: "/loginManager",
            component: LoginManager
        },
        {
            path: "/",
            component: Home,
            beforeEnter: mainHome
        },
        {
            path: "/MarketManager",
            component: MarketManager
        },
        {
            path: "/SellerManager",
            component: SellerManager
        },
        {
            path: "/PatientCenter",
            component: PatientCenter
        },
        {
            path: "/DoctorCenter",
            component: DoctorCenter
        },
        {
            path: "/Manager",
            component: Manager
        },
        {
            path: "/MypageManager",
            component: MypageManager
        },
        {
            path: "*",
            component: Error404
        }
    ]
});

export default router;