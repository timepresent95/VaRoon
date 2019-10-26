<template>
  <div class="uploadContents">
    <div class="uploadTitle">컨텐츠 업로드</div>
    <div class="uploadTable">
      <div class="uploadTableTag">
        <div class="uploadNo">번호</div>
        <div class="uploadTableTitle">제목</div>
        <div class="uploadDate">업로드 일시</div>
        <div class="uploadResult">결과 일시</div>
        <div class="uploadSize">용량</div>
        <div class="uploadDown">다운로드</div>
      </div>
      <div
        class="uploadTableContent"
        v-for="(item, index) in uploadList"
        :key="index"
        v-if="(index) < listNo * 10 && (index) >= (listNo - 1) * 10"
      >
        <div class="uploadNo">{{numbering(index)}}</div>
        <div class="uploadTableTitle">{{uploadList[index][0]}}</div>
        <div class="uploadDate">{{uploadList[index][1]}}</div>
        <div class="uploadResult">{{uploadList[index][2]}}</div>
        <div class="uploadSize">{{uploadList[index][3]}}</div>
        <div class="uploadDown">{{uploadList[index][4]}}</div>
      </div>
      <div class="uploadlistNumber">
        <span
          :class="{'uploadBlue' : listNo === index}"
          @click.prevent="chgLiNo(index)"
          v-for="index in listCnter"
          :key="index"
        >{{index}}</span>
      </div>
      <div class="uploadChangeBtn">변환 희망 파일 업로드</div>
      <div class="uploadBtn">SDK로 개발된 파일 업로드</div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listCnter() {
      return Math.ceil(this.uploadList.length / 10);
    }
  },
  data() {
    return {
      listNo: 1,
      uploadList: [
        ["lol", "2019 . 02 . 13", "반려", "-", "-"],
        ["naruto oline", "2019 . 02 . 13", "변환 중", "-", "-"],
        [
          "용과 같이 5",
          "2014 . 01 . 11",
          "2019 . 02 . 13",
          "1.3 G",
          "Download"
        ],
        ["Civilization 5", "2019 . 02 . 21", "변환 중", "-", "-"],
        ["Civilization 5", "2012 . 02 . 12", "반려", "-", "-"],
        [
          "Civilization 5",
          "2019 . 04 . 13",
          "2019 . 02 . 13",
          "2.3 G",
          "Download"
        ],
        ["Civilization 5", "2019 . 06 . 13", "변환 중", "-", "-"],
        [
          "Civilization 5",
          "2019 . 04 . 13",
          "2019 . 02 . 13",
          "1.4 G",
          "Download"
        ],
        [
          "naruto oline",
          "2019 . 08 . 13",
          "2019 . 02 . 13",
          "1.1 G",
          "Download"
        ],
        ["naruto oline", "2019 . 01 . 13", "변환 중", "-", "-"],
        ["naruto oline", "2019 . 11 . 13", "반려", "-", "-"]
      ]
    };
  },
  methods: {
    numbering(index) {
      if (index + 1 < 10) return "0" + (index + 1);
      return index + 1;
    },
    chgLiNo(idx) {
      this.listNo = idx;
    }
  }
};
</script>
<style>
.uploadContents {
  width: 1620px;
  position: relative;
  left: 308px;
  background-color: #ffffff;
  height: 1080px;
}
.uploadTitle {
  width: 179px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  position: absolute;
  left: 75px;
  top: 64px;
}
.uploadTable {
  width: 1164px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
  border-right: solid 0.5px #d9d9d9;
  position: absolute;
  left: 75px;
  top: 143px;
}
.uploadTableTag {
  width: 1164px;
  height: 50px;
  background-color: rgba(226, 226, 226, 0.24);
  border-bottom: solid 0.5px #d9d9d9;
}
.uploadTableContent {
  width: 1164px;
  height: 50px;
  border-bottom: solid 0.5px #d9d9d9;
}
.uploadNo {
  width: 85.1px;
  height: 50px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  float: left;
  line-height: 50px;
  text-align: center;
  color: #000000;
}
.uploadTableTitle {
  width: 195.3px;
  height: 50px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  float: left;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.uploadDate {
  width: 232.8px;
  height: 50px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  float: left;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.uploadResult {
  width: 232.8px;
  height: 50px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  float: left;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.uploadSize {
  width: 234.4px;
  height: 50px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  float: left;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.uploadDown {
  width: 177px;
  height: 50px;
  z-index: 2;
  float: left;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.uploadChangeBtn {
  width: 320px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: rgba(75, 116, 255, 1);
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 750px;
  left: 270px;
}
.uploadBtn {
  width: 320px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: rgba(75, 116, 255, 1);
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 750px;
  left: 650px;
}
.uploadlistNumber {
  width: 158px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: 300;
  position: absolute;
  text-align: center;
  top: 637px;
  left: 550px;
}
.uploadlistNumber span {
  margin-right: 10px;
}
.uploadBlue {
  font-weight: bold;
  color: rgba(75, 116, 255, 1);
}
</style>
