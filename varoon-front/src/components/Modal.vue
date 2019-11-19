<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a href class="madalClose">&times;</a>
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">default footer</slot>
          </div>
        </div>
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 972px;
  height: 584px;
  border-radius: 3px;
  box-shadow: 15px 20px 30px 0 rgba(0, 0, 0, 0.12);
  border: solid 0.5px #ededed;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.modal-header button {
  position: relative;
  top: px;
  left: 500px;
}

.modal-header {
  width: 451.4px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 32px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  position: relative;
  top: 107.1px;
  left: 276px;
  height: 37px;
  line-height: 37px;
}

.modal-body input {
  width: 451.4px;
  height: 42px;
  position: relative;
  top: 217.1px;
  left: 276px;
  font-size: 18px;
  font-family: NanumBarunGothicOTF;
  border: 0px;
  line-height: 42px;
  text-align: center;
  outline: none;
}

.modal-body .line {
  width: 451.4px;
  height: 0;
  border: solid 0.5px #a6a6a6;
  position: relative;
  top: 217.1px;
  left: 276px;
}

.modal-footer button {
  width: 283.7px;
  height: 58px;
  border-radius: 100px;
  box-shadow: 0 3px 12px 0 #4b74ff;
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  font-style: normal;
  font-stretch: normal;
  line-height: 58px;
  letter-spacing: normal;
  text-align: center;
  color: #fcfcfc;
  position: relative;
  top: 300px;
  left: 350px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}
.madalClose {
  position: relative;
  top: 36px;
  left: 916px;
  width: 20px;
  font-size: 50px;
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
