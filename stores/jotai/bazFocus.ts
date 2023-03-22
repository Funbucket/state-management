import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import { focusAtom } from "jotai-optics";

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
const barAtom = focusAtom(bazAtom, (optic) => optic.prop("bar"));
const derivedBarAtom = atom(
  (get) => get(barAtom),
  (get, set, value: number) => set(barAtom, get(barAtom) + value)
);

// select bar from baz
const fooAtom = focusAtom(bazAtom, (optic) => optic.prop("foo"));
const derivedFooAtom = atom(
  (get) => get(fooAtom),
  (get, set, value: string) => set(fooAtom, get(fooAtom) + value)
);

export const useBarValue = () => useAtomValue(derivedBarAtom);
export const useFooValue = () => useAtomValue(derivedFooAtom);
export const useBarIncrease = () => useSetAtom(derivedBarAtom);
export const useFooIncrease = () => useSetAtom(derivedFooAtom);
export const useBazReset = () => useResetAtom(bazAtom);
