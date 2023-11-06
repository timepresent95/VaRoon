<template>
  <section class="client-download">
    <div class="content">
      <h2 class="text-h2b">VaRoon Client 1.0</h2>
      <button class="text-body1 download-button mt-20 py-16 px-8" @click="onclickDownload">Download</button>
    </div>
  </section>
</template>
<script setup>
function onclickDownload() {
  alert('테스트 환경에서는 다운로드가 불가능합니다.')
}

</script>
<style scoped lang="scss">
.client-download {
  width: 100%;
  .content {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .download-button {
      max-width: 400px;
      width: 100%;
      background-color: $p1;
      border-radius: 4px;
      color: $w1;
      box-shadow: 0 3px 10px 0 rgba($p1, 0.6);
    }
  }
}
</style>
