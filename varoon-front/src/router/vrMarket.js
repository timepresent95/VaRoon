import VrMarket from "@/view/VrMarket/index.vue";
import VrMarketSearch from "@/view/VrMarket/Search.vue";
import VrMarketCart from "@/view/VrMarket/Cart.vue";
import VrMarketLibrary from "@/view/VrMarket/Library.vue";
import VrMarketClientDownload from "@/view/VrMarket/ClientDownload.vue";
import VrMarketGame from "@/view/VrMarket/Game.vue";

export default {
  path: "/vr-market",
  component: VrMarket,
  children: [
    {
      path: '',
      component: VrMarketSearch,
      name: 'vr-market-search',
    },
    {
      path: 'cart',
      component: VrMarketCart,
      name: 'vr-market-cart',
    },
    {
      path: 'library',
      component: VrMarketLibrary,
      name: 'vr-market-library'
    },
    {
      path: 'client-download',
      component: VrMarketClientDownload,
      name: 'vr-market-client-download'
    },
    {
      path: 'game/:id',
      component: VrMarketGame,
      name: 'vr-market-game'
    }
  ]
}
