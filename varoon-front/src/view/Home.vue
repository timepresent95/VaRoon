<template>
  <section class="home">
    <div class="author">{{ author }}</div>
    <p class="home-dscript">
      원하는
      <span id="emphasis">카테고리</span> <br />
      를 선택해주세요
    </p>
    <div class="home-descript2">VR 컨텐츠 또는 치료 경과를 확인해보세요</div>
    <div class="here">
      <router-link class="pageimg-anchor" to="/MarketManager">
        <img
          class="pageimg"
          id="first"
          src="@/images/home-vrmarket-img@2x.png"
        />
      </router-link>
      <router-link
        class="pageimg-anchor"
        v-if="role === 'ROLE_Patient'"
        to="/PatientCenter"
      >
        <img
          class="pageimg"
          id="second"
          src="@/images/home-mediboard-img@2x.png"
        />
      </router-link>
      <router-link class="pageimg-anchor" v-else to="/SellerManager">
        <img
          class="pageimg"
          id="second"
          src="@/images/home-salescenter-img@2x.png"
        />
      </router-link>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      author: "For User",
    };
  },
  computed: {
    ...mapState(["role"]),
  },
  methods: {
    refresh() {
      location.reload();
    },
  },
  mounted() {
    if (this.role === "ROLE_Doctor") this.$router.push("/DoctorCenter");
  },
};
</script>
<style>
.home {
  width: 950.2px;
  margin: 0 auto;
  padding: 30px;
  height: calc(100vh - 191px);
}
.author {
  width: 300px;
  height: 19px;
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  color: #4b74ff;
  margin-left: 4px;
}

.home-dscript {
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 32px;
  text-align: left;
  color: #000000;
}
.home-dscript #emphasis {
  color: #4b74ff;
  display: inline-block;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: left;
}

.home-descript2 {
  width: 600px;
  height: 19px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: left;
  color: #bdbdbd;
}

.here {
  display: flex;
}

.pageimg {
  margin-top: 23px;
  width: 454px;
  height: 637.1px;
  opacity: 0.48;
  border-radius: 3px;
  background-color: #ffffff;
}
.pageimg-anchor {
  position: relative;
}
.pageimg-anchor::after {
  width: 454px;
  height: 637.1px;
  position: absolute;
  right: 0;
  bottom: 0;
  content: "";
  background: rgba(75, 116, 255, 0.25);
  z-index: 3;
  opacity: 0;
  transition: all 1s;
}
.pageimg-anchor:hover::after {
  opacity: 1;
}

.pageimg#second {
  margin-left: 42.2px;
}
</style>