import { atom, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

interface InitialStateType {
  bar: number;
}

const initialState: InitialStateType = {
  bar: 1,
};

export const barAtom = atom<InitialStateType>({
  key: "barAtom",
  default: initialState,
});

export const useBarState = () => useRecoilState(barAtom);
export const useBarValue = () => useRecoilValue(barAtom);
export const useBarSetter = () => useSetRecoilState(barAtom);
export const useBazReset = () => useResetRecoilState(barAtom);
