<template>
  <div>
    <h1>구매 내역</h1>
    <ul>
      <li>
        <img class="congratulation" src="http://placehold.it/25x25" />
        {{gameId}}
        {{playTime}}시간
      </li>
    </ul>
    <div>
      <button>1</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      gameId:'VR게임 제목',
      playTime: 0
    }
  }
}
</script>
<style>

</style>
