<template>
  <div class="upload-contents">
    <div class="upload-title">컨텐츠 업로드</div>
    <table class="upload-table">
      <thead>
        <tr>
          <th class="upload-no">번호</th>
          <th class="upload-table-title">제목</th>
          <th class="upload-date">업로드 일시</th>
          <th class="upload-result">결과 일시</th>
          <th class="upload-size">용량</th>
          <th class="upload-down">다운로드</th>
        </tr>
      </thead>
      <tr
        class="upload-table-content"
        v-for="(item, index) in filteredUploadList"
        :key="index"
      >
        <td class="upload-no">{{ numbering(index) }}</td>
        <td class="upload-table-title">{{ uploadList[index][0] }}</td>
        <td class="upload-date">{{ uploadList[index][1] }}</td>
        <td class="upload-result">{{ uploadList[index][2] }}</td>
        <td class="upload-size">{{ uploadList[index][3] }}</td>
        <td class="upload-down">{{ uploadList[index][4] }}</td>
      </tr>
    </table>
    <div class="uploadlist-number">
      <span
        :class="{ 'upload-blue': listNo === index }"
        @click.prevent="chgLiNo(index)"
        v-for="index in listCnter"
        :key="index"
        >{{ index }}</span
      >
    </div>
    <div class="upload-btn-box">
      <button class="upload-change-btn">변환 희망 파일 업로드</button>
      <button class="upload-btn">SDK로 개발된 파일 업로드</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listCnter() {
      return Math.ceil(this.uploadList.length / 10);
    },
    filteredUploadList() {
      return this.uploadList.filter(
        (val, index) =>
          index < this.listNo * 10 && index >= (this.listNo - 1) * 10
      );
    },
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
          "Download",
        ],
        ["Civilization 5", "2019 . 02 . 21", "변환 중", "-", "-"],
        ["Civilization 5", "2012 . 02 . 12", "반려", "-", "-"],
        [
          "Civilization 5",
          "2019 . 04 . 13",
          "2019 . 02 . 13",
          "2.3 G",
          "Download",
        ],
        ["Civilization 5", "2019 . 06 . 13", "변환 중", "-", "-"],
        [
          "Civilization 5",
          "2019 . 04 . 13",
          "2019 . 02 . 13",
          "1.4 G",
          "Download",
        ],
        [
          "naruto oline",
          "2019 . 08 . 13",
          "2019 . 02 . 13",
          "1.1 G",
          "Download",
        ],
        ["naruto oline", "2019 . 01 . 13", "변환 중", "-", "-"],
        ["naruto oline", "2019 . 11 . 13", "반려", "-", "-"],
      ],
    };
  },
  methods: {
    numbering(index) {
      if (index + 1 < 10) return "0" + (index + 1);
      return index + 1;
    },
    chgLiNo(idx) {
      this.listNo = idx;
    },
  },
};
</script>
<style>
.upload-contents {
  background-color: #ffffff;
  min-height: calc(100% - 191px);
  padding: 30px;
}
.upload-title {
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
}
.upload-table {
  border: solid 0.5px #d9d9d9;
  border-collapse: collapse;
}
.upload-contents th {
  background-color: rgba(226, 226, 226, 0.24);
  border-bottom: solid 0.5px #d9d9d9;
}
.upload-table-content {
  height: 50px;
  border-bottom: solid 0.5px #d9d9d9;
}
.upload-no {
  height: 50px;
  width: 85.1px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  line-height: 50px;
  text-align: center;
  color: #000000;
}
.upload-table-title {
  height: 50px;
  width: 195.3px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.upload-date {
  height: 50px;
  width: 232.8px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.upload-result {
  width: 232.8px;
  height: 50px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.upload-size {
  width: 234.4px;
  height: 50px;
  border-right: solid 0.5px #d9d9d9;
  z-index: 2;
  text-align: center;
  color: #000000;
  line-height: 50px;
}
.upload-down {
  width: 177px;
  height: 50px;
  z-index: 2;
  text-align: center;
  color: #000000;
  line-height: 50px;
  text-decoration: underline;
  cursor: pointer;
}
.upload-change-btn {
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
}
.upload-btn {
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
}
.upload-btn-box {
  width: 650px;
  margin: 30px auto;
}
.upload-btn-box button {
  border: none;
  cursor: pointer;
}
.uploadlist-number {
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  margin-top: 30px;
}
.uploadlist-number span {
  margin-right: 10px;
  cursor: pointer;
}
.upload-blue {
  font-weight: bold;
  color: rgba(75, 116, 255, 1);
}
</style>
