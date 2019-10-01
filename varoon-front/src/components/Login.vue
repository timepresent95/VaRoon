<template>
  <div class="input">
    <div>
    <input class="form-control" type="text"
          v-model="email" autofocus placeholder="아이디(6~13자 영문 소문자, 숫자 입력)" />
    <input class="form-control" type="password"
          v-model="password" placeholder="비밀번호(영문, 숫자, 특수문자 조합. 8~12자 내외)" />
    </div>
    <div>
    <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit" 
        :disabled="invalidForm">Log In</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
}
</script>
<style>
.input {
  margin-left: 40%;
  height: auto;
  overflow: hidden;
}
.input div{
  margin: 10px 0px;
  float: left;
}
.input button{
  height: 70px;
  margin: 3px 25px;
}
.input input{
  width: 300px;
}
</style>
