<template>
  <div>
    <div class="gameTitle">{{descript.title}}</div>
    <div class="gameLine"></div>
    <div class="gameTagTitle">Tags</div>
    <ul class="gameTags">
      <li v-for="val in descript.category" :key="val">{{val}}</li>
    </ul>
    <div class="gameImageBox">
      <ul class="ingameImages">
        <li>
          <img class="smallInagameImage" src="../images/36@2x.png" />
        </li>
        <li>
          <img class="smallInagameImage" src="../images/36@2x.png" />
        </li>
        <li>
          <img class="smallInagameImage" src="../images/36@2x.png" />
        </li>
        <li>
          <img class="smallInagameImage" src="../images/36@2x.png" />
        </li>
        <li>
          <img class="smallInagameImage" src="../images/36@2x.png" />
        </li>
        <li>
          <img class="smallInagameImage" src="../images/36@2x.png" />
        </li>
      </ul>
      <img class="bigIngameImage" src="../images/36@2x.png" />
    </div>
    <div class="gameDescriptBox">
      <div class="age">{{descript.useAge}}세 이용가</div>
      <div class="title">{{descript.title}}</div>
      <div class="updateDate">{{descript.updateDate}}</div>
      <div class="evaluation">
        <span
          style="color: #4b74ff;width: 41px;
                height: 30px;
                display: inline-block;
                font-family: NanumBarunGothicBoldOTF;
                font-size: 28px;
                margin-right: 3px"
        >{{descript.rating}}</span>
        <span
          style="width: 37px;
                height: 19px;
                font-family: NanumBarunGothicOTF;
                font-size: 17px;
                font-weight: 300;
                font-style: normal;
                font-stretch: normal;
                display: inline-block;
                letter-spacing: normal;
                text-align: left;
                color: #a6a6a6;
                padding-top: -5px;
                position: relative;
                bottom: 4px;
                margin-right: 130px"
        >/ 5.0</span>
        <span
          style="
  width: 176px;
  height: 16px;
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a6a6a6;
"
        >{{descript.ratingNum}}명의 사용자가 평가했습니다</span>
      </div>
      <div class="gameDescriptLine" style="margin-bottom: 29.3px;"></div>
      <div class="gameDescript" style="margin-bottom: 50.7px;">
        <p>
          Asia-Pacific Common Residential Theme , the first package from
          Asset Store Originals, contains a large range of assets, including mo-
          dular exterior and interior of buildings, props, and vehicles all assem-
          bled in a beautifully crafted sample scene. This package was created
          by industry veterans to provide you with the highest quality assets,
          built with great attention to detail and high fidelity.
        </p>
        <br />
        <p>
          This pack is ideal for anyone who wants to bring their work to the next
          level by creating high-end, AAA quality projects. Compatible with
          Unity 2018.3 and beyond.
        </p>
        <br />
        <p>
          Due to changes in HDRP, this package currently is not supported in
          2019.1. We will be updating it in the coming months to add 2019
        </p>
      </div>
      <div class="gameDescriptLine" style="margin-bottom: 43.3px;"></div>
      <button class="contain">담기</button>
      <button class="pay">구매</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      descript: {
        title: "Asia-Pacific Common Residential Theme Pack",
        updateDate: "2019.07.01",
        useAge: 15,
        category: ["전략", "시뮬레이션", "사시", "약시"],
        rating: 3.5,
        ratingNum: 40
      }
    };
  }
};
</script>
<style>
.gameTitle {
  height: 20px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  position: absolute;
  left: 380px;
  top: 38px;
}
.gameLine {
  width: 1619px;
  height: 0;
  border: solid 0.5px #d9d9d9;
  position: absolute;
  top: 89px;
  left: 310px;
}
.gameTagTitle {
  width: 34px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a6a6a6;
  line-height: 2.5;
  position: absolute;
  top: 132px;
  left: 380px;
}
.gameTags {
  position: absolute;
  top: 128.7px;
  left: 437px;
  list-style: none;
}
.gameTags li {
  width: 100px;
  height: 25.6px;
  border-radius: 30px;
  border: solid 1px #e2e2e2;
  text-align: center;
  line-height: 2.1;
  margin: 11px;
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #a6a6a6;
  float: left;
}
.ingameImages {
  list-style: none;
  position: absolute;
  top: 183.9px;
  left: 382px;
}
.ingameImages li {
  height: 59px;
  margin-bottom: 11px;
}
.smallInagameImage {
  width: 102px;
  height: 59px;
  cursor: pointer;
}
.bigIngameImage {
  width: 542px;
  height: 409px;
  object-fit: contain;
  position: absolute;
  top: 183.7px;
  left: 503.3px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}
.gameDescriptBox {
  position: absolute;
  top: 180px;
  left: 1100px;
}
.gameDescriptBox .age {
  width: 97px;
  height: 19px;
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4b74ff;
  margin-bottom: 20px;
}
.gameDescriptBox .title {
  width: 428px;
  height: 70px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 28px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 18px;
}
.gameDescriptBox .updateDate {
  width: 86px;
  height: 16px;
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.86;
  letter-spacing: normal;
  text-align: left;
  color: #a6a6a6;
  margin-bottom: 43px;
}

.gameDescriptBox .gameDescript {
  width: 445px;
  height: 280px;
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
}
.gameDescriptLine {
  width: 441px;
  height: 0;
  border: solid 0.5px #e2e2e2;
}
.gameDescriptBox button {
  width: 215.3px;
  height: 58px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  background-color: #ffffff;
  padding: 0.5em 1.5em;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: inset 0 0 0 0 #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: center;
  color: #4b74ff;
  outline: 0;
}
.gameDescriptBox button:hover {
  background-color: #4b74ff;
  color: #fff;
}
</style>