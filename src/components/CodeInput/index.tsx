import useCodeInput from "@/hooks";
import { WithAnimation } from "@/utils/WithAnimation";
import React from "react";
import { Text } from "../Typography";
import { CodeInputContainer, InputsContainer } from "./styles";
import type { ICodeInputProps } from "./types";

// WARN: Only one instance of CodeInput can be rendered at a time
// If a CodeInput is rendered among other input fields, they will not work as expected
// It will be fixed if needed, because CodeInput is isolated from other input fields

export const CodeInput: React.FC<ICodeInputProps> = ({
  id,
  value,
  length = 4,
  errorMessage,
  success,
  onChange = (e) => {},
  ...rest
}) => {
  useCodeInput(onChange, id, value);

  return (
    <CodeInputContainer>
      <InputsContainer
        length={length}
        success={success}
        errorMessage={errorMessage}
      >
        {Array.from({ length }).map((_, index) => (
          <input
            id={index.toString()}
            className={id}
            maxLength={1}
            key={index}
            {...rest}
          />
        ))}
      </InputsContainer>
      {errorMessage && (
        <WithAnimation shouldAppear={Boolean(errorMessage)}>
          <Text size="xs" weight="light" color="ALERT/900">
            {errorMessage}
          </Text>
        </WithAnimation>
      )}
    </CodeInputContainer>
  );
};
