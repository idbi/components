declare global {
  declare module "styled-components" {
    type Theme = import("../ThemeProvider/theme").Theme;
    export interface DefaultTheme extends Theme {}
  }
}
