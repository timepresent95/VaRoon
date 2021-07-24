<template>
  <div class="seller-manager">
    <SellerLeft />
    <SDKDownload v-if="sellingComponent === 'sdk'" />
    <ResistContents v-else-if="sellingComponent === 'resist'" />
    <SellingContents v-else-if="sellingComponent === 'contents'" />
    <Revenue v-else-if="sellingComponent === 'revenue'" />
  </div>
</template>
<script>
import SellerLeft from "@/components/SellerManager/SellerLeft.vue";
import SDKDownload from "@/components/SellerManager/SDKDownload.vue";
import ResistContents from "@/components/SellerManager/ResistContents.vue";
import SellingContents from "@/components/SellerManager/SellingContents.vue";
import Revenue from "@/components/SellerManager/Revenue.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    SellerLeft,
    SDKDownload,
    ResistContents,
    SellingContents,
    Revenue,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["sellingComponent"]),
  },
  methods: {
    ...mapMutations(["CHANGE_SELLING_COMPONENT"]),
  },
};
</script>
<style>
.seller-manager {
  min-height: calc(100vh - 191px);
  display: flex;
}
</style>
