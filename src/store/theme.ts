import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeState {
  theme: string;
  changeTheme: (by: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: "dark",
        changeTheme: (theme) => set({ theme }),
      }),
      {
        name: "theme-store",
      }
    )
  )
);
