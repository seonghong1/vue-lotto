<template>
  <div v-if="lottoNumbers.length > 0">
    <ul></ul>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLottoNumberStore } from "@/store/modules/LottoNumberStore";

const store = useLottoNumberStore();

const { lottoNumbers } = storeToRefs(store);
console.log(lottoNumbers);
</script>
<style></style>
