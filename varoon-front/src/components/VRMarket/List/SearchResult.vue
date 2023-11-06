<template>
  <section class="search-result">
    <h2 class="text-h2 mt-20">"{{ searchInput }}" 검색 결과</h2>
    <p class="text-h2 text-center py-40" v-if="results.length === 0">일치하는 컨텐츠가 없습니다</p>
    <ul class="mt-40" v-else>
      <router-link :to="{name: 'vr-market-game', params: {id}}" custom v-slot="{navigate}" v-for="({id, image, info}) in results" :key="info.title">
        <li @click="navigate">
          <img :src="image.url" :alt="image.alt" class="mr-20"/>
          <div class="description text-body1 mr-20">
            <h3 class="text-h3b">{{ info.title }}</h3>
            <p class="mt-8">{{ info.description }}</p>
          </div>
          <div class="info">
            <h4 :class="`grade-${info.grade}`" class="text-h4b">{{ gradeToString(info.grade) }}</h4>
            <p class="text-body1">{{ formatWon(info.price) }}</p>
          </div>
        </li>
      </router-link>
    </ul>
  </section>
</template>
<script setup>
import {formatWon} from '@/utils/format'
import {gradeToString} from '@/utils/grade'

defineProps({
  searchInput: {type: String, requires: true},
  results: {type: Array, required: true}
})


</script>
<style scoped lang="scss">
.search-result {
  li {
    width: 100%;
    display: flex;
    cursor: pointer;
    height: 200px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    img {
      width: 300px;
      height: 100%;
      object-fit: cover;
    }

    .description {
      flex: 1;
      overflow-y: hidden;
      height: 100%;

      & > h3 {
        overflow-x: hidden;
        white-space: nowrap;
        word-break: break-all;
        text-overflow: ellipsis;
      }

      & > p {
        height: 10rem;
        overflow: hidden;
        word-break: break-word;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 7;
        color: $g4;
      }
    }

    .info {
      flex-basis: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
}
</style>
