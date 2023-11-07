import VrMarket from "@/view/VrMarket";
import VrMarketSearch from "@/view/VrMarket/Search";
import VrMarketCart from "@/view/VrMarket/Cart";
import VrMarketLibrary from "@/view/VrMarket/Library";
import VrMarketClientDownload from "@/view/VrMarket/ClientDownload";
import VrMarketGame from "@/view/VrMarket/Game";

export default {
  path: "/vr-market",
  component: VrMarket,
  meta: {requireAuth: true},
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
