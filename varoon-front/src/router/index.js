import {createRouter, createWebHistory} from "vue-router";
import Main from "@/view/Main.vue";
import LoginManager from "@/view/LoginManager.vue";
import Home from '@/view/Services.vue';
import MarketManager from '@/view/MarketManager.vue';
import SellerManager from '@/view/SellerManager.vue';
import PatientCenter from '@/view/PatientCenter.vue';
import DoctorCenter from '@/view/DoctorCenter.vue';
import Manager from '@/view/Manager.vue';
import MypageManager from '@/view/MypageManager.vue';
import Error404 from '@/view/Error404.vue';

import store from '../store'

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`; //이전 페이지가 어딘지 기억
  store.getters.isAuth ? next() : next(loginPath);
};

const mainHome = (to, from, next) => {
  store.getters.isAuth ? next() : next('/main')
}

const router = createRouter({
  history: createWebHistory(),
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
      path: "/:pathMatch(.*)*",
      component: Error404
    },
    {
      path: "/:pathMatch(.*)",
      component: Error404
    }
  ]
});

export default router;
