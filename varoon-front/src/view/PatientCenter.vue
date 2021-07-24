<template>
  <div class="patent-center">
    <PatientLeft />
    <div class="patient-chart">
      <PDChart v-if="patientComponent === 'pd'" />
      <RangeChart v-else-if="patientComponent === 'range'" />
      <FocusChart v-else-if="patientComponent === 'focus'" />
      <TrainingChart v-else-if="patientComponent === 'training'" />
    </div>
  </div>
</template>
<script>
import PatientLeft from "@/components/PatientCenter/PatientLeft.vue";
import PDChart from "@/components/PatientCenter/PDChart.vue";
import RangeChart from "@/components/PatientCenter/RangeChart.vue";
import FocusChart from "@/components/PatientCenter/FocusChart.vue";
import TrainingChart from "@/components/PatientCenter/TrainingChart.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    PatientLeft,
    PDChart,
    RangeChart,
    FocusChart,
    TrainingChart,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["patientComponent"]),
  },
  methods: {
    ...mapMutations(["CHANGE_PATIENT_COMPONENT"]),
  },
};
</script>
<style>
.patent-center {
  min-height: 880px;
}
.patient-chart {
  position: absolute;
  left: 380px;
  top: 221px;
}
</style>
