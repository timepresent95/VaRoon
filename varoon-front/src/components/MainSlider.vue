<template>
  <div>
    <div transition="fade">
      <img
        class="slider"
        :src="images[Math.abs(currentNumber) % images.length]"
        @mouseover="stopRotation"
        @mouseout="startRotation"
      />
      <div class="current-bar">
        <a
          href
          v-for="number in images.length"
          :key="number"
          @click.prevent="currentNumber = number-1"
        >
          <div v-if="((currentNumber) % images.length) === number-1" :class="'current'"></div>
          <div v-else :class="'notCurrent'"></div>
        </a>
      </div>
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
        require("../images/main-vr-man-img@2x.png"),
        "http://placehold.it/1920x722",
        "http://placehold.it/1920x722"
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
  width: 1920px;
  height: auto;
}
.current-bar {
  top: 639.7px;
  left: 815px;
  position: absolute;
}
.current {
  width: 84.9px;
  height: 0;
  border: solid 3px #4b74ff;
  margin-left: 10px;
  float: left;
}
.notCurrent {
  width: 84.9px;
  height: 0;
  border: solid 3px #ffffff;
  float: left;
  margin-left: 10px;
}
.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}
.fade-enter,
.fade-leave {
  opacity: 0;
  visibility: hidden;
}
</style>
