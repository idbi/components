import React from "react";
import { TextBuilder } from "../TextBuilder";
import { ITextProps } from "../TextBuilder/types";
import { TextContainer } from "./styles";

export const Text: React.FC<ITextProps> = (props) => {
  if (props.rightIcon || props.leftIcon) {
    return (
      <TextContainer>
        {props.leftIcon}
        <TextBuilder as={props.as || "p"} {...props} />
        {props.rightIcon}
      </TextContainer>
    );
  }
  return <TextBuilder as={props.as || "p"} {...props} />;
};
