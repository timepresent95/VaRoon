<template>
  <Modal>
    <div slot="header">
      <span style="
  font-family: NanumBarunGothicOTF;
  display: inline-block;
      ">추가할 환자</span>
      정보를 입력하세요
    </div>
    <div slot="body">
      <input type="text" autofocus placeholder="아이디 (영문 소문자, 숫자 포함 6-13자) " v-model="id" />
      <div class="line"></div>
    </div>
    <div slot="footer">
      <button @click.prevent="$emit(`regist`, id)">등록</button>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      id: ""
    };
  }
};
</script>

<style>
</style>