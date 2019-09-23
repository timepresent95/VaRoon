<template>
  <div>
    <div>
      새로 사용할 비밀번호를 입력해 주세요.
    </div>
    <div> 아이디 {{id}} </div>
    <input 
      type="text"
      autofocus
      placeholder="새 비밀번호">
    <input 
      type="text"
      placeholder="새 비밀번호 확인">
    <button>다음</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:''
    }
  }

}
</script>
<style>

</style>
