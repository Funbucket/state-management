import { atom, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

interface InitialStateType {
  foo: string;
  bar: number;
}

const initialState: InitialStateType = {
  foo: "tovdata",
  bar: 123,
};

const bazAtom = atom<InitialStateType>({
  key: "bazAtom",
  default: initialState,
});

export const useBazState = () => useRecoilState(bazAtom);
export const useBazValue = () => useRecoilValue(bazAtom);
export const useBazSetter = () => useSetRecoilState(bazAtom);
export const useBazReset = () => useResetRecoilState(bazAtom);
