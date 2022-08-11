import useCodeInput from "@/hooks";
import React from "react";
import { CodeInputContainer } from "./styles";
import type { ICodeInputProps } from "./types";

// WARN: Only one instance of CodeInput can be rendered at a time
// It will be fixed soon if needed

export const CodeInput: React.FC<ICodeInputProps> = ({
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
