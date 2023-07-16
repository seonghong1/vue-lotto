<template>
  <h1></h1>
  <!--v-if / 컴포넌트에서-->
  <BuyFormComponent />
  <RandomNumbersComponent v-if="lottoNumbers.length > 0" />
  <ChoiceFormComponent v-if="lottoNumbers.length > 0" />
</template>

<script setup lang="ts">
import BuyFormComponent from "./components/buyForm/BuyFormComponent.vue";
import RandomNumbersComponent from "./components/randomNumbersForm/RandomNumbersComponent.vue";
import ChoiceFormComponent from "./components/choiceForm/ChoiceFormComponent.vue";

import { useLottoNumberStore } from "@/store/modules/LottoNumberStore";

import { storeToRefs } from "pinia";
import "./assets/scss/_reset.scss";

const LottoNumberStore = useLottoNumberStore();
const { lottoNumbers } = storeToRefs(LottoNumberStore);
</script>

<style></style>
