import { defineStore } from "pinia";

interface ModalState {
  modalState: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): ModalState => ({
    modalState: false,
  }),
  actions: {
    mountModal() {
      this.modalState = true;
    },
    unMountModal() {
      this.modalState = false;
    },
  },
});
