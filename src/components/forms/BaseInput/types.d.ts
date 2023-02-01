export type IBaseInput = React.InputHTMLAttributes<HTMLInputElement> & {
  alert?: boolean;
  fullWidth?: boolean;
  minHeight?: number;
  startEl?: JSX.Element | null;
  endEl?: JSX.Element | null;
  inputRef?: React.MutableRefObject<HTMLInputElement | null> | ((node: HTMLInputElement | null) => void);
  containerProps?: React.InputHTMLAttributes<HTMLDivElement>;
};

export declare const BaseInput: (props: IBaseInput) => JSX.Element;
