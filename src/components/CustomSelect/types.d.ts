export interface ICustomSelect<T> {
  label?: string;
  searchable?: boolean;
  isMobile?: boolean;
  autoSize?: boolean;
  fullWidth?: boolean;
  fullWidthOptions?: boolean;
  value: T;
  options: T[];
  placeholder?: string;
  onChange: (value: any) => void;
  formatOptionLabel?: (option: T) => React.ReactNode;
  formatSelectedOption?: (option: T) => React.ReactNode;
}

export declare const CustomSelect = <T extends {}>(props: ICustomSelect<T>) =>
  JSX.Element;
