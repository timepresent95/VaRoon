<template>
  <div>
    <div class = "header">
      <div class="header-BI">
        <a href="" @click="refresh"> BI </a>
      </div>
      <div class="menu">
        <a @click.prevent="movePage('login')" href="">로그인</a>
        <div>/</div>
        <a @click.prevent="movePage('terms')" href="" >회원가입</a>
      </div>
    </div>
    <div class = "slider">
      <MainSlider />
  </div>
    <div class="core-value">
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>
<script>
import MainSlider from './MainSlider'
import {mapMutations} from 'vuex'

export default {
  components: {
    MainSlider,
  },
  methods: {
    ...mapMutations([
      'CHANGE_COMPONENT'
    ]),
    refresh() {
      location.reload();
    },
    movePage(index) {
      this.CHANGE_COMPONENT(index);
      this.$router.push('/loginManager')
    }
  }
}
</script>
<style>
.header {
  flex: none;
  background-color: rgba(0,0,0,.15);
  height: 50px;
  padding: 0px;
}
.header-BI{
  text-align: center;
  font-weight: bolder;
  height: 50px;
  width: 50px;
  background-color: rgba(71, 71, 71, 1);
  font-size: 24px;
}
.header-BI a{
  display: block;
  text-decoration: none;
  color: rgba(255,255,255,.5);
  margin: 0px;
  padding: 0px;
  line-height: 50px;
}

.header-BI a:hover,
.header-BI a:focus {
  color: rgba(255,255,255,.9);
}
.menu  {
  position: absolute;
  right: 15px;
  top: 5px;
}
.menu a,
.menu div{
  float: left;
  position: static;
  color: white;
  padding: 10px;
  text-decoration: none;
  line-height: 25px;
}
.slider{
  height: auto;
  overflow: hidden;
}
.core-value{
  position: static;
  width: 100%;
  padding-left: 10%;
}
.core-value div{
  float: left;
  display: block;
  height: 500px;
  width: 25%;
  margin-left: 2%;
  border: 2px solid #000;
}
.header-auth a:hover,
.header-auth a:focus {
  background-color: rgba(255,255,255, .3);
}

</style>
