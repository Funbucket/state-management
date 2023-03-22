import { DefaultValue, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { barAtom } from "./barAtom";

const barSelector = selector({
  key: "barSelector",
  get: ({ get }) => get(barAtom).bar * 10,
  set: ({ set, get }, value) => set(barAtom, value instanceof DefaultValue ? value : { bar: get(barAtom).bar * value }),
});

export const useBarSelectorState = () => useRecoilState(barSelector);
export const useBarSelectorValue = () => useRecoilValue(barSelector);
export const useBarSelectorSetter = () => useSetRecoilState(barSelector);
