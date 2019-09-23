<template>
  <div>
    <div transition="fade">
      <img
        :src="images[Math.abs(currentNumber) % images.length]"
        @mouseover="stopRotation"
        @mouseout="startRotation"
      />
    </div>
    <div class="dot">
      <a
        href=""
        v-for="number in images.length"
        :key="number"
        @click.prevent="currentNumber = number-1"
      >
        <img v-if="((currentNumber) % images.length) === number-1" :src="require('../images/heart.jpg')"/>
        <img v-else :src="require('../images/broken-heart.jpg')"/>
      </a>
    </div>
  </div>
</template>
<script>
//  <div v-for="number in [currentNumber]" transition="fade" :key="number">
export default {
  data() {
    return {
      currentNumber: 0,
      timer: null,
      images: [
        "http://placehold.it/320x100",
        "http://placehold.it/320x99",
        "http://placehold.it/320x98",
        "http://placehold.it/320x97",
        "http://placehold.it/320x96",
        "http://placehold.it/320x95"
      ],
    };
  },
  mounted() {
    this.startRotation();
  },
  computed:{
    dotImages() {
      const heart = require('../images/heart.jpg')
      const brokenHeart = require('../images/broken-heart.jpg')
       return brokenHeart
    },
    checkCurrent() {
    }
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
    },
  }
};
</script>

<style>
img {
  width: 100%;
  height: auto;
}
.dot {
  width: 100%;
  padding-left: 40%;
}
.dot a {
  text-decoration: none;
  float: left;
  color: rgb(80, 80, 80);
  margin-right: 5px;
  width: 60px;
}
.dot a img{
  background-color: rgba(0, 0, 0, 1);
}
.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave {
  opacity: 0;
  visibility: hidden;
}
</style>
