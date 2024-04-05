import useCodeInput from "@/hooks/useCodeInput";
import { WithAnimation } from "@/utils/WithAnimation";
import React from "react";
import { Text } from "../Typography";
import { CodeInputContainer, InputsContainer } from "./styles";
import type { ICodeInputProps } from "./types";

// WARN: Only one instance of CodeInput can be rendered at a time
// If a CodeInput is rendered among other input fields, they will not work as expected
// It will be fixed if needed, because CodeInput is isolated from other input fields
//
// 2024/04/05: This issue is not fixed yet. It is still a known issue but can be fixed
// by passing a unique id to each CodeInput component and replace the containerId with
// that id. Hours spent because of this issue: 3
const containerId = "code-input-container";

export const CodeInput: React.FC<ICodeInputProps> = ({
  id,
  value,
  length = 4,
  errorMessage,
  success,
  onChange = () => {},
  ...rest
}) => {
  useCodeInput(onChange, id, value, containerId);

  return (
    <CodeInputContainer id={containerId}>
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
