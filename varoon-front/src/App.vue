<template>
  <div id="app">
    <TopNavi />
    <router-view class="container"></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import TopNavi from "./components/TopNavi.vue";

export default {
  name: "app",
  components: {
    Footer,
    TopNavi
  },
  data() {
    return {};
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body,
#app {
  width: 100%;
  margin: 0px;
}
ul, li, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
      display: none;
}
.container {
  position: relative;
}
a {
  text-decoration: none;
}

</style>
