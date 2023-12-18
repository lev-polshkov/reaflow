import { create } from "zustand";
import { persist } from "zustand/middleware";
import useGraph from "./useGraph";

const initialStates = {
  lightmode: false,
  hideCollapse: true,
  childrenCount: true,
  imagePreview: true,
  liveTransform: true,
  gesturesEnabled: false,
};

const useStored = create(
  persist(
    set => ({
      ...initialStates,
      toggleGestures: gesturesEnabled => set({ gesturesEnabled }),
      toggleLiveTransform: liveTransform => set({ liveTransform }),
      setLightTheme: (value) =>
        set({
          lightmode: value,
        }),
      toggleHideCollapse: (value) => set({ hideCollapse: value }),
      toggleChildrenCount: (value) => set({ childrenCount: value }),
      toggleImagePreview: (value) => {
        set({ imagePreview: value });
        useGraph.getState().setGraph();
      },
    }),
    {
      name: "config",
    }
  )
);

export default useStored;
