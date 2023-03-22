import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface InitialStateType {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: InitialStateType = {
  isAuthenticated: false,
  token: null,
};

interface ActionType {
  dispatchAll: (value: InitialStateType) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<InitialStateType & ActionType>(
  persist(
    (set) => ({
      ...initialState,
      dispatchAll: (value: InitialStateType) => set({ ...value }),
      setToken: (token: string) => {
        set(() => ({ isAuthenticated: token === null ? false : true, token }));
      },
      logout: () => {
        set(() => ({ isAuthenticated: false, token: null }));
      },
    }),
    {
      name: "zustand_auth",
      // storage: createJSONStorage(() => sessionStorage),
      storage: createJSONStorage(() => localStorage), // default option
    }
  ) as any
);
