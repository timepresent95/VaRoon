<template>
  <div>
    <p class="search-name">'{{ searchName }}'의 검색 결과</p>
    <ul class="search-ul">
      <li>
        <div class="search-img">
          <img src="@/images/50.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="search-description">
          <h2 class="search-description-title">Monster Hunt World 3</h2>
          <p class="search-descriptionion">
            Asia-Pacific Common Residential Theme , the first package
            from Asset Store Originals, contains a large range of assets...
          </p>
        </div>
        <div class="search-end-box">
          <p class="search-end-box-fifth">15세 이상 가능</p>
          <p class="search-end-box-cost">43,000 원</p>
        </div>
      </li>
      <li>
        <div class="search-img">
          <img src="@/images/51.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="search-description">
          <h2 class="search-description-title">Ark Survival Evolution</h2>
          <p class="search-descriptionion">
            This study examines several issues like how to construct a reliable corpus, language
            studies based on the corpus, and how it can be applied to the field of English education.
          </p>
        </div>
        <div class="search-end-box">
          <p class="search-end-boxEi">18세 이상 가능</p>
          <p class="search-end-box-cost">29,700 원</p>
        </div>
      </li>
      <li>
        <div class="search-img">
          <img src="@/images/52.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="search-description">
          <h2 class="search-description-title">Dota UnderLoad</h2>
          <p class="search-descriptionion">
            Korean English learners is indispensable to diagnose where they are and prescribe what
            we should do in developing the national curriculum and textbooks for them in the
            future.
          </p>
        </div>
        <div class="search-end-box">
          <p class="search-end-box-fifth">15세 이상 가능</p>
          <p class="search-end-box-cost">51,000 원</p>
        </div>
      </li>
      <li>
        <div class="search-img">
          <img src="@/images/53.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="search-description">
          <h2 class="search-description-title">Slay The Spire</h2>
          <p class="search-descriptionion">
            This study examines several issues like how to construct a reliable corpus, language
            studies based on the corpus, and how it can be applied to the field of English education.
          </p>
        </div>
        <div class="search-end-box">
          <p class="search-end-box-fifth">15세 이상 가능</p>
          <p class="search-end-box-cost">23,000 원</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    searchName: {
      type: String,
      required: true,
    }
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"])
  }
};
</script>
<style>
.search-name {
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 26px;
  margin: 30px;
}
.search-ul {
  list-style: none;
}

.search-ul li {
  list-style: none;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.search-img img {
  width: 305px;
  height: 197px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e2e2e2;
}
.search-description {
  margin-left: 46px;
  flex: 1 0 500px;
}
.search-description-title {
  margin-top: 40px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 28px;
  font-weight: 300;
}
.search-descriptionion {
  margin-top: 24px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 14px;
  font-weight: 300;
  color: #6f6f6f;
}
.search-end-box {
  flex-grow: 0;
  margin-left: 50px;
  width: 200px;
}
.search-end-box-fifth {
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  color: #4b74ff;
}
.search-end-boxEi {
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  color: #ff4b4b;
}
.search-end-box-cost {
  margin-top: 10px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
}
</style>
