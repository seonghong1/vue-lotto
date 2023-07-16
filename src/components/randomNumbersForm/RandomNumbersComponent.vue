<template>
  <div class="wrap">
    <div class="left-contnent">
      <h2>번호 확인하기</h2>
      <div
        :class="['isCheckWrap', checkState ? 'trueCheckWrap' : '']"
        @click="changeIsChecked"
      >
        <span class="isCheckBackground"></span>
        <span class="isCheck"></span>
      </div>
    </div>
    <ul>
      <li
        :class="checkState ? 'show' : 'hide'"
        v-for="(lottoNumber, i) in lottoNumbers"
        :key="i"
      >
        {{ lottoNumber.join(", ") }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
//
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useLottoNumberStore } from "@/store/modules/LottoNumberStore";

const store = useLottoNumberStore();

const { lottoNumbers } = storeToRefs(store);
const checkState = ref(false);

function changeIsChecked() {
  checkState.value = !checkState.value;
  console.log(checkState.value);
}
</script>
<style lang="scss" scoped>
.wrap {
  border: 2px solid red;
  border-radius: 30px;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 20px auto;
}
h2 {
  color: red;
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 10px;
}
.isCheckWrap {
  position: relative;
  width: 60px;
  height: 30px;
  .isCheckBackground {
    width: 60px;
    height: 30px;
    background: white;
    border: 2px solid red;
    display: block;
    border-radius: 30px;
    position: absolute;
    z-index: 0;
  }
  .isCheck {
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background: red;
    z-index: 1;
  }
}
.trueCheckWrap {
  .isCheckBackground {
    background-color: red;
  }
  .isCheck {
    right: 1px;
    left: initial;
    background-color: white;
  }
}
ul {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  li {
    color: red;
    font-weight: 600;
    position: relative;
    font-size: 18px;
    &::before {
      content: "";
      position: absolute;
      left: -15px;
      top: 6px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
    }
    &.show {
      color: red;
    }
    &.hide {
      color: transparent;
    }
  }
}
</style>
