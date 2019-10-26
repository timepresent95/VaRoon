<template>
  <div class="cartContent">
    <div class="carCoontentTop">
      <div class="cartTitle">장바구니</div>
      <div class="cartDeleteDes">선택삭제</div>
    </div>
    <div>
      <ul>
        <li>
          <div class="cartCheckBox" @click.prevent="first = !first">
            <img class="cartCheckBoximg" src="../images/checkbox-checked-img@2x.png" v-if="first" />
            <div class="cartCheckBoxNoImg" v-else></div>
          </div>
          <img
            class="liimg"
            src="../images/50.jpg"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />
          <div class="cartDesBox">
            <div class="cartBoxTitle">Monster Hunt World 3</div>
            <div class="cartBoxDescript">{{descript[0]}}</div>
          </div>
          <div class="cartEndBox">
            <div class="cartDeleteButton">&times;</div>
            <div class="cartItemAgeLimit">15세 이상 가능</div>
            <div class="cartItemPrice">43,000 원</div>
          </div>
        </li>
        <li>
          <div class="cartCheckBox" @click.prevent="second = !second">
            <img class="cartCheckBoximg" src="../images/checkbox-checked-img@2x.png" v-if="second" />
            <div class="cartCheckBoxNoImg" v-else></div>
          </div>
          <img
            class="liimg"
            src="../images/51.jpg"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />

          <div class="cartDesBox">
            <div class="cartBoxTitle">Monster Hunt World 3</div>
            <div class="cartBoxDescript">{{descript[0]}}</div>
          </div>
          <div class="cartEndBox">
            <div class="cartDeleteButton">&times;</div>
            <div class="cartItemAgeLimit">15세 이상 가능</div>
            <div class="cartItemPrice">21,000 원</div>
          </div>
        </li>
        <li>
          <div class="cartCheckBox" @click.prevent="third = !third">
            <img class="cartCheckBoximg" src="../images/checkbox-checked-img@2x.png" v-if="third" />
            <div class="cartCheckBoxNoImg" v-else></div>
          </div>
          <img
            class="liimg"
            src="../images/52.jpg"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />

          <div class="cartDesBox">
            <div class="cartBoxTitle">Monster Hunt World 3</div>
            <div class="cartBoxDescript">{{descript[0]}}</div>
          </div>
          <div class="cartEndBox">
            <div class="cartDeleteButton">&times;</div>
            <div class="cartItemAgeLimit">15세 이상 가능</div>
            <div class="cartItemPrice">36,000 원</div>
          </div>
        </li>
        <li>
          <div class="cartCheckBox" @click.prevent="fourth = !fourth">
            <img class="cartCheckBoximg" src="../images/checkbox-checked-img@2x.png" v-if="fourth" />
            <div class="cartCheckBoxNoImg" v-else></div>
          </div>
          <img
            class="liimg"
            src="../images/53.jpg"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />

          <div class="cartDesBox">
            <div class="cartBoxTitle">Monster Hunt World 3</div>
            <div class="cartBoxDescript">{{descript[0]}}</div>
          </div>
          <div class="cartEndBox">
            <div class="cartDeleteButton">&times;</div>
            <div class="cartItemAgeLimit">15세 이상 가능</div>
            <div class="cartItemPrice">13,000 원</div>
          </div>
        </li>
      </ul>
      <div class="cartTotal">
        <div class="cartTotalCount">
          총
          <span class="cartblue">1개</span>의 상품 선택
        </div>
        <div class="totalPrice">
          <span class="totalPriceTag">총 금액</span>
          <span class="totalPriceCost">11,3000원</span>
        </div>
        <div class="totalPriceNum"></div>
      </div>
      <div class="cartLast">
        <div class="cartLastTag">결제하기</div>
        <div class="cartLastImg">
          <img src="../images/kakaopay-btn@2x.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      descript: [`제목 : Witcher 3 분류 : 액션, 사시 가격 : 43,000 원`],
      totalAmount: 0,
      first: false,
      second: false,
      third: false,
      fourth: false
    };
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"])
  }
};
</script>
<style>
.cartContent {
  width: 1612px;
  height: 1724px;
  position: absolute;
  left: 308px;
}
.carCoontentTop {
  height: 153px;
}
.cartTitle {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  color: #000000;
  position: absolute;
  text-align: left;
  left: 75px;
  top: 64px;
}
.cartDeleteDes {
  position: absolute;
  left: 1163px;
  top: 78px;
}
.cartContent ul {
  list-style: none;
  position: relative;
  left: 75px;
}
.cartContent li {
  height: 197px;
  width: 1250px;
  margin-bottom: 30px;
}
.cartContent li .cartCheckBox {
  position: relative;
  top: 100px;
  width: 28px;
  height: 28px;
  margin-right: 0px;
  cursor: pointer;
}
.cartCheckBoximg {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
.cartCheckBoxNoImg {
  width: 28px;
  height: 28px;
  border: rgb(195, 195, 195) 0.5px solid;
}
.cartContent .liimg {
  position: relative;
  width: 305px;
  height: 197px;
  left: 94px;
  float: left;
  cursor: pointer;
}
.cartDesBox {
  width: 400px;
  height: 197px;
  position: absolute;
  left: 444px;
}
.cartBoxTitle {
  height: 32px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 28px;
  font-weight: 300;
  position: absolute;
  top: 40px;
}
.cartBoxDescript {
  width: 386px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 14px;
  font-weight: 300;
  color: #6f6f6f;
  position: absolute;
  top: 96px;
}
.cartEndBox {
  width: 121px;
  height: 197px;
  position: absolute;
  left: 1035px;
}
.cartDeleteButton {
  margin-left: 106.7px;
  color: #c2c2c2;
  font-size: 30px;
  cursor: pointer;
}
.cartItemAgeLimit {
  margin-left: 24px;
  margin-top: 43.7px;
  width: 98px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: bold;
  color: #4b74ff;
}
.cartItemPrice {
  margin-top: 46px;
  width: 122px;
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
}
.cartTotal {
  width: 1160px;
  height: 102px;
  border-top: solid 0.5px #e2e2e2;
  border-bottom: solid 0.5px #e2e2e2;
  position: relative;
  top: 40px;
  left: 75px;
}
.cartTotalCount {
  width: 154px;
  height: 23px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 20px;
  font-weight: 300;
  position: relative;
  top: 43px;
  float: left;
}
.cartblue {
  color: #4b74ff;
}
.totalPrice {
  width: 300px;
  margin-left: 935px;
}
.totalPriceTag {
  width: 58px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: 300;
  position: relative;
  top: 34px;
}
.totalPriceCost {
  margin-left: 20px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  font-weight: bold;
  position: relative;
  top: 36px;
  text-align: right;
}
.cartLast {
  width: 1200px;
  height: 70px;
  position: relative;
  top: 70px;
  left: 75px;
}
.cartLastTag {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  float: left;
  position: relative;
  top: 16.5px;
  margin-right: 735px;
}
.cartLastImg img {
  width: 315px;
  height: 70px;
  object-fit: contain;
  cursor: pointer;
}
</style>
