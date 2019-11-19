<template>
  <div>
    <div class="slider">
      <MainSlider />
    </div>
    <div class="main-bottom">
      <div class="About-VaRoon">About VaRoon</div>
      <div class="core">
        <div class="introduce">
          <div id="num">01</div>
          <div id="name">정확한 측정</div>
          <img src="../images/22@2x.png" />
        </div>
        <div class="introduce">
          <div id="num">02</div>
          <div id="name">가상 프리즘</div>
          <img src="../images/23@2x.png" />
        </div>
        <div class="introduce">
          <div id="num">03</div>
          <div id="name">차별 송출</div>
          <img src="../images/dif.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainSlider from "./MainSlider";

export default {
  components: {
    MainSlider
  }
};
</script>
<style>
.main-bottom {
  width: 1920px;
  height: 691px;
  position: relative;
}
.About-VaRoon {
  height: 42px;
  margin-top: 68.6px;
  left: 845px;
  position: relative;
  font-family: NanumBarunGothicLightOTF;
  font-size: 36px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  color: #000000;
}
.core {
  margin-top: 33.4px;
  margin-left: 380px;
  background-color: #fcfcfc;
  height: auto;
}
.core .introduce {
  width: 357px;
  height: 458px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  float: left;
  margin-right: 44px;
}

.introduce #num {
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

.introduce #name {
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
