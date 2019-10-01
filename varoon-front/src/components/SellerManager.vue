<template>
  <div>
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/25x25" />
    </router-link>
    {{name}}님
    <button>마이페이지</button>
    <button>로그아웃</button>
    <SellerLeft />
    <SDKDownload v-if="sellingComponent === 'sdk'"/>
    <ResistContents v-else-if="sellingComponent === 'resist'"/>
    <SellingContents v-else-if="sellingComponent === 'contents'"/>
    <Revenue v-else-if="sellingComponent === 'revenue'"/>
  </div>
</template>
<script>
import SellerLeft from './SellerLeft.vue'
import SDKDownload from './SDKDownload.vue'
import ResistContents from './ResistContents.vue'
import SellingContents from './SellingContents.vue'
import Revenue from './Revenue.vue'

import {mapState, mapMutations} from 'vuex'

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
  },
  computed: {
    ...mapState(["sellingComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_SELLING_COMPONENT"])
  }

}
</script>
<style>

</style>
