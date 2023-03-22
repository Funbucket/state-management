import { atom, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

type InitialStateType = {
  foo: string;
};

const initialState: InitialStateType = {
  foo: "plip",
};

export const fooAtom = atom<InitialStateType>({
  key: "fooAtom",
  default: initialState,
});

export const useFooState = () => useRecoilState(fooAtom);
export const useFooValue = () => useRecoilValue(fooAtom);
export const useFooSetter = () => useSetRecoilState(fooAtom);
export const useBazReset = () => useResetRecoilState(fooAtom);
