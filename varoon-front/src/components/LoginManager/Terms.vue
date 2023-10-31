<template>
  <div class="terms-component">
    <div class="terms-title">회원가입</div>
    <img class="load-map" src="@/images/join-step-one@2x.png" />
    <div class="terms-content">
      <p class="terms-description">
        회원가입을 하시면 하나의 아이디와 비밀번호로 <br/>
        더 많은 혜택과 서비스를 안전하게 이용하실 수 있습니다.
      </p>
      <p class="all-check">회원가입 이용약관, 개인정보 수집 및 이용(필수)/정보 수신동의(선택)에 동의합니다.</p>
      <img class="all-checkbox" :src="checkSelectImg" @click="checkAll" />
      <div class="hr-line"></div>
      <div class="term-box">
        <div class="term-box-title">이용약관 동의(필수)</div>
        <img class="check-img" :src="firstSelectImg" @click.prevent="first = !first" />
        <div class="conditions">
          <p>제 1조(목적)</p>네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
          네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
        </div>
      </div>
      <div class="term-box">
        <div class="term-box-title">개인정보 수집 및 이용에 대한 안내 (필수)</div>
        <img class="check-img" :src="secondSelectImg" @click.prevent="second = !second" />
        <div class="conditions">
          <p>1. 개인정보 수집,이용 목적</p>네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
          네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
        </div>
      </div>
    </div>
    <button
      class="term-btn"
      :class="{'term-btn-success': !invalidForm}"
      @click.prevent="CHANGE_LOGIN_COMPONENT('regist')"
      :disabled="invalidForm"
    >확인</button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      checks: false,
      first: false,
      second: false
    };
  },
  watch: {
    first() {
      if (!this.first) this.checks = false;
    },
    second() {
      if (!this.second) this.checks = false;
    }
  },
  computed: {
    invalidForm() {
      return !this.first || !this.second;
    },
    checkSelectImg() {
      if (!this.checks) return `${this.$imageURI}/round-check@2x.png`
      else return `${this.$imageURI}/round-check-selected@2x.png`
    },
    firstSelectImg() {
      if (!this.first) return `${this.$imageURI}/round-check@2x.png`
      else return `${this.$imageURI}/round-check-selected@2x.png`
    },
    secondSelectImg() {
      if (!this.second) return `${this.$imageURI}/round-check@2x.png`
      else return `${this.$imageURI}/round-check-selected@2x.png`
    }
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN_COMPONENT"]),
    checkAll() {
      if (this.fisrt || this.second) {
        this.first = false;
        this.second = false;
        this.checks = false;
      } else {
        this.first = true;
        this.second = true;
        this.checks = true;
      }
    }
  }
};
</script>
<style>
.terms-component{
  min-height: calc(100vh - 191px);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.terms-title {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
}
.load-map {
  width: 400px;
  height: 72px;
  object-fit: contain;
}
.terms-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.terms-description {
  height: 47px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  color: #c2c2c2;
}
.all-check {
  width: 542px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  text-align: left;
  color: #4b74ff;
}
.all-checkbox {
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  text-align: left;
  align-self: flex-start;
}
.hr-line {
  width: 636px;
  height: 0;
  border: solid 0.5px #e2e2e2;
  margin: 5px 0;
}
.term-box {
  height: 166px;
  margin-bottom: 66px;
}
.term-box-title {
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  text-align: left;
  color: #000000;
  margin-bottom: 12px;
}
.check-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
}
.conditions {
  width: 636px;
  height: 134px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  padding: 14px;
  line-height: 1.63;
  overflow: scroll;
}
.term-btn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 3px 10px 0 rgba(94, 94, 94, 0.6);
  background-color: #a6a6a6;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
}
.term-btn-success {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
}
</style>
