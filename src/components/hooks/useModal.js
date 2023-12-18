import ReactGA from "react-ga4";
import { create } from "zustand";

const initialStates = {
  clear: false,
  cloud: false,
  download: false,
  import: false,
  account: false,
  node: false,
  settings: false,
  share: false,
  login: false,
  premium: false,
  jwt: false,
  schema: false,
  cancelPremium: false,
  review: false,
  jq: false,
};

const authModals = ["cloud", "account"];
const premiumModals = [];

const useModal = create()(set => ({
  ...initialStates,
  setVisible: modal => visible => {

    // if (authModals.includes(modal) && !user.isAuthenticated) {
    //   return set({ login: true });
    // } else if (premiumModals.includes(modal) && !user.premium) {
    //   return set({ premium: true });
    // }

    if (visible) ReactGA.event({ category: "Modal View", action: `modal_view_${modal}` });
    set({ [modal]: visible });
  },
}));

export default useModal;
