<template>
  <div>
    <FindId v-if="findComponent === 'id'"></FindId>
    <FindPassword v-else-if="findComponent === 'pass'"></FindPassword>
    <NewPassword v-else-if="findComponent === 'newPass'" />
    <CompleteChange v-else-if="findComponent === 'complete'" />
  </div>
</template>
<script>
import { mapState } from "vuex";

import FindId from "./FindId.vue";
import FindPassword from "./FindPassword.vue";
import NewPassword from "./NewPassword.vue";
import CompleteChange from "./CompleteChange.vue";

export default {
  components: {
    FindId,
    FindPassword,
    NewPassword,
    CompleteChange
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["findComponent"])
  }
};
</script>
<style>
ul.tabs {
  display: flex;
}
.tabs li {
  display: inline-block;
  width: 50%;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: #eee;
  color: #999;
}
.tabs li.active {
  background-color: #2ac1bc;
  color: #fff;
}
.list li {
  box-sizing: border-box;
  display: block;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.list li:last-child {
  border-bottom: none;
}
</style>
