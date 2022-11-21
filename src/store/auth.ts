import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  setLogin: (by: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        setLogin: (status) => set(() => ({ isLoggedIn: status })),
      }),
      {
        name: "auth-store",
      }
    )
  )
);
