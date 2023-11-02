<template>
    <TopNavigation/>
    <router-view class="container"></router-view>
    <Footer/>
</template>

<script>
import Footer from "./components/Footer.vue";
import TopNavigation from "./components/TopNavigation.vue";

export default {
  name: "app",
  components: {
    Footer,
    TopNavigation
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @extend .font-regular;
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

button {
  background-color: transparent;
  outline: none;
  border: none;
}

</style>
<style scoped>
.container {
  flex: 1;
}
</style>
