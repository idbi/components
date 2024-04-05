export interface ICodeInputProps extends IInputProps {
  id: string;
  value?: string;
  length?: number;
  errorMessage?: string;
  success?: boolean;
  onChange?: (e: string) => void;
  type?: "text" | "number";
}

export declare const CodeInput: (props: ICodeInputProps) => JSX.Element;
