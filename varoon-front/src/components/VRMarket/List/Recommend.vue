<template>
  <section class="recommend">
    <section v-for="{title, data} in recommends" :key="title" class="category mt-20 pb-20">
      <h2 class="text-h2b">{{ title }}</h2>
      <p class="text-body1 text-center py-40" v-if="data.length === 0">등록된 컨텐츠가 없습니다.</p>
      <ol class="mt-20" v-else>
        <router-link :to="{name: 'vr-market-game', params: {id}}" custom v-slot="{navigate}" v-for="({id, image, info}, index) in data" :key="index">
          <li @click="navigate">
            <img :src="image.url" :alt="image.alt"/>
            <h3 class="text-h4 mt-8">{{ info.title }}</h3>
          </li>
        </router-link>
      </ol>
    </section>
  </section>
</template>
<script setup>
import {defineProps, onMounted} from 'vue'

defineProps({recommends: {type: Array, required: true}})

</script>
<style scoped lang="scss">
.recommend {
  width: 100%;

  .category {
    &:not(:last-child) {
      border-bottom: solid 1px $g2;
    }

    ol {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;

      li {
        min-width: 100%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        padding: 8px 16px;

        &:hover {
          background-color: $g1;
        }

        img {
          width: 100%;
          height: 120px;
          object-fit: fill;
        }

        h3 {
          min-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          word-break: break-all;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
