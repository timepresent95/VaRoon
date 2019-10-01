<template>
  <div>
    <h1>장바구니</h1>
    <div>
      <ul>
        <li>
          <input 
            type="checkbox">
          <img class="congratulation" src="http://placehold.it/25x25"/>
          {{descript[0]}}
          <button>삭제</button>
        </li>
      </ul>
      <div>
        총 금액: {{totalAmount}}
      </div>
      <button> 결제 </button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      descript:[`제목 : Witcher 3 분류 : 액션, 사시 가격 : 43,000 원`],
      totalAmount: 0
    }
  }
}
</script>
<style>

</style>
