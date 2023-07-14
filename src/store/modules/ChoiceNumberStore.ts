import { defineStore } from "pinia";

export const useChoiceNumberStore = defineStore("choiceNumber", {
  state: () => {
    return {
      choiceNumber: [] as number[],
    };
  },
  getters: {},
  actions: {
    setChoiceNumber(choiceNumberArr: number[]) {
      this.choiceNumber = choiceNumberArr;
      console.log("store : ", this.choiceNumber);
    },
  },
});
