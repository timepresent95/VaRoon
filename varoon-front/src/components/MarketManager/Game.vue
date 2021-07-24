<template>
  <div class="game">
    <h1 class="game-title">{{ descript.title }}</h1>
    <div class="game-line"></div>
    <div class="game-content">
      <div class="game-left">
        <h2 class="game-tag-title">Tags</h2>
        <ul class="game-tags">
          <li v-for="val in descript.category" :key="val">{{ val }}</li>
        </ul>
        <div class="game-image-box">
          <ul class="ingame-images">
            <li>
              <img class="small-ingame-image" src="@/images/dif.png" />
            </li>
            <li>
              <img class="small-ingame-image" src="@/images/dif.png" />
            </li>
            <li>
              <img class="small-ingame-image" src="@/images/dif.png" />
            </li>
            <li>
              <img class="small-ingame-image" src="@/images/dif.png" />
            </li>
            <li>
              <img class="small-ingame-image" src="@/images/dif.png" />
            </li>
            <li>
              <img class="small-ingame-image" src="@/images/dif.png" />
            </li>
          </ul>
          <img class="big-ingame-image" src="@/images/dif.png" />
        </div>
      </div>
      <div class="game-descript-box">
        <div class="age">{{ descript.useAge }}세 이용가</div>
        <div class="title">{{ descript.title }}</div>
        <div class="update-date">{{ descript.updateDate }}</div>
        <div class="evaluation">
          <p
            style="
              color: #4b74ff;
              width: 41px;
              height: 30px;
              display: inline-block;
              font-family: NanumBarunGothicBoldOTF;
              font-size: 28px;
              margin-right: 3px;
            "
          >
            {{ descript.rating }}
          </p>
          <p
            style="
              width: 37px;
              height: 19px;
              font-family: NanumBarunGothicOTF;
              font-size: 17px;
              font-weight: 300;
              display: inline-block;
              text-align: left;
              color: #a6a6a6;
              padding-top: -5px;
              position: relative;
              bottom: 4px;
              margin-right: 10px;
            "
          >
            / 5.0
          </p>
          <p
            style="
              width: 176px;
              height: 16px;
              font-family: NanumBarunGothicOTF;
              font-size: 14px;
              font-weight: 200;
              text-align: left;
              color: #a6a6a6;
            "
          >
            {{ descript.ratingNum }}명의 사용자가 평가했습니다
          </p>
        </div>
        <div class="game-descript-line" style="margin-bottom: 29.3px"></div>
        <div class="game-dscript" style="margin-bottom: 50.7px">
          <p>
            Asia-Pacific Common Residential Theme , the first package from Asset
            Store Originals, contains a large range of assets, including mo-
            dular exterior and interior of buildings, props, and vehicles all
            assem- bled in a beautifully crafted sample scene. This package was
            created by industry veterans to provide you with the highest quality
            assets, built with great attention to detail and high fidelity.
          </p>
          <br />
          <p>
            This pack is ideal for anyone who wants to bring their work to the
            next level by creating high-end, AAA quality projects. Compatible
            with Unity 2018.3 and beyond.
          </p>
          <br />
          <p>
            Due to changes in HDRP, this package currently is not supported in
            2019.1. We will be updating it in the coming months to add 2019
          </p>
        </div>
        <div class="game-descript-line" style="margin-bottom: 43.3px"></div>
        <button class="contain">담기</button>
        <button class="pay">구매</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      descript: {
        title: "Fruit Cutting",
        updateDate: "2019.07.01",
        useAge: 15,
        category: ["전략", "시뮬레이션", "사시", "약시"],
        rating: 3.5,
        ratingNum: 40,
      },
    };
  },
};
</script>
<style>
.game {
  min-height: calc(100vh - 221px);
}
.game h1,
.game h2,
.game h3 {
  font-weight: normal;
}
.game-title {
  height: 20px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 18px;
}
.game-line {
  width: 100%;
  height: 0;
  border: solid 0.5px #d9d9d9;
  margin: 20px 0;
}
.game-content {
  display: flex;
}
.game-tag-title {
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  color: #a6a6a6;
}
.game-tags {
  list-style: none;
  display: flex;
  margin: 20px 0;
}
.game-tags li {
  width: 100px;
  border-radius: 30px;
  border: solid 1px #e2e2e2;
  text-align: center;
  line-height: 2.1;
  margin-right: 11px;
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  color: #a6a6a6;
}
.game-image-box {
  display: flex;
}
.ingame-images {
  list-style: none;
  margin-right: 10px;
}
.ingame-images li {
  height: 59px;
  margin-bottom: 11px;
}
.small-ingame-image {
  width: 102px;
  height: 59px;
  cursor: pointer;
}
.big-ingame-image {
  width: 542px;
  height: 409px;
  object-fit: contain;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}
.game-descript-box {
  margin-left: 30px;
  padding: 30px;
}
.game-descript-box .age {
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  color: #4b74ff;
  margin-bottom: 20px;
}
.game-descript-box .title {
  font-family: NanumBarunGothicLightOTF;
  font-size: 28px;
  line-height: 1.36;
  margin-bottom: 18px;
}
.game-descript-box .update-date {
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  line-height: 2.86;
  color: #a6a6a6;
  margin-bottom: 20px;
}

.game-descript-box .game-dscript {
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  line-height: 1.57;
  color: #6f6f6f;
}
.game-descript-line {
  width: 100%;
  border: solid 0.5px #e2e2e2;
}
.game-descript-box button {
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
  line-height: 1.88;
  text-align: center;
  color: #4b74ff;
  outline: 0;
}
.game-descript-box button:hover {
  background-color: #4b74ff;
  color: #fff;
}
</style>