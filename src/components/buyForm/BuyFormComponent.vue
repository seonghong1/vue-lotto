<template>
  <div>
    <h1>구입할 금액</h1>
    <form @submit.prevent="setBuyCount">
      <input type="number" v-model="inputValue" step="1000" />
      <button>확인</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useLottoNumberStore } from "../../store/modules/LottoNumberStore";

const store = useLottoNumberStore();

const inputValue = ref(0);

function randomNumber(): number {
  const result = Math.floor(Math.random() * 44 + 1);
  return result;
}

function setBuyCount() {
  const lottoCount = inputValue.value * 0.001;
  let lottoCountArr: number[][] = [];

  for (let i = 0; i < lottoCount; i++) {
    let current = [];
    for (let j = 0; j < 6; j++) {
      current.push(randomNumber());
    }
    lottoCountArr.push(current);
  }
  console.log("lottoCountArr : ", lottoCountArr);
  store.setLottoNumbers(lottoCountArr);
}
</script>
<style></style>
