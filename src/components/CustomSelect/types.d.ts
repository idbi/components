export interface ICustomSelect<T> {
  isMobile?: boolean;
  value: T;
  options: T[];
  placeholder?: string;
  onChange: (value: any) => void;
  formatOptionLabel?: (option: T) => React.ReactNode;
  formatSelectedOption?: (option: T) => React.ReactNode;
  fullWidth?: boolean;
}

export declare const CustomSelect = <T extends {}>(props: ICustomSelect<T>) =>
  JSX.Element;
