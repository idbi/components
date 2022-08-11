export interface ICodeInputProps extends IInputProps {
  id: string;
  value?: string;
  length?: number;
  error?: boolean;
  success?: boolean;
  onChange?: (e: string) => void;
}

export declare const CodeInput: (props: ICodeInputProps) => JSX.Element;
