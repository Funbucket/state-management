import { atom, useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

interface InitialStateType {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: InitialStateType = {
  isAuthenticated: false,
  token: null,
};

const storage = createJSONStorage(() => localStorage);
const authAtom = atomWithStorage<any>("jotai_auth", initialState, storage);
const derivedAuthAtom = atom(
  (get) => get(authAtom),
  (get, set, token) =>
    set(authAtom, {
      isAuthenticated: token !== null ? true : false,
      token: token,
    })
);

export const useAuthAtom = () => useAtom(derivedAuthAtom);
