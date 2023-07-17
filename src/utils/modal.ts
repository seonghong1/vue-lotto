import { useModalStore } from "../store/modules/modal";

const store = useModalStore();

export const hideModal = () => {
  store.unMountModal();
};

export const showModal = () => {
  store.mountModal();
};
