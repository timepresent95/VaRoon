<template>
  <transition>
    <div v-if="show" class="modal">
      <div class="modal-container">
        <button @click="$emit('modal-close')" class="madal-close">
          &times;
        </button>
        <slot>default body</slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show']
};
</script>
<style>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container {
  width: 972px;
  height: 584px;
  border-radius: 3px;
  box-shadow: 15px 20px 30px 0 rgba(0, 0, 0, 0.12);
  border: solid 0.5px #ededed;
  padding: 20px 30px;
  background-color: #fff;
  transition: all 0.3s ease;
}
.madal-close {
  font-size: 50px;
  display: block;
  margin-left: auto;
  border: none;
  background-color: inherit;
  margin-left: auto;
  cursor: pointer;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from, .v-leave-to {
  transform: scale(1.1);
  opacity: 0;
}

.v-enter-to, .v-leave-from {
  transform: scale(1.0);
  opacity: 1;
}
</style>
