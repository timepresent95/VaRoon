<template>
  <div>
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/25x25" />
    </router-link>
    {{name}}님
    <button>마이페이지</button>
    <button>로그아웃</button>
    <PatientLeft/>
    <PDChart/>
    <RangeChart/>
    <FocusChart/>
    <TrainingChart/>
  </div>
</template>
<script>
import PatientLeft from './PatientLeft.vue'
import PDChart from './PDChart.vue'
import RangeChart from './RangeChart.vue'
import FocusChart from './FocusChart.vue'
import TrainingChart from './TrainingChart.vue'

export default {
  components:{
    PatientLeft,
    PDChart,
    RangeChart,
    FocusChart,
    TrainingChart
  
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
