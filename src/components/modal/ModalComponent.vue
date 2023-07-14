<template>
  <div v-if="ModalState">
    <div class="wrap" @click="unMountModal">
      <h1>당첨 결과는 ????!!!</h1>
      <span @click="unMountModal">closeButton</span>
      <div class="">
        <div class="title">
          <h3>일치 갯수</h3>
          <h3>당첨금</h3>
          <h3>당첨 갯수</h3>
        </div>
        <ul>
          <li>
            <h4>6개</h4>
            <p>2,000,000,000</p>
            <span>{{}}개</span>
          </li>
          <li>
            <h4>6개</h4>
            <p>2,000,000,000</p>
            <span>{{}}개</span>
          </li>
          <li>
            <h4>6개</h4>
            <p>2,000,000,000</p>
            <span>{{}}개</span>
          </li>
          <li>
            <h4>6개</h4>
            <p>2,000,000,000</p>
            <span>{{}}개</span>
          </li>
          <li>
            <h4>6개</h4>
            <p>2,000,000,000</p>
            <span>{{}}개</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModalStore } from "../../store/modules/ModalStore";
import { useChoiceNumberStore } from "@/store/modules/ChoiceNumberStore";
import { useLottoNumberStore } from "@/store/modules/LottoNumberStore";

const store = useModalStore();
const choiceNumberStore = useChoiceNumberStore();
const LottoNumberStore = useLottoNumberStore();

const choiceNumber = storeToRefs(choiceNumberStore);
const lottoNumbers = storeToRefs(LottoNumberStore);
const ModalState = storeToRefs(store);

function unMountModal() {
  store.unMountModal();
}
</script>
<style lang=""></style>
