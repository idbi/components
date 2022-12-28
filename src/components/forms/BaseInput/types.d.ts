export type IBaseInput = React.InputHTMLAttributes<HTMLInputElement> & {
  alert?: boolean;
  fullWidth?: boolean;
  minHeight?: number;
  startEl?: JSX.Element;
  endEl?: JSX.Element;
  inputRef?: React.MutableRefObject<HTMLInputElement> | ((node: HTMLInputElement | null) => void);
};
