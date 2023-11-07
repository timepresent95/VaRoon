<template>
  <section class="information mx-auto mt-20">
    <h4>이름:</h4>
    <p>{{ auth.name }}</p>
    <h4>생년월일: </h4>
    <p>{{ `${auth.birthday.year}-${auth.birthday.month}-${auth.birthday.date}` }}</p>
    <h4>성별:</h4>
    <p>{{ auth.gender === 'male' ? '남성' : '여성' }}</p>
    <h4>이메일:</h4>
    <p>{{ auth.email }}</p>
    <h4>고객 유형:</h4>
    <p>{{ auth.type === 'doctor' ? '의사' : auth.type === 'patient' ? '환자' : '판매자' }}</p>
  </section>
</template>
<script setup>
import {inject} from "vue";

const {auth} = inject('auth');
</script>
<style scoped lang="scss">
.information {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: max-content 1fr;

  h4 {
    @extend .mr-4;
    @extend .text-h4b;
    @extend .text-right;
  }

  p {
    @extend .text-body1;
  }
}
</style>
