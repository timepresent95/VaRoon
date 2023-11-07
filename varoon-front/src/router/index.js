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
import {inject} from "vue";

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
      name: 'main',
      beforeEnter: (to, from, next) => {
        const {auth} = inject('auth')
        if (auth.value === null) {
          next()
        } else {
          next({name: 'services', replace: true})
        }
      }
    },
    {
      path: "/services",
      component: Services,
      name: 'services',
      meta: {requireAuth: true}
    },
    {
      path: "/sign-in",
      component: SignIn,
      name: 'sign-in'
    },
    {
      path: "/PatientCenter",
      component: PatientCenter,
      meta: {requireAuth: true}
    },
    {
      path: "/DoctorCenter",
      component: DoctorCenter,
      meta: {requireAuth: true}
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

router.beforeEach((to, from, next) => {
  const {auth} = inject('auth')
  if (auth.value === null && to.meta.requireAuth) {
    next({name: 'sign-in', query: {redirect: to.fullPath}})
  } else {
    next();
  }
})

export default router;
