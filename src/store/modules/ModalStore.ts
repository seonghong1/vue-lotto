import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => {
    return {
      modalState: false as boolean,
    };
  },
  actions: {
    mountModal() {
      this.modalState = true;
    },
    unMountModal() {
      this.modalState = false;
    },
  },
});
