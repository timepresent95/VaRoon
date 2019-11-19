<template>
  <div>
    <div class="searchName">'Monster Hunt'의 검색 결과</div>
    <ul class="searchUl">
      <li>
        <div class="searchImg">
          <img src="../images/50.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="searchDescript">
          <div class="searchDescriptTitle">Monster Hunt World 3</div>
          <div class="searchDescription">
            Asia-Pacific Common Residential Theme , the first package
            from Asset Store Originals, contains a large range of assets...
          </div>
        </div>
        <div class="searchEndBox">
          <div class="searchEndBoxFifth">15세 이상 가능</div>
          <div class="searchEndBoxCost">43,000 원</div>
        </div>
      </li>
      <li>
        <div class="searchImg">
          <img src="../images/51.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="searchDescript">
          <div class="searchDescriptTitle">Ark Survival Evolution</div>
          <div class="searchDescription">
            This study examines several issues like how to construct a reliable corpus, language
            studies based on the corpus, and how it can be applied to the field of English education.
          </div>
        </div>
        <div class="searchEndBox">
          <div class="searchEndBoxEi">18세 이상 가능</div>
          <div class="searchEndBoxCost">29,700 원</div>
        </div>
      </li>
      <li>
        <div class="searchImg">
          <img src="../images/52.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="searchDescript">
          <div class="searchDescriptTitle">Dota UnderLoad</div>
          <div class="searchDescription">
            Korean English learners is indispensable to diagnose where they are and prescribe what
            we should do in developing the national curriculum and textbooks for them in the
            future.
          </div>
        </div>
        <div class="searchEndBox">
          <div class="searchEndBoxFifth">15세 이상 가능</div>
          <div class="searchEndBoxCost">51,000 원</div>
        </div>
      </li>
      <li>
        <div class="searchImg">
          <img src="../images/53.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="searchDescript">
          <div class="searchDescriptTitle">Slay The Spire</div>
          <div class="searchDescription">
            This study examines several issues like how to construct a reliable corpus, language
            studies based on the corpus, and how it can be applied to the field of English education.
          </div>
        </div>
        <div class="searchEndBox">
          <div class="searchEndBoxFifth">15세 이상 가능</div>
          <div class="searchEndBoxCost">23,000 원</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"])
  }
};
</script>
<style>
.searchName {
  height: 30px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 26px;
  position: absolute;
  top: 187px;
  left: 79px;
}
.searchUl {
  list-style: none;
  position: absolute;
  top: 262px;
  left: 79px;
}

.searchUl li {
  list-style: none;
  width: 1250px;
  height: 197px;
  margin-bottom: 30px;
}
.searchImg {
  float: left;
}
.searchImg img {
  width: 305px;
  height: 197px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e2e2e2;
}
.searchDescript {
  height: 197px;
  width: 386px;
  margin-left: 46px;
  float: left;
}
.searchDescriptTitle {
  margin-top: 40px;
  height: 32px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 28px;
  font-weight: 300;
}
.searchDescription {
  margin-top: 24px;
  height: 38px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 14px;
  font-weight: 300;
  color: #6f6f6f;
}
.searchEndBox {
  margin-left: 303px;
  height: 197px;
  width: 121px;
  float: left;
}
.searchEndBoxFifth {
  margin-top: 60px;
  width: 97px;
  height: 19px;
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  color: #4b74ff;
}
.searchEndBoxEi {
  margin-top: 60px;
  width: 97px;
  height: 19px;
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  color: #ff4b4b;
}
.searchEndBoxCost {
  margin-top: 40px;
  width: 122px;
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
}
</style>
