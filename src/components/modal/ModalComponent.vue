<template>
  <div class="modal">
    <div class="modalBg" @click="unMountModal"></div>
    <div class="modalInner">
      <h1>당첨 결과 !</h1>
      <div class="">
        <div class="title">
          <h3>일치개수</h3>
          <h3>당첨금</h3>
          <h3>당첨개수</h3>
        </div>
        <ul>
          <li
            :class="lottoResult[data[2]] > 0 ? 'active' : ''"
            v-for="(data, i) in modalTableData"
            :key="i"
          >
            <h4>{{ data[0] }}</h4>
            <p>{{ data[1] }}</p>
            <span>{{ lottoResult[data[2]] }}개</span>
          </li>
        </ul>
      </div>
      <div class="buttonWrap">
        <span class="closeModalBtn" @click="unMountModal">닫기</span>
        <span class="resetModalBtn" @click="resetLotto">재시작</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModalStore } from "../../store/modules/ModalStore";
import { useChoiceNumberStore } from "../../store/modules/ChoiceNumberStore";
import { useLottoNumberStore } from "../../store/modules/LottoNumberStore";
import { reactive, onMounted } from "vue";
import modalTableData from "../../assets/modalTableData";

const ModalStore = useModalStore();
const ChoiceNumberStore = useChoiceNumberStore();
const LottoNumberStore = useLottoNumberStore();

const { choiceNumber } = storeToRefs(ChoiceNumberStore);
const { lottoNumbers } = storeToRefs(LottoNumberStore);

const lottoResult = reactive({ six: 0, five: 0, four: 0, three: 0, other: 0 });

onMounted(() => {
  getLottoResult();
});

function getLottoResult() {
  let currentCount = 0;
  let bonusNumber = 0;
  for (let i = 0; lottoNumbers.value.length > i; i++) {
    bonusNumber = 0;
    currentCount = 0;
    for (let j = 0; lottoNumbers.value[i].length > j; j++) {
      if (lottoNumbers.value[i].includes(choiceNumber.value[j])) {
        currentCount += 1;
      }
      if (lottoNumbers.value[i].includes(choiceNumber.value[6])) {
        bonusNumber++;
      }
    }

    if (currentCount === 6) {
      lottoResult.six += 1;
    } else if (currentCount === 5 && bonusNumber > 0) {
      lottoResult.five += 1;
    } else if (currentCount === 4) {
      lottoResult.four += 1;
    } else if (currentCount === 3) {
      lottoResult.three += 1;
    } else {
      lottoResult.other += 1;
    }
  }
}

function unMountModal() {
  ModalStore.unMountModal();
}

function resetLotto() {
  ModalStore.$reset();
  ChoiceNumberStore.$reset();
  LottoNumberStore.$reset();
}
</script>
<style lang="scss" scoped>
.modal {
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  .modalBg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .modalInner {
    transform: translate(-50%, -50%);
    width: 500px;
    height: 600px;
    background: white;
    position: relative;
    z-index: 15;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 0;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .title {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    gap: 70px;
    font-size: 20px;
    font-weight: 600;
  }
  h1 {
    text-align: center;
    color: red;
    font-size: 30px;
    font-weight: 900;
  }
  ul {
    padding: 30px 60px;
    li {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.active {
        color: red;
      }
    }
  }
}
.buttonWrap {
  display: flex;
  justify-content: center;
  gap: 50px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  span {
    cursor: pointer;
    padding: 0 50px;
    line-height: 60px;
    text-align: center;
    border-radius: 40px;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  .closeModalBtn {
    background-color: rgb(37, 107, 238);
  }
  .resetModalBtn {
    background-color: rgb(241, 70, 70);
  }
}
</style>
../../store/modules/myNumber ../../store/modules/modal
../../store/modules/lottoNumbers
