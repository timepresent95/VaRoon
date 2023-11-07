<template>
  <div class="error-404 mbox pt-60 px-16">
    <img src="/images/error-404.png" alt="404 error"/>
    <p class="text-h2b text-center mt-40">찾을 수 없는 페이지를 요청하셨습니다</p>
    <router-link to="/" custom v-slot="{navigate}">
      <button @click="navigate" class="go-home-button text-body1 text-w1 py-8 px-12 mt-40 mx-auto">
        메인 화면으로
      </button>
    </router-link>
  </div>
</template>
<style scoped lang="scss">
.error-404 {
  img {
    width: 100%;
    max-width: 380px;
    object-fit: contain;
  }

  .go-home-button {
    display: block;
    width: 380px;
    background-color: $p1;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    border: none;
  }
}
</style>
