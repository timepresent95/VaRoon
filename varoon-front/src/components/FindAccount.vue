<template>
  <div>
    <ul class="tabs">
    <li :key = "tab" v-for="tab in tabs" :class="{active: tab === selectedTab}"
    @click="onClickTab(tab)">
      {{tab}}
    </li>
  </ul>
    <div v-if="selectedTab === tabs[0]">
      <FindId> </FindId>
    </div>
    <div v-else>
      <FindPassword> </FindPassword>
      <NewPassword/>
      <CompleteChange/>
    </div>
  </div>
</template>
<script>
import FindId from './FindId.vue'
import FindPassword from './FindPassword.vue'
import NewPassword from './NewPassword.vue'
import CompleteChange from './CompleteChange.vue'

export default {
  components:{
    FindId,
    FindPassword,
    NewPassword,
    CompleteChange
  },
  data(){
    return{
      tabs:['아이디 찾기', '비밀번호 찾기'],
      selectedTab: '아이디 찾기'
    }
  },
  methods: {
    onClickTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>
<style>
ul.tabs {
  display: flex;
}
.tabs li {
  display: inline-block;
  width: 50%;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc; 
  background-color: #eee;
  color: #999;
}
.tabs li.active {
  background-color: #2ac1bc;
  color: #fff;
}
.list li {
  box-sizing: border-box;
  display: block;
  padding: 15px;
  border-bottom: 1px solid #ccc; 
  position: relative;
}
.list li:last-child {
  border-bottom: none;
}
</style>
