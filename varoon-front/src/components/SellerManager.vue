<template>
  <div>
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/25x25" />
    </router-link>
    {{name}}님
    <button>마이페이지</button>
    <button>로그아웃</button>
    <SellerLeft/>
    <SDKDownload/>
    <ResistContents/>
    <SellingContents/>
    <Revenue/>
  </div>
</template>
<script>
import SellerLeft from './SellerLeft.vue'
import SDKDownload from './SDKDownload.vue'
import ResistContents from './ResistContents.vue'
import SellingContents from './SellingContents.vue'
import Revenue from './Revenue.vue'

export default {
  components:{
    SellerLeft,
    SDKDownload,
    ResistContents,
    SellingContents,
    Revenue
  
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
