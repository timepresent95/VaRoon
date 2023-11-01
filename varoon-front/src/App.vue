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
<style lang="scss">
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

ul, li, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
<style scoped>
.container {
  flex: 1;
}
</style>
