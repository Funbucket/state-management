import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface InitialStateType {
  foo: string;
  bar: number;
}

const initialState: InitialStateType = {
  foo: "export total",
  bar: 10,
};

interface ActionType {
  increaseFoo: (value: string) => void;
  increaseBar: (value: number) => void;
  initialize: VoidFunction;
}

// CASE 1: 전체 store export
export const useBazStore = create<InitialStateType & ActionType>((set) => ({
  ...initialState,
  increaseFoo: (value) => set((state) => ({ foo: (state.foo += value) })),
  increaseBar: (value) => set((state) => ({ bar: (state.bar += value) })),
  initialize: () => set({ ...initialState }),
}));

// CASE 2: 전체 store export, using immer
// export const usePrimitiveStore = create(
//   immer<InitialStateType & ActionType>((set) => ({
//     ...initialState,
//     increaseFoo: (value) =>
//       set((state) => {
//         state.foo = value;
//       }),
//     increaseBar: (value) =>
//       set((state) => {
//         state.bar = value;
//       }),
//     initialize: () => set({ ...initialState }),
//   }))
// );
