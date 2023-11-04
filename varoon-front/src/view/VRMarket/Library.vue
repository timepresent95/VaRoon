<template>
  <section class="library">
    <p class="text-h2b text-center pt-120" v-if="items.length === 0">구매 내역이 없습니다.</p>
    <ul v-else class="item-list mt-20">
      <li class="item item-header text-h4b">
        <h4 class="py-8 px-12">게임 정보</h4>
        <h4 class="py-8 px-12">플레이 시간</h4>
      </li>
      <router-link :to="{name: 'vr-market-game', params: {id}}" custom v-slot="{navigate}"
                   v-for="({id, image, info, playTime}, index) in items" :key="info.title">
        <li class="item" @click="navigate">
          <img
            class="cover py-8 px-12"
            :src="image.url"
            :alt="image.alt"
          />
          <div class="info py-8 px-12">
            <h3 class="title text-h3b">{{ info.title }}</h3>
            <p :class="`grade-${info.grade}`" class="text-body1b">{{ gradeToString(info.grade) }}</p>
            <p class="text-body1">{{ formatWon(info.price) }}</p>
          </div>
          <p class="play-time text-body1 py-8 px-12">{{ formatPlayTime(playTime) }}</p>
        </li>
      </router-link>
    </ul>
  </section>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import MockGames from "@/assets/mock/games";
import {formatPlayTime, formatWon} from "@/utils/format";
import {gradeToString} from "@/utils/grade";

const items = ref([])

onMounted(() => {
  items.value = MockGames.createLibrary();
})

</script>
<style scoped lang="scss">
.library {
  width: 100%;

  .item-list {

    .item {
      display: flex;
      cursor: pointer;
      width: 100%;
      justify-content: space-between;
      border: solid 1px $g2;

      &:not(:last-child) {
        border-bottom: none;
      }

      & > *:last-child {
        width: 120px;
        border-left: solid 1px $g2;
      }

      &:hover {
        background-color: $g1;
      }

      .cover {
        max-height: 120px;
        aspect-ratio: 3/2;
        border-right: solid 1px $g2;
      }

      .info {
        flex: 1;
        overflow-x: hidden;

        .title {
          overflow-x: hidden;
          white-space: nowrap;
          word-break: break-all;
          text-overflow: ellipsis;
        }
      }
    }

    .item-header:hover {
      background-color: inherit;
      cursor: initial;
    }

  }
}
</style>
