<template>
  <main class="main">
    <Carousel :images="images"/>
    <!--    <MainSlider/>-->
    <h1 class="text-h1 text-center mt-40">About VaRoon</h1>
    <div class="core-services mbox mt-40 px-12">
      <div class="service-card">
        <h4 class="text-h4 text-center">
          <span class="text-p1">01</span><br/>
          정확한 측정
        </h4>
        <img src="../images/main/measurement.png" alt="precise measurement"/>
      </div>
      <div class="service-card">
        <h4 class="text-h4 text-center">
          <span class="text-p1">02</span><br/>
          가상 프리즘
        </h4>
        <img src="../images/main/virtual-prism.png" alt="virtual prism"/>
      </div>
      <div class="service-card">
        <h4 class="text-h4 text-center">
          <span class="text-p1">03</span><br/>
          시기능 훈련
        </h4>
        <img src="../images/main/visual-function-training.png" alt="visual function training"/>
      </div>
    </div>
  </main>
</template>
<script setup>
import Carousel from "@/components/Common/Carousel.vue";

const imageUri = import.meta.env.VITE_APP_IMAGE_URI

const images = [
  {src: `${imageUri}/main-vr-man-img@2x.png`, alt: 'introduce service'},
  {src: `${imageUri}/main-vr-man-img@2x.png`, alt: 'introduce service'},
  {src: `${imageUri}/main-vr-man-img@2x.png`, alt: 'introduce service'},
  {src: `${imageUri}/main-vr-man-img@2x.png`, alt: 'introduce service'},
]

</script>
<style scoped lang="scss">
.main {
  width: 100%;
  .core-services {
    background-color: $w1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;

    .service-card {
      box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      padding-top: 16px;

      img {
        margin-top: 20px;
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }
}
</style>
