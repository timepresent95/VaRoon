<template>
  <div class="revenue">
    <p class="text-body1b pr-20">
      총 수익: <span class="text-p1">{{ formatWon(totalIncome) }}</span>
    </p>
    <p class="empty-content text-body1 text-center py-40" v-if="series.length === 0">등록된 컨텐츠가 없습니다.</p>
    <apex-charts
      v-else
      class="mt-40"
      type="line"
      :options="{
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {position: 'top'}
            },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          title: {text: '2023년'},
        },
        yaxis: {
          title: {text: '단위: 만(원)'},
        },
        markers: { size: 6 },
      }"
      :series="series"
    />
  </div>
</template>
<script setup>
import ApexCharts from "vue3-apexcharts";
import {computed, onMounted, ref} from "vue";
import {formatWon} from "@/utils/format";
import MockGames from "@/assets/mock/games";
import {createRandomNumber} from "@/utils/number";

const series = ref([])
const totalIncome = computed(() => series.value?.reduce((acc, {data}) => data.reduce((a, c) => a + c, 0) + acc, 0) * 10000 ?? 0);

onMounted(() => {
  series.value = MockGames.randomGames.map(val => {
    return {name: val.info.title, data: Array.from(Array(12), () => createRandomNumber(40, 0))}
  })
})
</script>
<style scoped lang="scss"></style>
