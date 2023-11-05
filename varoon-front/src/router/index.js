import {createRouter, createWebHistory} from "vue-router";
import Main from "@/view/Main.vue";
import SignIn from "@/view/SignIn";
import Find from "@/view/Find";
import FindAccount from "@/view/Find/Account";
import FindPassword from "@/view/Find/Password";
import Join from "@/view/Join";
import JoinTerms from "@/view/Join/Terms";
import JoinInformation from "@/view/Join/Information";
import JoinComplete from "@/view/Join/Complete";
import Service from '@/view/Services.vue';
import VRMarket from '@/view/VRMarket';
import VRMarketSearch from '@/view/VRMarket/Search.vue';
import VRMarketCart from '@/view/VRMarket/Cart';
import VRMarketLibrary from '@/view/VRMarket/Library';
import VRMarketClientDownload from '@/view/VRMarket/ClientDownload';
import VRMarketGame from '@/view/VRMarket/Game';
import SellerManager from '@/view/SellerManager.vue';
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
      path: '/join',
      component: Join,
      redirect: {name: 'join-terms'},
      children: [
        {
          path: 'terms',
          component: JoinTerms,
          name: 'join-terms',
        },
        {
          path: 'information',
          component: JoinInformation,
          name: 'join-information',
        },
        {
          path: 'complete',
          component: JoinComplete,
          name: 'join-complete',
        }
      ]
    },
    {
      path: "/find",
      component: Find,
      redirect: {name: 'find-account'},
      children: [
        {
          path: 'account',
          component: FindAccount,
          name: 'find-account',
        },
        {
          path: 'password',
          component: FindPassword,
          name: 'find-password',
        }
      ]
    },
    {
      path: "/service",
      component: Service,
      beforeEnter: mainHome
    },
    {
      path: "/sign-in",
      component: SignIn,
      name: 'sign-in'
    },
    {
      path: "/vr-market",
      component: VRMarket,
      name: 'vr-market',
      children: [
        {
          path: '',
          component: VRMarketSearch,
          name: 'vr-market-search',
        },
        {
          path: 'cart',
          component: VRMarketCart,
          name: 'vr-market-cart',
        },
        {
          path: 'library',
          component: VRMarketLibrary,
          name: 'vr-market-library'
        },
        {
          path: 'client-download',
          component: VRMarketClientDownload,
          name: 'vr-market-client-download'
        },
        {
          path: 'game/:id',
          component: VRMarketGame,
          name: 'vr-market-game'
        }
      ]
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
      name: 'error',
      component: Error404
    },
    {
      path: "/:pathMatch(.*)",
      component: Error404
    }
  ]
});

export default router;
