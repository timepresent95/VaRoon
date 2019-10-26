<template>
  <div>
    <div class="mypageCheckInputTitle">현재 비밀번호</div>
    <input class="mypageCheckInput" v-model="inputPassword" type="text" placeholder="비밀번호를 입력해주세요" />
    <div class="mypageCheckButton" @click="checkPass">확인</div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputPassword: null
    };
  },
  computed: {
    ...mapState(["mypageComponent", "id"])
  },
  methods: {
    ...mapActions(["LOGIN"]),
    ...mapMutations(["CHANGE_MY_COMPONENT"]),
    checkPass() {
      const id = this.id;
      const pw = this.inputPassword;
      this.LOGIN({ id, pw })
        .then(_ => {
          this.CHANGE_MY_COMPONENT("pa");
        })
        .catch(_ => {
          alert("worng password");
        });
    }
  }
};
</script>
<style>
.mypageCheckInputTitle {
  width: 112px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  position: absolute;
  top: 352px;
  left: 905px;
}
.mypageCheckInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  line-height: 62px;
  text-align: center;
  position: absolute;
  top: 389px;
  left: 753px;
}
.mypageCheckButton {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 501px;
  left: 753px;
}
</style>
