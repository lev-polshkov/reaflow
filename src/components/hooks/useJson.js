import { create } from "zustand";
import useGraph from "./useGraph";

const initialStates = {
  json: "",
  loading: true,
};

const useJson = create()((set, get) => ({
  ...initialStates,
  getJson: () => get().json,
  setJson: json => {
    set({ json, loading: false });
    console.log({json})
    useGraph.getState().setGraph(json);
  },
  clear: () => {
    set({ json: "", loading: false });
    useGraph.getState().clearGraph();
  },
}));

export default useJson;
