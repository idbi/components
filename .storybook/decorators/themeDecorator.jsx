import * as React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/theme/provider";
import { theme } from "@/theme";

const ThemDecorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default ThemDecorator;
