import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, selectAtom, useResetAtom } from "jotai/utils";

interface InitialStateType {
  foo: string;
  bar: number;
}

const initialState: InitialStateType = {
  foo: "pinkman",
  bar: 1483,
};

// useResetAtom 사용하기 위해서 atomWithReset 사용
const bazAtom = atomWithReset<InitialStateType>(initialState);

// select bar from baz
const barAtom = selectAtom(bazAtom, (baz) => baz.bar);

// select bar from baz
const fooAtom = selectAtom(bazAtom, (baz) => baz.foo);

export const useBarValue = () => useAtomValue(barAtom);
export const useFooValue = () => useAtomValue(fooAtom);
export const useBazState = () => useAtom(bazAtom);
export const useBazReset = () => useResetAtom(bazAtom);
