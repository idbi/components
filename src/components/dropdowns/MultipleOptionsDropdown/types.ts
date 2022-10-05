export interface IOption {
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  alert?: boolean;
}

export interface IMultiOption {
  text: string;
  description?: string;
  options: IOption[];
}
