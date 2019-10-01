<template>
  <Modal>
    <div slot="header">
      <h2>
        환자 등록
        <a href="" class="modal-default-button">&times;</a>
      </h2>
    </div>
    <div slot="body">
        <input class="form-control" type="text" autofocus>
    </div>
    <div slot="footer">
      <button>
        로그인</button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
</style>