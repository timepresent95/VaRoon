<template>
  <div>
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/25x25" />
    </router-link>
    <h1> 환자관리 </h1>
    <div>
      <button>클라이언트 다운로드</button>
    </div>
    <div>
      {{name}}님
      <button>마이페이지</button>
      <button>로그아웃</button>
    </div>
    <div>
      <input
        type="text"
        placeholder="검색">
      <ul>
        <li>
          번호
        </li>
        <li>
          이름
        </li>
        <li>
          성별
        </li>
        <li>
          나이
        </li>
      </ul>
      <button>환자등록</button>
      <button>환자삭제</button>
    </div>
    <div>
      이름:{{patientName}}
      성별:{{sex}}
      나이:{{age}}
      사시각:{{angle}}
      기타 특이사항:{{etc}}
      <button>저장</button>
    </div>
    <Chart/>
    <PatientRegister/>
  </div>
</template>
<script>
import Chart from './Chart.vue'
import PatientRegister from './PatientRegister'

export default {
  components:{
    Chart,
    PatientRegister
  },
  data(){
    return{
      name: '',
      patientName:'',
      sex:'',
      age:0,
      angle:[0,0],
      etc:'',
      totalPlayTime:0,
      averagePlayTime:0
    }
  }
}
</script>
<style>

</style>
