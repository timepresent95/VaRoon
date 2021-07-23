<template>
  <div>
    <SellerLeft />
    <SDKDownload v-if="sellingComponent === 'sdk'" />
    <ResistContents v-else-if="sellingComponent === 'resist'" />
    <SellingContents v-else-if="sellingComponent === 'contents'" />
    <Revenue v-else-if="sellingComponent === 'revenue'" />
  </div>
</template>
<script>
import SellerLeft from "@/components/SellerLeft.vue";
import SDKDownload from "@/components/SDKDownload.vue";
import ResistContents from "@/components/ResistContents.vue";
import SellingContents from "@/components/SellingContents.vue";
import Revenue from "@/components/Revenue.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    SellerLeft,
    SDKDownload,
    ResistContents,
    SellingContents,
    Revenue
  },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState(["sellingComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_SELLING_COMPONENT"])
  }
};
</script>
<style>
</style>
