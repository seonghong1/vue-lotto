<template>
  <div :class="store.lottoNumbers.length > 0 ? 'hide' : 'show'">
    <h1>동행복권</h1>
    <form @submit.prevent="setBuyCount">
      <input type="number" v-model="inputValue" step="1000" min="0" />
      <button>구매하기</button>
    </form>
    <p>1,000원 단위로 구매 가능</p>
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
    let currentList = [];
    for (let j = 0; j < 6; j++) {
      currentList.push(randomNumber());
    }
    lottoCountArr.push(currentList.sort((a, b) => a - b));
  }
  store.setLottoNumbers(lottoCountArr);
  inputValue.value = 0;
}
</script>
<style lang="scss" scoped>
.hide {
  opacity: 0.5;
  pointer-events: none;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 25px;
    font-weight: 900;
    color: red;
    margin-bottom: 15px;
  }
  form {
    display: flex;
    align-items: center;
    gap: 5px;
    input {
      height: 40px;
      border-radius: 10px;
      padding-left: 10px;
      border: 2px solid red;
      outline: none;
      box-sizing: border-box;
      background-color: transparent;
    }
    button {
      height: 40px;
      padding: 0 10px;
      color: white;
      border-radius: 10px;
      background-color: red;
      border: none;
    }
  }
}
p {
  color: red;
  font-size: 13px;
  margin-top: 5px;
  transform: translateX(-55px);
}
</style>
