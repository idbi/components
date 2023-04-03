import { createContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { theme as defaultTheme } from "..";
import { DefaultTheme, IIdThemeProvider } from "./types";

export const ThemeContext = createContext<DefaultTheme | undefined>(undefined)

const mergeTheme = (theme?: DefaultTheme) =>
  theme ? { ...defaultTheme, ...theme } : defaultTheme;

export const IdThemeProvider = (
  props: IIdThemeProvider
): JSX.Element | null => {
  const themeContext = useMemo(() => mergeTheme(props?.theme), [props.theme]);

  if (!props.children) return null;

  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={themeContext}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
