<template>
  <Modal :show="show" @modal-close="$emit('modal-close')">
    <p class="patient-register-description">
      <strong>추가할 환자</strong>정보를 입력하세요
    </p>
    <input
      class="patient-register-input"
      type="text"
      autofocus
      placeholder="아이디 (영문 소문자, 숫자 포함 6-13자) "
      v-model="id"
    />
    <div class="line"></div>
    <button
      class="patient-register-enroll"
      @click.prevent="$emit(`regist`, id)"
    >
      등록
    </button>
  </Modal>
</template>

<script>
import Modal from "@/components/Common/Modal.vue";

export default {
  components: {
    Modal,
  },
  props: ['show'],
  data() {
    return {
      id: "",
    };
  },
};
</script>

<style>
.patient-register-description {
  font-size: 30px;
  font-family: NanumBarunGothicOTF;
  text-align: center;
}
.patient-register-input {
  width: 451.4px;
  height: 42px;
  font-size: 18px;
  font-family: NanumBarunGothicOTF;
  line-height: 42px;
  outline: none;
  margin: 20px auto;
  display: block;
}
.patient-register-enroll {
  width: 283.7px;
  height: 58px;
  border-radius: 100px;
  box-shadow: 0 3px 12px 0 #4b74ff;
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  font-style: normal;
  font-stretch: normal;
  line-height: 58px;
  letter-spacing: normal;
  text-align: center;
  color: #fcfcfc;
  border: none;
  display: block;
  margin: 20px auto;
}
</style>
