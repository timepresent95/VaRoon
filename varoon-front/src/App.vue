<template>
  <TopNavigation/>
  <router-view class="container"></router-view>
  <Footer/>
</template>

<script setup>
import Footer from "./components/Common/Footer";
import TopNavigation from "./components/Common/TopNavigation";

</script>
<style lang="scss">
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  min-height: 100vh;
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
  cursor: pointer;
}

hr {
  border-color: rgba(0, 0, 0, 0.1);
}

</style>
<style scoped>
.container {
  flex: 1;
}
</style>
