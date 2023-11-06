import {createRouter, createWebHistory} from "vue-router";
import Main from "@/view/Main.vue";
import SignIn from "@/view/SignIn";
import Join from "@/router/join"
import Find from "@/router/find"
import SalesCenter from "@/router/salesCenter"
import VrMarket from "@/router/vrMarket"
import Services from '@/view/Services';
import PatientCenter from '@/view/PatientCenter.vue';
import DoctorCenter from '@/view/DoctorCenter.vue';
import Manager from '@/view/Manager.vue';
import MypageManager from '@/view/MypageManager.vue';
import Error404 from '@/view/Error404.vue';

import store from '../store'

const requireAuth = (to, from, next) => {
  // const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`; //이전 페이지가 어딘지 기억
  // store.getters.isAuth ? next() : next(loginPath);
  next();
};

const mainHome = (to, from, next) => {
  // store.getters.isAuth ? next() : next('/main')
  next();
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0, behavior: "smooth"}
    }
  },
  routes: [
    {
      path: "/",
      component: Main,
      name: 'main'
    },
    {
      path: "/services",
      component: Services,
      // beforeEnter: mainHome
    },
    {
      path: "/sign-in",
      component: SignIn,
      name: 'sign-in'
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
      name: 'error',
      component: Error404
    },
    {
      path: "/:pathMatch(.*)",
      component: Error404
    },
    Join,
    Find,
    SalesCenter,
    VrMarket,
  ]
});

export default router;
