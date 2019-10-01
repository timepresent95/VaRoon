<template>
  <div>
    <div :class="{'bold': sellingComponent === 'sdk'}" @click.prevent="CHANGE_SELLING_COMPONENT('sdk')">SDK 다운</div>
    <div :class="{'bold': sellingComponent === 'resist'}" @click.prevent="CHANGE_SELLING_COMPONENT('resist')">컨텐츠 업로드</div>
    <div :class="{'bold': sellingComponent === 'contents'}" @click.prevent="CHANGE_SELLING_COMPONENT('contents')">컨텐츠 관리</div>
    <div :class="{'bold': sellingComponent === 'revenue'}" @click.prevent="CHANGE_SELLING_COMPONENT('revenue')">Revenue</div>
    <div>
      <router-link to="/">{{link}}</router-link>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data(){
    return{
      link:'VR마켓'
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
div.bold{
  font-weight: bolder;
}
</style>
