import useCodeInput from "@/hooks";
import React, { useEffect } from "react";
import { IInputProps } from "../TextInput/styles";
import { CodeInputContainer } from "./styles";

export interface ICodeInputProps extends IInputProps {
  id: string;
  value?: string;
  length?: number;
  onChange?: (e: string) => void;
}

// WARN: Only one instance of CodeInput can be rendered at a time
// It will be fixed soon if needed

const CodeInput: React.FC<ICodeInputProps> = ({
  id,
  value,
  length = 4,
  error,
  success,
  onChange = (e) => {},
  ...rest
}) => {
  useCodeInput(onChange, id, value);

  return (
    <CodeInputContainer length={length} error={error} success={success}>
      {Array.from({ length }).map((_, index) => (
        <input
          id={index.toString()}
          className={id}
          maxLength={1}
          key={index}
          {...rest}
        />
      ))}
    </CodeInputContainer>
  );
};

export default CodeInput;
