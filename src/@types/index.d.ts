declare global {
  declare module "styled-components" {
    type Theme = import("../theme").Theme;
    export interface DefaultTheme extends Theme {}
  }
}
