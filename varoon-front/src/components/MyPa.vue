<template>
  <div>
    이름: {{name}}
    ID: {{id}}
    바꿀 비밀번호: <input type="password" autofocus> 
    바꿀 비밀번호 재입력: <input type="password"> 
    이메일: <input type="text"> 
    <button>클릭</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name: '',
      id: ''
    }
  }
}
</script>
<style>

</style>
