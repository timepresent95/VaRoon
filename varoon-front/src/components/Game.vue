<template>
  <div>
    <h1>Civilization 4</h1>
      <img class="congratulation" src="http://placehold.it/300x200" />
      <div>
        {{descript}}
      </div>
      <ul>
        <li>
          <img class="congratulation" src="http://placehold.it/25x25" />
        </li>
        <li>
          <img class="congratulation" src="http://placehold.it/25x25" />
        </li>
        <li>
          <img class="congratulation" src="http://placehold.it/25x25" />
        </li>
        <li>
          <img class="congratulation" src="http://placehold.it/25x25" />
        </li>
      </ul>
      <button> 담기 </button>
      <button> PAY </button>
      <button> DownLoad </button>

  </div>
</template>
<script>
export default {
  data(){
    return{
      descript:`제목 : Civilization 4 
                  등록일 : 2019.07.01
                  사용 등급 : 15세 사용
                  분류 : 전략, 시뮬레이션, 사시, 약시 
                  평점 : 3.5 / 5 (총 40명 평가)`
    }
  }
}
</script>
<style>

</style>
