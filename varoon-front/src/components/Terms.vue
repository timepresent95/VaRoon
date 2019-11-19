<template>
  <div class="termsComponent">
    <div class="termsTitle">회원가입</div>
    <img class="loadMap" src="../images/join-step-one@2x.png" />
    <div>
      <div class="termDescript">
        회원가입을 하시면 하나의 아이디와 비밀번호로 더 많은 혜택과 서비스를
        안전하게 이용하실 수 있습니다.
      </div>
      <div class="allCheck">회원가입 이용약관, 개인정보 수집 및 이용(필수)/정보 수신동의(선택)에 동의합니다.</div>
      <img class="allCheckBox" :src="checkSelectImg" @click="checkAll" />
      <div class="hrLine"></div>
      <div class="termBox">
        <div class="termBoxTitle">이용약관 동의(필수)</div>
        <img class="checkImg" :src="firstSelectImg" @click.prevent="first = !first" />
        <div class="conditions">
          <p>제 1조(목적)</p>네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
          네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
        </div>
      </div>
      <div class="termBox">
        <div class="termBoxTitle">개인정보 수집 및 이용에 대한 안내 (필수)</div>
        <img class="checkImg" :src="secondSelectImg" @click.prevent="second = !second" />
        <div class="conditions">
          <p>1. 개인정보 수집,이용 목적</p>네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
          네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
        </div>
      </div>
    </div>
    <button
      class="termBtn"
      :class="{'termBtn-success': !invalidForm}"
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
      if (!this.checks) return require("../images/round-check@2x.png");
      else return require("../images/round-check-selected@2x.png");
    },
    firstSelectImg() {
      if (!this.first) return require("../images/round-check@2x.png");
      else return require("../images/round-check-selected@2x.png");
    },
    secondSelectImg() {
      if (!this.second) return require("../images/round-check@2x.png");
      else return require("../images/round-check-selected@2x.png");
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
.termsTitle {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  position: absolute;
  top: 100px;
  left: 903px;
}
.loadMap {
  width: 400px;
  height: 72px;
  object-fit: contain;
  position: absolute;
  top: 165px;
  left: 760px;
}
.termDescript {
  width: 456px;
  height: 47px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  color: #c2c2c2;
  position: absolute;
  top: 265px;
  left: 732px;
}
.allCheck {
  width: 542px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  text-align: left;
  color: #4b74ff;
  position: absolute;
  top: 360px;
  left: 642px;
}
.allCheckBox {
  position: absolute;
  top: 357px;
  left: 1254px;
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
}
.hrLine {
  width: 636px;
  height: 0;
  border: solid 0.5px #e2e2e2;
  position: absolute;
  top: 400.7px;
  left: 642px;
}
.termBox {
  position: relative;
  top: 437px;
  left: 642px;
  height: 166px;
  margin-bottom: 66px;
}
.termBoxTitle {
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  text-align: left;
  color: #000000;
  margin-bottom: 12px;
}
.checkImg {
  width: 24px;
  height: 24px;
  object-fit: contain;
  position: absolute;
  top: 0px;
  left: 613px;
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
.termBtn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(94, 94, 94, 0.6);
  background-color: #a6a6a6;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 930px;
  left: 752px;
}
.termBtn-success {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 930px;
  left: 752px;
}
</style>
