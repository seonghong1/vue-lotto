<template>
  <ModalComponent />
  <div v-if="lottoNumbers.length > 0">
    <h1>당첨번호 입력하기</h1>
    <p>번호를 6개 선택하고, 보너스 번호를 입력해주세요 !</p>
    <div>
      <p>선택된 번호 : {{ choiceNumberList }}</p>
      <p @click="reset">번호 초기화 하기</p>
      <ul>
        <li v-for="a in array" :key="a" @click="addChoiceNumber(a)">
          {{ a }}
        </li>
      </ul>
      <p>보너스번호</p>
      <form @submit.prevent="submitChoice">
        <input type="text" />
        <button>결과 확인하기</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import ModalComponent from "../components/modal/ModalComponent.vue";
import array from "@/assets/lotoNumberData";
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useChoiceNumberStore } from "../../store/modules/ChoiceNumberStore";
import { useLottoNumberStore } from "@/store/modules/LottoNumberStore";
import { useModalStore } from "../../store/modules/ModalStore";

const store = useChoiceNumberStore();
const modalStore = useModalStore();
let choiceNumberList: number[] = reactive([]);
const Lottostore = useLottoNumberStore();

const { lottoNumbers } = storeToRefs(Lottostore);
const { choiceNumber } = storeToRefs(store);

function addChoiceNumber(num: number) {
  if (choiceNumberList.length < 6) {
    choiceNumberList.push(num);
  } else {
    alert("6개 모두 선택해주셨습니다 !");
  }
}
function submitChoice() {
  if (choiceNumberList.length <= 5) {
    alert("숫자를 6개 선택해주세요 !");
  } else {
    store.setChoiceNumber(choiceNumberList);
    modalStore.mountModal();
  }
}
function reset() {
  choiceNumberList.splice(0, choiceNumberList.length);
  console.log(choiceNumberList);
}
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 500px;

  li {
    cursor: pointer;
    transition: all 0.1s;
    list-style: none;
    width: calc(500px / 6);
    height: 60px;
    margin: 2px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 60px;
    border-radius: 30px;
    &:hover {
      background-color: white;
      box-sizing: border-box;
      border: 1px solid black;
      color: black;
    }
  }
}
</style>
