export type Model = "primary" | "secondary";

export interface IButtonsSwitch {
  options: { label: string; value: string }[];
  selected: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  model?: Model;
}

export declare const ButtonsSwitch: (props: IButtonsSwitch) => JSX.Element;
