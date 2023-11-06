<template>
  <p class="empty-content text-body1 text-center py-40" v-if="contents.length === 0">등록된 컨텐츠가 없습니다.</p>
  <ul class="my">
    <router-link v-for="({id, image, info}) in contents" :to="{name: 'vr-market-game', params: {id}}"
                 custom v-slot="{navigate}">
      <li class="item" @click="navigate">
        <img
          :src="image.url"
          :alt="image.alt"
        />
        <div class="content-info px-40 py-8 pr-12">
          <h3 class="text-h3b">{{ info.title }}</h3>
          <p :class="`grade-${info.grade}`" class="text-body1b">{{ gradeToString(info.grade) }}</p>
          <p class="text-body2"><span class="mr-4" v-for="tag in info.tags" :key="tag">{{ tag }}</span></p>
          <p class="text-body1">{{ formatWon(info.price) }}</p>
        </div>
      </li>
    </router-link>
  </ul>
</template>
<script setup>
import {onMounted, ref} from "vue";
import MockGames from "@/assets/mock/games";
import {gradeToString} from "@/utils/grade";
import {formatWon} from "@/utils/format";

const contents = ref([]);

onMounted(() => {
  contents.value = MockGames.randomGames.map(val => ({...val, selected: false}));
})
</script>
<style scoped lang="scss">
.my {
  .item {
    display: flex;
    justify-content: space-between;
    border: solid 1px $g3;
    height: 200px;
    cursor: pointer;

    img {
      height: 200px;
      width: 300px;
      object-fit: fill;
    }

    &:not(:last-child) {
      border-bottom: none;
    }

    &:hover {
      background-color: $g1;
    }

    .content-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: solid 1px $g2;
    }
  }
}
</style>
