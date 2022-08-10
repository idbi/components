import * as React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/ThemeProvider";
import { theme } from "@/ThemeProvider/theme";

const ThemDecorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default ThemDecorator;
