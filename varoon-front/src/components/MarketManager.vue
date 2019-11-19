<template>
  <div class="marketManager">
    <MarketLeft />
    <Market v-if="marketComponent === 'market'" />
    <Game v-else-if="marketComponent === 'game'" />
    <Cart v-else-if="marketComponent === 'cart'" />
    <Library v-else-if="marketComponent === 'library'" />
    <ClientDownload v-else-if="marketComponent === 'client'" />
  </div>
</template>
<script>
import MarketLeft from "./MarketLeft.vue";
import Market from "./Market.vue";
import Game from "./Game.vue";
import Cart from "./Cart.vue";
import Library from "./Library.vue";
import ClientDownload from "./ClientDownload.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    MarketLeft,
    Market,
    Game,
    Cart,
    Library,
    ClientDownload
  },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState(["marketComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"]),
    changeFontWeigth(index) {
      if (this.marketComponent === index) return true;
    }
  }
};
</script>
<style>
.marketManager {
  height: 1724px;
}
</style>
