import { defineStore } from "pinia";

export const useMyNumbersStore = defineStore("myNumbers", {
  state: () => {
    return {
      myNumberArr: [] as number[],
    };
  },
  getters: {},
  actions: {
    setChoiceNumber(myNumbers: number[]) {
      this.myNumberArr = myNumbers;
      console.log("store : ", this.myNumberArr);
    },
  },
});
