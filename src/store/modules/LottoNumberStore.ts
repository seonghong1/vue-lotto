import { defineStore } from "pinia";
import { LottoNumberT } from "../../types/LottoNumberT";

export const useLottoNumberStore = defineStore("lottoNumber", {
  state: () => ({
    lottoNumbers: [] as number[][],
  }),
  getters: {},
  actions: {
    setLottoNumbers(lottoNumberArr: number[][]) {
      this.lottoNumbers = lottoNumberArr;
      console.log("store : ", this.lottoNumbers);
    },
  },
});
