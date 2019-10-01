<template>
  <div>
    <h1>{{name}}님의 집중도 차트</h1>
    <div>
      <img
        class="congratulation"
        src="http://placehold.it/400x600"
      />
      그래프 들어갈 자리
      시작일:
      <select aria-label="2019년 1월 12일">
        <option value="01">1</option>
        <option value="02">2</option>
        <option value="03">3</option>
        <option value="04">4</option>
        <option value="05">5</option>
        <option value="06">6</option>
        <option value="07">7</option>
        <option value="08">8</option>
        <option value="09">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      ~끝 일:
      <select aria-label="2019년 1월 12일">
        <option value="01">1</option>
        <option value="02">2</option>
        <option value="03">3</option>
        <option value="04">4</option>
        <option value="05">5</option>
        <option value="06">6</option>
        <option value="07">7</option>
        <option value="08">8</option>
        <option value="09">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:'ㅇㅇㅇ',
    };
  }
};
</script>
<style>
</style>
