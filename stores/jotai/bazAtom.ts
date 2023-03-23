import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";

interface InitialStateType {
  foo: string;
  bar: number;
}

const initialState: InitialStateType = {
  foo: "pinkman",
  bar: 1483,
};

// cosnt bazAtom = atom<InitialStateType>(initialState);

// useResetAtom 사용하기 위해서 atomWithReset 사용
const bazAtom = atomWithReset<InitialStateType>(initialState);

export const useBazState = () => useAtom(bazAtom);
export const useBazValue = () => useAtomValue(bazAtom);
export const useBazSetter = () => useSetAtom(bazAtom);
export const useBazReset = () => useResetAtom(bazAtom);
