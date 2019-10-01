<template>
  <div>
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/25x25" />
    </router-link>
    {{name}}님
    <button>마이페이지</button>
    <button>로그아웃</button>
    <MarketLeft/>
    <Market/>
    <Game/>
    <Cart/>
    <Library/>
    <ClientDownload/>
  </div>
</template>
<script>
import MarketLeft from './MarketLeft.vue'
import Market from './Market.vue'
import Game from './Game.vue'
import Cart from './Cart.vue'
import Library from './Library.vue'
import ClientDownload from './ClientDownload.vue'

export default {
  components:{
    MarketLeft,
    Market,
    Game,
    Cart,
    Library,
    ClientDownload
  },
  data(){
    return{
      name:''
    }
  }

}
</script>
<style>

</style>
