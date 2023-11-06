<template>
  <nav class="navigation">
    <router-link v-for="{name, title} in paths" :key="name" :to="{name}"
                 class="text-h4b px-4 pb-4" :class="{'text-p1 current-link': name===route.name}">
      {{ title }}
    </router-link>
  </nav>
</template>
<script setup>
import {useRoute} from 'vue-router'

defineProps({paths: {required: true, type: Array}})
const route = useRoute();


</script>
<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-around;

  .current-link {
    border-bottom: solid 2px $p1;
  }
}
</style>
