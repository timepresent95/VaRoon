<template>
  <div>
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/25x25" />
    </router-link>
    <h1> 마이페이지 </h1>
    <MyPageCheck/>
    <MyPa/>
  </div>
</template>
<script>
import MyPa from './MyPa.vue'
import MyPageCheck from './MypageCheck.vue'

export default {
  components:{
    MyPageCheck,
    MyPa
  }
}
</script>
<style>

</style>
