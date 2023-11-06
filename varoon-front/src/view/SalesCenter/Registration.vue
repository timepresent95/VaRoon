<template>
  <div class="registration">
    <p class="empty-content text-body1 text-center py-40" v-if="contents.length === 0">등록된 컨텐츠가 없습니다.</p>
    <table class="registration-table" v-else>
      <thead class="registration-table-head">
      <tr>
        <th>등록 번호</th>
        <th>제목</th>
        <th>태그</th>
        <th>업로드 일시</th>
        <th>상태</th>
        <th>다운로드</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="{id, info, uploadDate, status} in contents" :key="id">
        <td class="content-id text-center">{{ id }}</td>
        <td class="text-ellipsis">{{ info.title }}</td>
        <td class="text-ellipsis"><span class="mr-4" v-for="tag in info.tags" :key="tag">{{ tag }}</span></td>
        <td class="text-ellipsis">{{ uploadDate }}</td>
        <td class="text-center">{{ status }}</td>
        <td class="text-center">
          <button v-if="status === '등록'" class="download-button">download</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="button-wrapper mt-20">
      <button class="text-w1 mr-8">변환 희망 파일 업로드</button>
      <button class="text-w1">SDK로 개발된 파일 업로드</button>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import MockGames from "@/assets/mock/games";
import {createRandomNumber} from "@/utils/number";

const contents = ref([]);

onMounted(() => {
  contents.value = MockGames.randomGames.map(val => {
    const statusCategory = ['심사 중', '변환 중', '등록', '반려']
    const status = statusCategory[createRandomNumber(3)];
    return {...val, uploadDate: val.info.updatedDate, status}
  });
})
</script>
<style scoped lang="scss">
.registration {

  &-table {
    width: 100%;
    border-collapse: collapse;
    overflow-x: hidden;

    &-head {
      background-color: $g1;
    }

    th, td {
      @extend .text-body1;
      @extend .px-8;
      @extend .py-4;
      border: solid 1px $b20;
      overflow-x: hidden;
    }

    td {
      @extend .text-body2;
    }

    .text-ellipsis {
      max-width: 130px;
      white-space: nowrap;
      word-break: break-all;
      text-overflow: ellipsis;
    }

    .download-button {
      color: $p1;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    button {
      background-color: $p1;
      border-radius: 4px;
      @extend .py-12;
      @extend .px-40;
    }
  }
}
</style>
