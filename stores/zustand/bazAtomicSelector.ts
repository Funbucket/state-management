import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";

interface InitialStateType {
  foo: string;
  bar: number;
}

const initialState: InitialStateType = {
  foo: "export atomic selector",
  bar: 81,
};

interface ActionType {
  actions: {
    increaseFoo: (value: string) => void;
    increaseBar: (value: number) => void;
    initialize: VoidFunction;
  };
}

// CASE 1: without persist
const useBazStore = create<InitialStateType & ActionType>((set) => ({
  ...initialState,
  actions: {
    increaseFoo: (value) => set((state) => ({ foo: (state.foo += value) })),
    increaseBar: (value) => set((state) => ({ bar: (state.bar += value) })),
    initialize: () => set({ ...initialState }),
  },
}));

// CASE 2: persist
// type PersistType = (
//   config: StateCreator<InitialStateType & ActionType>,
//   option: PersistOptions<Pick<InitialStateType, "bar">>
// ) => StateCreator<InitialStateType & ActionType>;

// const useBazStore = create<InitialStateType & ActionType>(
//   (persist as PersistType)(
//     (set) => ({
//       ...initialState,
//       actions: {
//         increaseFoo: (value) => set((state) => ({ foo: (state.foo += value) })),
//         increaseBar: (value) => set((state) => ({ bar: (state.bar += value) })),
//         initialize: () => set({ ...initialState }),
//       },
//     }),
//     {
//       name: "bar-storage",
//       // bar만 storage에 저장하기 위함
//       partialize: (state) => ({ bar: state.bar }),
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );

export const useFoo = () => useBazStore((state) => state.foo);
export const useBar = () => useBazStore((state) => state.bar);
export const useBazActions = () => useBazStore((state) => state.actions);
