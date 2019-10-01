<template>
  <div>
    <div :class="{bold: managerComponent==='approval'}" @click.prevent="CHANGE_MANAGE_COMPONENT('approval')">업로드 승인</div>
    <div :class="{bold: managerComponent==='member'}" @click.prevent="CHANGE_MANAGE_COMPONENT('member')">회원명단 관리</div>
    <div :class="{bold: managerComponent==='contents'}" @click.prevent="CHANGE_MANAGE_COMPONENT('contents')">컨텐츠 관리</div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data(){
    return{
    }
  },
  computed: {
    ...mapState(["managerComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_MANAGE_COMPONENT"]),
  }
}
</script>
<style>
div.bold{
  font-weight: bolder;
}
</style>
