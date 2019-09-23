<template>
  <div>
    <img class="loadMap" src="http://placehold.it/320x100" />
    <div>
      회원가입 이용약관, 개인정보 수집 및 이용(필수) / 정보 수신 동의 (선택) 전체 동의합니다.
      <input type="checkbox" v-model="checks" @click="checkAll"/>
      <hr />
      이용약관 동의(필수)
        <input type="checkbox" v-model="first"/>
      <div class="conditions">
        <p>제 1조(목적)</p>
        네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
        네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
      </div>
      <br>
      개인정보 수집 및 이용에 대한 안내 (필수)
        <input type="checkbox" v-model="second" />
      <div class="conditions">
        <p>1. 개인정보 수집,이용 목적</p>
        네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
        네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
      </div>
    </div>
    <button  class="btn" :class="{'btn-success': !invalidForm}" @click.prevent="CHANGE_COMPONENT('regist')"
        :disabled="invalidForm">Log In</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data(){
    return {
      checks: false,
      first: false,
      second: false,
    }
  },
  computed: {
    ...mapState(["component"]),
    invalidForm() {
      return !this.first || !this.second
    }
  },
  methods: {
    ...mapMutations(["CHANGE_COMPONENT"]),
    checkAll(){
        this.first = !this.checks;
        this.second = !this.checks;
    }
  }
};
</script>
<style>
.loadMap {
  width: 100%;
  height: auto;
}
.conditions {
  height: 100px;
  overflow: scroll;
  border: solid 2px #000;
}
.btn {
  position: relative;
  right: 10px;
}
</style>
