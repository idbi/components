export interface DefaultTheme {
  [key: string]: any;
}

export interface IIdThemeProvider {
  children?: React.ReactNode;
  theme?: DefaultTheme;
}

export declare const IdThemeProvider: (props: IIdThemeProvider) => JSX.Element;
