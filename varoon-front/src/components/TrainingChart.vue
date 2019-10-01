<template>
  <div>
    <h1>훈련정보</h1>
    <div>
      <div>
        주시안
        <ul class="tabs">
          <li :key = "tab" v-for="tab in tabs" :class="{active: tab === selectedTab}"
          @click="onClickTab(tab)">
            {{tab}}
          </li>
        </ul>
      </div>
      <div>
        <div>프리즘 치료</div>
         <vue-range-slider min="0" max="100"></vue-range-slider>
      </div>
      <div>
        <div>양안시 협응 훈련</div>
        <input type="range">

      </div>
      <div>
        <div>약시안 강화 치료</div>
        <input type="range">

      </div>
    </div>
  </div>
</template>
<script>
import VueRangeSlider from 'vue-range-slider'

export default {
  components:{
    VueRangeSlider,
  },
  data(){
    return{
      tabs:['오른쪽', '왼쪽'],
      selectedTab: '오른쪽',
      sliderValue:50,
    }
  },
  methods: {
    onClickTab(tab) {
      this.selectedTab = tab
    }
  },
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
.slider {
  width: 200px;
}
</style>
