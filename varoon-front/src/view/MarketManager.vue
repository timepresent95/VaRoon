<template>
  <div class="market-manager">
    <div class="market-manager-left-nav">
      <MarketLeft />
    </div>
    <div class="market-manager-content">
      <Market v-if="marketComponent === 'market'" />
      <Game v-else-if="marketComponent === 'game'" />
      <Cart v-else-if="marketComponent === 'cart'" />
      <Library v-else-if="marketComponent === 'library'" />
      <ClientDownload v-else-if="marketComponent === 'client'" />
    </div>
  </div>
</template>
<script>
import MarketLeft from "@/components/MarketManager/MarketLeft.vue";
import Market from "@/components/MarketManager/Market.vue";
import Game from "@/components/MarketManager/Game.vue";
import Cart from "@/components/MarketManager/Cart.vue";
import Library from "@/components/MarketManager/Library.vue";
import ClientDownload from "@/components/MarketManager/ClientDownload.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    MarketLeft,
    Market,
    Game,
    Cart,
    Library,
    ClientDownload,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["marketComponent"]),
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"]),
    changeFontWeigth(index) {
      if (this.marketComponent === index) return true;
    },
  },
};
</script>
<style>
.market-manager {
  width: 100%;
  display: flex;
}
.market-manager-left-nav {
  width: 308px;
}
.market-manager-content {
  width: calc(100% - 308px);
  padding-top: 30px;
  padding-right: 30px;
}
</style>
