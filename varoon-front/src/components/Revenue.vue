<template>
  <div>
    <h1>Revenue</h1>
    총 수익{{totalRevenue}}원
    <div>
      {{dateStart}} ~ {{dateEnd}}
    </div>
    <div>
      <img class="congratulation" src="http://placehold.it/400x250" />그래프 들어갈 공간
      <input type="checkbox">{{gameName}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      totalRevenue:0,
      dateStart:'19.04.01',
      dateEnd:'19.07.01',
      gameName:'game1'
    }
  }
}
</script>
<style>

</style>
