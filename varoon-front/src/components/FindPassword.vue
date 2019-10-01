<template>
  <div>
    <div>
    회원정보에 등록한 이메일로 인증
- 회원정보에 등록한 이메일 정보가 같아야, 인증번호를 받을 수 있습니다.
    </div>
    아이디<input 
      type="text"
      autofocus>
    이름<input type="text">
    이메일<input type="text">
    <button>인증번호 받기</button>
    <input 
      type="text"
      placeholder="인증번호 4자리 숫자 입력"/>
    <button>다음</button>
  </div>
</template>
<script>
export default {

}
</script>
<style>

</style>
