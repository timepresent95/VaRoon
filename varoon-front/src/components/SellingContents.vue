<template>
  <div>
    <h1>컨텐츠 관리</h1>
    <ul>
      <li>
        <img class="congratulation" src="http://placehold.it/25x25" />
        {{gameId}}
        {{descript}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      gameId:'VR게임 제목',
      descript: `15세 사시, 복시 43,000 원`
    }
  }
}
</script>
<style>

</style>
