import { defineStore } from "pinia";

export const useLottoNumbersStore = defineStore("lottoNumberArr", {
  state: () => ({
    lottoNumberArr: [] as number[][],
  }),
  actions: {
    setLottoNumbers(lottoNumbers: number[][]) {
      this.lottoNumberArr = lottoNumbers;
      console.log("store : ", this.lottoNumberArr);
    },
  },
});
