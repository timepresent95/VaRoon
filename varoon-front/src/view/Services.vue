<template>
  <section class="services mbox px-16 pt-20">
    <h1 class="text-h1b text-p1">For {{ uerType }}</h1>
    <p class="text-h2 mt-12">
      원하는 <span class="text-p1">카테고리</span>를 선택해주세요
    </p>
    <p class="text-body1 text-g4 mt-4">VR 컨텐츠 구매 또는 치료 경과를 확인해보세요</p>
    <div class="link-container mt-20">
      <router-link class="link" to="/vr-market">
        <img src="../images/services/vr-market.png" alt="vr market"/>
      </router-link>
      <router-link v-if="uerType === 'ROLE_Patient'" class="link" to="/PatientCenter">
        <img src="../images/services/medical-board.png" alt="medical board"/>
      </router-link>
      <router-link class="link" v-else to="/sales-center">
        <img src="../images/services/sales-center.png" alt="sales center"/>
      </router-link>
    </div>
  </section>
</template>
<script setup>
//TODO: 유저의 이용 목적에 맞는 화면 제공 필요
import {ref} from 'vue';

const uerType = ref('Seller');

</script>
<style scoped lang="scss">
.services {
  .link-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    .link {
      border-radius: 4px;
      position: relative;

      &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        transition: opacity 0.8s;
        background: rgba(75, 116, 255, 0.25);
        opacity: 0;
      }

      &:hover:after {
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
      }
    }
  }
}
</style>
