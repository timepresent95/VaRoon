<template>
  <section class="find-account">
    <FindId v-if="findComponent === 'id'"></FindId>
    <FindPassword v-else-if="findComponent === 'pass'"></FindPassword>
    <NewPassword  v-else-if="findComponent === 'newPass'"/>
    <CompleteChange v-else-if="findComponent === 'complete'" />
  </section>
</template>
<script>
import { mapState } from "vuex";

import FindId from "@/components/LoginManager/Find/FindId.vue";
import FindPassword from "@/components/LoginManager/Find/FindPassword.vue";
import NewPassword from "@/components/LoginManager/Find/NewPassword.vue";
import CompleteChange from "@/components/LoginManager/Find/CompleteChange.vue";

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
