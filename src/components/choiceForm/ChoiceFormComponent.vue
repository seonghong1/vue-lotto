<template>
  <div class="wrap">
    <h1>당첨번호 입력하기</h1>
    <div>
      <div class="top-content">
        <p>선택된 번호 : {{ choiceNumberList }}</p>
        <p class="reset" @click="reset">번호 초기화 하기</p>
      </div>
      <ul>
        <li
          ref="numberBtnDom"
          v-for="a in array"
          class="false"
          :key="a"
          @click="addChoiceNumber($event, a)"
        >
          <p>{{ a }}</p>
        </li>
      </ul>
      <p class="sub-comment">번호를 6개 선택해주세요! (중복x)</p>
      <form @submit.prevent="submitChoice">
        <button>결과 확인하기</button>
      </form>
    </div>
    <ModalComponent v-if="modalState" />
  </div>
</template>
<script setup lang="ts">
import ModalComponent from "../../components/modal/ModalComponent.vue";
import array from "../../assets/lotoNumberData";
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useChoiceNumberStore } from "../../store/modules/ChoiceNumberStore";
import { useLottoNumberStore } from "../../store/modules/LottoNumberStore";
import { useModalStore } from "../../store/modules/ModalStore";

const store = useChoiceNumberStore();
const modalStore = useModalStore();
let choiceNumberList: number[] = reactive([]);
const Lottostore = useLottoNumberStore();
const numberBtnDom = ref(null);

const { lottoNumbers } = storeToRefs(Lottostore);
const { choiceNumber } = storeToRefs(store);
const { modalState } = storeToRefs(modalStore);

function addChoiceNumber(e, num: number) {
  if (choiceNumberList.length < 6) {
    if (!choiceNumberList.includes(num)) {
      choiceNumberList.push(num);
      choiceNumberList.sort((a, b) => a - b);
      e.target.className = "true";
    } else {
      alert("이미 선택된 번호입니다 ~~");
    }
  } else {
    alert("6개 모두 선택해주셨습니다 !");
  }
}
function submitChoice(e) {
  if (choiceNumberList.length <= 5) {
    alert("숫자를 6개 선택해주세요 !");
  } else {
    store.setChoiceNumber(choiceNumberList);
    modalStore.mountModal();
    console.log("modalState :", modalStore.modalState);
  }
}
function reset() {
  document.querySelectorAll("li").forEach((i) => {
    i.className = "false";
  });

  choiceNumberList.splice(0, choiceNumberList.length);
}
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrap {
  background-color: red;
  border-radius: 50px;
  padding: 20px 0;
  color: white;
  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 15px;
  }
}
.top-content {
  margin-left: 30px;
  font-weight: 600;
  p {
    margin-bottom: 10px;
  }
  .reset {
    background-color: white;
    color: red;
    border-radius: 10px;
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 500px;
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s;
    list-style: none;
    width: calc(500px / 6);
    height: 60px;
    margin: 2px;
    background-color: white;
    color: red;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    line-height: 60px;
    border-radius: 30px;
    &.true {
      background-color: red;
      box-sizing: border-box;
      border: 1px solid black;
      color: white;
      border: 2px solid white;
    }
    &:hover {
      @extend .true;
    }
  }
}
.sub-comment {
  text-align: right;
  font-size: 14px;
  padding-right: 15px;
  margin-top: 5px;
  opacity: 0.9;
}
form {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  button {
    cursor: pointer;
    background-color: white;
    color: red;
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 900;
    border-radius: 30px;
    &:hover {
      background-color: red;
      color: white;
    }
  }
}
</style>
