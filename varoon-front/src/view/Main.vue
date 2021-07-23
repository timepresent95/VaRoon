<template>
  <div>
    <div class="slider">
      <MainSlider />
    </div>
    <div class="main-bottom">
      <h3 class="about-varoon">About VaRoon</h3>
      <div class="core">
        <div class="introduce">
          <div class="num">01</div>
          <div class="name">정확한 측정</div>
          <img src="../images/22@2x.png" />
        </div>
        <div class="introduce">
          <div class="num">02</div>
          <div class="name">가상 프리즘</div>
          <img src="../images/23@2x.png" />
        </div>
        <div class="introduce">
          <div class="num">03</div>
          <div class="name">차별 송출</div>
          <img src="../images/dif.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainSlider from "@/components/MainSlider";

export default {
  components: {
    MainSlider
  }
};
</script>
<style>
.main-bottom {
  width:100%;
  height: 691px;
  text-align: center;
}
.about-varoon {
  height: 42px;
  margin-top: 68.6px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 36px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  display: inline-block;
  font-weight: normal;
  color: #000000;
}
.core {
  margin-top: 33.4px;
  background-color: #fcfcfc;
  height: auto;
  display: flex;
  justify-content: center;
}
.core .introduce {
  width: 357px;
  height: 458px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}

.core .introduce:not(:last-child) {
  margin-right: 44px;
}

.introduce .num {
  margin-top: 46px;
  margin-left: 163px;
  width: 32px;
  height: 32px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 28px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4b74ff;
}

.introduce .name {
  margin-top: 17px;
  height: 27px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 24px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}

.introduce img {
  margin-top: 39px;
  width: 357px;
  height: 297px;
  object-fit: cover;
}
</style>
