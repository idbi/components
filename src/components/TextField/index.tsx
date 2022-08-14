import React, { useState } from "react";
import { TextFieldProps } from "./types";
import { Text } from "../Typography";
import { TextInput } from "../TextInput";
import { TextFieldContainer } from "./styles";
import { WithAnimation } from "@/utils/WithAnimation";
import CloseEye from "@/icons/CloseEye";
import OpenEye from "@/icons/OpenEye";
import { Button } from "../Button";

export const TextField: React.FC<TextFieldProps> = React.forwardRef<
  HTMLInputElement,
  TextFieldProps
>(({ label, type, errorMessage, infoMessage, fullWidth, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextFieldContainer fullWidth={fullWidth}>
      <div className="label-container">
        <Text as="label" align="left" size="sm" color="NEUTRAL/700">
          {label}
        </Text>
        {type === "password" && (
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <OpenEye size={20} /> : <CloseEye size={20} />}
          </span>
        )}
      </div>
      <TextInput
        error={Boolean(errorMessage)}
        infoMessage={infoMessage}
        fullWidth={fullWidth}
        type={showPassword ? "text" : type}
        {...rest}
      />
      {errorMessage && (
        <WithAnimation shouldAppear={Boolean(errorMessage)}>
          <Text size="xs" color="ALERT/900">
            {errorMessage}
          </Text>
        </WithAnimation>
      )}
    </TextFieldContainer>
  );
});
