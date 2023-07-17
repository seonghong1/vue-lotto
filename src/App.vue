<template>
  <BuyLottoComp />
  <LottoNumbersComp v-if="lottoNumberArr.length > 0" />
  <ChoiceLottoComp v-if="lottoNumberArr.length > 0" />
</template>

<script setup lang="ts">
// component
import BuyLottoComp from "@/components/BuyLotto.vue";
import LottoNumbersComp from "@/components/LottoNumbers.vue";
import ChoiceLottoComp from "@/components/ChoiceLotto.vue";
// module
import { storeToRefs } from "pinia";
import { useLottoNumbersStore } from "@/store/modules/lottoNumbers";
// assets
import "@/assets/scss/_reset.scss";

// store
const LottoNumberStore = useLottoNumbersStore();
const { lottoNumberArr } = storeToRefs(LottoNumberStore);
</script>
