<template>
  <div>
    <img
      class="slider"
      :src="images[Math.abs(currentNumber) % images.length]"
      @mouseover="stopRotation"
      @mouseout="startRotation"
    />
    <div class="bar-content" @mouseover="stopRotation" @mouseout="startRotation">
      <a
        href
        v-for="number in images.length"
        :key="number"
        @click.prevent="currentNumber = number-1"
        class="bar-anchor"
      >
        <div v-if="((currentNumber) % images.length) === number-1" class="bar" :class="'current'"></div>
        <div v-else class="bar" :class="'not-current'"></div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentNumber: 0,
      timer: null,
      images: [
        require("@/images/main-vr-man-img@2x.png"),
        "http://placehold.it/1920x722",
        require("@/images/main-vr-man-img@2x.png"),
        "http://placehold.it/1920x722",
      ]
    };
  },
  mounted() {
    this.startRotation();
  },
  methods: {
    startRotation() {
      this.timer = setInterval(() => {
        this.currentNumber += 1;
      }, 3000);
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style>
.slider {
  width: 100%;
  height: auto;
}
.bar-content {
  width: 275px;
  margin: 30px auto;
  display: flex;
}
.bar{
  width: 85px;
  height: 0;

}
.bar-anchor:not(:last-child) {
  margin-right: 10px;
}
.current {
  border: solid 3px #4b74ff;
}
.not-current {
  border: solid 3px black;
}
</style>
