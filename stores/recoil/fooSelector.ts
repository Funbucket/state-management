import { DefaultValue, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { fooAtom } from "./fooAtom";

const fooSelector = selector({
  key: "fooSelector",
  get: ({ get }) => get(fooAtom).foo.replaceAll("p", "q"),
  set: ({ set, get }, value) => set(fooAtom, value instanceof DefaultValue ? value : { foo: get(fooAtom).foo + value }),
});

export const useFooSelectorState = () => useRecoilState(fooSelector);
export const useFooSelectorValue = () => useRecoilValue(fooSelector);
export const useFooSelectorSetter = () => useSetRecoilState(fooSelector);
