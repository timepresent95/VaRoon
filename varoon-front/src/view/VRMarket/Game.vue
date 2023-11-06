<template>
  <section class="game">
    <div class="content" v-if="gameInfo !== null">
      <div class="tag-wrapper py-16 pr-8">
        <h4 class="text-body1 mr-8">Tags:</h4>
        <ul class="tag-list text-g4">
          <li v-for="tag in gameInfo.info.tags" class="tag text-body2 px-8">{{ tag }}</li>
        </ul>
      </div>
      <div class="game-information-wrapper mt-20">
        <ul class="thumbnails mr-12">
          <li class="thumbnail" :class="{'thumbnail-selected': selectedThumbnailIndex === index}"
              v-for="(thumbnail, index) in gameInfo.thumbnails" :key="index" @click="selectedThumbnailIndex = index">
            <img
              :src="thumbnail.url"
              :alt="thumbnail.alt"
            />
          </li>
        </ul>
        <img
          class="main-image mr-16"
          :src="gameInfo.thumbnails[selectedThumbnailIndex].url"
          :alt="gameInfo.thumbnails[selectedThumbnailIndex].alt"
        />
        <div class="information">
          <p :class="`grade-${gameInfo.info.grade}`" class="text-body1b text-right">
            {{ gradeToString(gameInfo.info.grade) }}</p>
          <h2 class="title text-h2b text-right mt-8">{{ gameInfo.info.title }}</h2>
          <p class="text-body3 text-right text-g3 mt-8">{{ gameInfo.info.updatedDate }}</p>
          <p class="text-body3 text-right text-p1">{{ gameInfo.info.rating }}</p>
        </div>
      </div>
      <h4 class="text-body1b mt-20">게임 소개:</h4>
      <p class="description text-body3 text-g4 mt-8 mb-20">{{ gameInfo.info.description }}</p>
      <div class="button-wrapper py-20">
        <button class="add text-h4 mr-16" @click="onclickAdd"> 담기</button>
        <button class="buy text-h4 mr-16" @click="onclickBuy"> 구매</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import {ref, onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router'

import MockGames from "@/assets/mock/games";
import {gradeToString} from "@/utils/grade";

const route = useRoute()
const router = useRouter()
const gameInfo = ref(null)
const selectedThumbnailIndex = ref(0)

function onclickAdd() {
  router.push({name: 'vr-market-cart'})
}

function onclickBuy() {
  router.push({name: 'vr-market-cart'})
}

onMounted(() => {
  const game = MockGames.games[route.params.id]
  if (game === undefined) {
    return router.replace({name: 'error'})
  }
  gameInfo.value = game;
})

</script>
<style scoped lang="scss">
.game {
  width: 100%;

  .tag-wrapper {
    display: flex;
    align-items: center;
    border-bottom: solid 1px $g2;

    .tag-list {
      display: flex;

      .tag {
        border: solid 1px $g4;
        border-radius: 4px;

        &:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }

  .game-information-wrapper {
    display: flex;
    width: 100%;

    .thumbnails {

      .thumbnail {
        width: 90px;
        height: 60px;
        cursor: pointer;

        &-selected {
          border: solid 4px $p1;
        }

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }

    .main-image {
      max-width: 360px;
      max-height: 360px;
      aspect-ratio: 1/1;
      object-fit: contain;
      background-color: $b100;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    }

    .information {
      width: 200px;

      .title {
        word-break: break-all;
      }
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    border-top: solid 1px $g2;

    button {
      padding: 8px 24px;
      border-radius: 6px;
    }

    .add {
      border: solid 1px $p1;
      color: $p1;
    }

    .buy {
      color: $w1;
      background-color: $p1;
    }
  }
}
</style>
