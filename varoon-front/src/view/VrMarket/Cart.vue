<template>
  <section class="cart">
    <button v-if="items.length !== 0" class="delete-selected-item-button mt-8 mb-12" @click="deleteSelectedItem">선택삭제
    </button>
    <div v-if="items.length === 0" class="text-h1b text-center mt-120">장바구니가 비어있습니다.</div>
    <div v-else class="content">
      <ul class="item-list">
        <li class="item item-header text-h4b">
          <h4 class="py-8 px-12">게임 정보</h4>
        </li>
        <router-link :to="{name: 'vr-market-game', params: {id}}" custom v-slot="{navigate}"
                     v-for="({id, image, info, selected}, index) in items" :key="id">
          <li class="item" @click="navigate">
            <div class="select-button px-12">
              <button v-if="selected" @click.stop="selectItem(index)">
                <img
                  src="/images/common/checkbox-checked.png"
                  alt="active check box"
                />
              </button>
              <button v-else class="select-button-unchecked" @click.stop="selectItem(index)"/>
            </div>
            <img
              class="cover py-8 px-12"
              :src="image.url"
              :alt="image.alt"
            />
            <div class="description py-8 px-12">
              <h3 class="text-h3b">{{ info.title }}</h3>
              <p class="text-body2">{{ info.description }}}</p>
            </div>
            <div class="info py-8 px-12">
              <p :class="`grade-${info.grade}`" class="text-body1b">{{ gradeToString(info.grade) }}</p>
              <p class="text-body1">{{ formatWon(info.price) }}</p>
            </div>
            <button class="delete-button text-body1" @click.stop="deleteItem(index)">&times;</button>
          </li>
        </router-link>
      </ul>
      <hr/>
      <div class="bill pt-20">
        <div class="text-right mr-40">
          <p class="text-body2b">
            총 <span class="text-p1">{{ selectedCount }}</span>의 상품 선택
          </p>
          <p class="text-h2b mt-4">
            총 금액 <span class="text-p1"> {{ formatDecimal(totalPrice) }}</span> 원
          </p>
        </div>
        <button class="pay-button px-16 py-8 text-w1" @click="pay">결제하기</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue'
import MockGames from "@/assets/mock/games";
import {formatDecimal, formatWon} from "@/utils/format";
import {gradeToString} from "@/utils/grade";

const items = ref([]);
const selectedItems = computed(() => items.value.filter(({selected}) => selected))
const selectedCount = computed(() => selectedItems.value.length);
const totalPrice = computed(() => selectedItems.value.reduce((acc, {info}) => acc + info.price, 0));

function selectItem(index) {
  items.value[index].selected = !items.value[index].selected;
}

function deleteItem(index) {
  items.value.splice(index, 1)
}

function deleteSelectedItem() {
  items.value = items.value.filter(({selected}) => !selected)
}

function pay() {
  if (selectedItems.value.length === 0) {
    alert("결제할 상품을 선택해주세요.")
    return;
  }
  alert("테스트 환경에서는 결제가 불가능 합니다.")
}

onMounted(() => {
  items.value = MockGames.randomGames.map(val => ({...val, selected: false}));
})
</script>
<style scoped lang="scss">
.cart {
  width: 100%;

  .delete-selected-item-button {
    background-color: $p1;
    color: $w1;
    padding: 8px 16px;
    border-radius: 8px;
  }

  .content {
    width: 100%;

    .item-list {
      flex: 1;

      .item {
        display: flex;
        position: relative;
        cursor: pointer;
        justify-content: space-between;
        border: solid 1px $g2;

        &:not(:last-child) {
          border-bottom: none;
        }

        &:hover {
          background-color: $g1;
        }

        .select-button {
          align-self: center;

          &-unchecked {
            width: 28px;
            height: 28px;
            border: 1px solid $g2;
            border-radius: 2px;
            background-color: $w1;
          }

          img {
            width: 28px;
            height: 28px;
          }
        }

        .cover {
          width: 180px;
          border-right: solid 1px $g2;
          border-left: solid 1px $g2;
        }

        .description {
          flex: 1;
          overflow-x: hidden;

          & > h3 {
            overflow-x: hidden;
            white-space: nowrap;
            word-break: break-all;
            text-overflow: ellipsis;
          }

          & > p {
            height: 6rem;
            overflow: hidden;
            word-break: break-all;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 5;
            color: $g4;
          }
        }

        .info {
          width: 120px;
          border-left: solid 1px $g2;
        }

        .delete-button {
          position: absolute;
          top: 5px;
          right: 10px;
        }
      }

      .item-header:hover {
        background-color: inherit;
        cursor: initial;
      }
    }

    .bill {
      display: flex;
      justify-content: flex-end;

      .pay-button {
        background-color: $p1;
        border-radius: 8px;
        box-shadow: 0 3px 10px 0 rgba($p1, 0.6);
      }
    }
  }
}
</style>
