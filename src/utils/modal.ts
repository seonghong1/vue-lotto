import { useModalStore } from "../store/modules/ModalStore";

const store = useModalStore();

export const hideModal = () => {
  store.unMountModal();
};

export const showModal = () => {
  store.mountModal();
};
