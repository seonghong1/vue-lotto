<template>
  <div :class="store.lottoNumberArr.length > 0 ? 'hide' : 'show'">
    <h1>동행복권</h1>
    <form @submit.prevent="setBuyCount">
      <input type="number" v-model="inputValue" step="1000" min="0" />
      <button>구매하기</button>
    </form>
    <p>1,000원 단위로 구매 가능</p>
  </div>
</template>
<script setup lang="ts">
// store
import { useLottoNumbersStore } from "@/store/modules/lottoNumbers";
// module
import { ref } from "vue";

// state
const store = useLottoNumbersStore();
const inputValue = ref(0);

//util
function randomNumber(): number {
  const result = Math.floor(Math.random() * 44 + 1);
  return result;
}

// function
function setBuyCount() {
  const lottoCount = inputValue.value * 0.001;
  let lottoCountArr: number[][] = [];

  for (let i = 0; i < lottoCount; i++) {
    let currentList: number[] = [];
    for (let j = 0; j < 6; j++) {
      while (currentList.length < 6) {
        let currentNumber = randomNumber();
        if (!currentList.includes(currentNumber)) {
          currentList.push(currentNumber);
        }
      }
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
../../store/modules/lottoNumbers
