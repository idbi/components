import React, { InputHTMLAttributes } from "react";
import { Text } from "@/components/typography";
import { RadioContainer } from "./styles";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: any;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ text, ...rest }) => {
  return (
    <RadioContainer>
      <input type="radio" {...rest} />
      <Text as="label" htmlFor={rest?.id}>
        {text}
      </Text>
    </RadioContainer>
  );
};
