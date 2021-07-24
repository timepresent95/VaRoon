<template>
  <div class="client-content">
    <h1 class="client-title">클라이언트 다운로드</h1>
    <div class="client-down-box">
      <div class="client-down-tag">VaRoon Client 1.1</div>
      <button class="client-down-button">Download</button>
    </div>
  </div>
</template>
<script>
import AWS from "aws-sdk";
export default {
  data() {
    return {
      gameId: "VR게임 제목",
      playTime: 0,
    };
  },
  methods: {
    fileDown() {
      const s3 = new AWS.s3();
      AWS.config.update({ accessKeyId: "", secretAccessKey: "" });
      const myBucket = "varoon";
      const myKey = "";
      const signedUrlExpireSeconds = 60 * 5; // your expiry time in seconds.
      const url = s3.getSignedUrl("getObject", {
        Bucket: myBucket,
        Key: myKey,
        Expires: signedUrlExpireSeconds,
      });
    },
  },
};
</script>
<style>
.client-content {
  min-height: calc(100vh - 221px);
}
.client-title {
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: normal;
}
.client-down-box {
  width: 80%;
  height: 276px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.client-down-tag {
  height: 46px;
  font-family: NanumBarunGothicOTF;
  font-size: 40px;
  text-align: center;
}
.client-down-button {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: rgb(75, 116, 255);
  text-align: center;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  color: #ffffff;
  cursor: pointer;
  border: none;
}
</style>
