<template>
  <transition name="modal">
    <div class="modal-mask">
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
export default {};
</script>
<style>
.modal-mask {
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
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
