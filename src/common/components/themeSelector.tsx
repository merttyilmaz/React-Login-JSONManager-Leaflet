import { useThemeStore } from "@/store/theme";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ThemeSelector = (props: Props) => {
  const { theme } = useThemeStore();

  return <div className={`${theme}`}>{props.children}</div>;
};

export default ThemeSelector;
