<template>
  <section class="carousel" @mouseover="clearIndicatorInterval" @mouseout="createIndicatorInterval">
    <div class="image-queue" ref="queue">
      <img v-for="(image) in images" :key="image.alt" :src="image.src" :alt="image.alt"/>
    </div>
    <div class="indicator-wrapper mbox mt-20">
      <button v-for="i in images.length" :key="i" class="indicator"
              :class="{'indicator-active': indicatorIndex === i - 1}"
              @click="onClickIndicator(i - 1)"
      />
    </div>
  </section>
</template>
<script setup>
import {ref, watch, onUnmounted} from 'vue';

defineProps({images: {type: Array, required: true}})

const queue = ref(null);
const indicatorIndex = ref(0);

let intervalId = null;

function createIndicatorInterval() {
  if (intervalId !== null) {
    return;
  }
  intervalId = setInterval(() => {
    indicatorIndex.value = (indicatorIndex.value + 1) % 4
  }, 2000)
}

function clearIndicatorInterval() {
  if (intervalId === null) {
    return;
  }
  clearInterval(intervalId)
  intervalId = null
}

function onClickIndicator(index) {
  clearIndicatorInterval();
  indicatorIndex.value = index;
}

watch(queue, (value) => {
  if (value === null) {
    return;
  }
  createIndicatorInterval()
});

watch(indicatorIndex, (value) => {
  if (intervalId === null) {
    createIndicatorInterval()
  }
  queue.value.style.transform = `translateX(${-100 * value}%)`
})

onUnmounted(() => clearIndicatorInterval())

</script>
<style scoped lang="scss">
.carousel {
  width: 100%;
  overflow-x: hidden;
  position: relative;

  .image-queue {
    display: flex;
    transition: 1s;

    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 5/2;
    }
  }

  .indicator-wrapper {
    display: flex;
    justify-content: center;

    .indicator {
      max-width: 200px;
      min-width: 80px;
      height: 6px;
      background-color: $g2;
      border-radius: 4px;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 12px;
      }

      &-active {
        background-color: $p1;
      }
    }
  }
}
</style>
