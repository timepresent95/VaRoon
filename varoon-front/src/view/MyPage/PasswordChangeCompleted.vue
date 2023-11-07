<template>
  <section class="password-change-completed mx-auto mt-20">
    <img src="@/images/myPage/password-change-completed.png" alt="password change completed"/>
    <p class="text-h3b text-p1 mt-40">비밀번호 변경이 완료되었습니다</p>
    <p class="text-body1 text-g4 mt-8">아래 버튼을 눌러 서비스를 이용해보세요</p>
    <router-link :to="{name: 'services'}" custom v-slot="{navigate}">
      <button @click="navigate" class="go-to-services-button mt-20 px-16 py-8">서비스 이용하러 가기</button>
    </router-link>
  </section>
</template>
<script setup>
</script>
<style scoped lang="scss">
.password-change-completed {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  .go-to-services-button {
    width: 200px;
    color: $w1;
    border-radius: 4px;
    background-color: $p1;
    cursor: pointer;
  }
}
</style>
