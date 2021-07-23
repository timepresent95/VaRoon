<template>
  <div class="patentCenter">
    <PatientLeft />
    <div class="patientChart">
      <PDChart v-if="patientComponent === 'pd'" />
      <RangeChart v-else-if="patientComponent === 'range'" />
      <FocusChart v-else-if="patientComponent === 'focus'" />
      <TrainingChart v-else-if="patientComponent === 'training'" />
    </div>
  </div>
</template>
<script>
import PatientLeft from "@/components/PatientLeft.vue";
import PDChart from "@/components/PDChart.vue";
import RangeChart from "@/components/RangeChart.vue";
import FocusChart from "@/components/FocusChart.vue";
import TrainingChart from "@/components/TrainingChart.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    PatientLeft,
    PDChart,
    RangeChart,
    FocusChart,
    TrainingChart
  },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState(["patientComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_PATIENT_COMPONENT"])
  }
};
</script>
<style>
.patentCenter {
  min-height: 880px;
}
.patientChart {
  position: absolute;
  left: 380px;
  top: 221px;
}
</style>
