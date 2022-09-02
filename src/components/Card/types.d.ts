export interface ICard {
  design: "primary" | "secondary" | "flat";
  header?: JSX.Element;
  options?: any[];
  optionsFormatter?: (option: any) => JSX.Element;
  content?: JSX.Element;
  withSeparator?: boolean;
}

export declare const Card: (props: ICard) => JSX.Element;
