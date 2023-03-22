import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface InitialStateType {
  foo: string;
  bar: number;
}

const initialState: InitialStateType = {
  foo: "export total",
  bar: 26,
};

interface ActionType {
  increaseFoo: (value: string) => void;
  increaseBar: (value: number) => void;
  initialize: VoidFunction;
}

export const useBazStore = create<InitialStateType & ActionType>((set) => ({
  ...initialState,
  increaseFoo: (value) => set((state) => ({ foo: (state.foo += value) })),
  increaseBar: (value) => set((state) => ({ bar: (state.bar += value) })),
  initialize: () => set({ ...initialState }),
}));
