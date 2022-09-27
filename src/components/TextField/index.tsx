/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, forwardRef } from "react";
import { WithAnimation } from "@/utils/WithAnimation";
import CloseEye from "@/icons/CloseEye";
import OpenEye from "@/icons/OpenEye";
import { TextFieldProps } from "./types";
import { Text } from "../Typography";
import { TextInput } from "../TextInput";
import { TextFieldContainer } from "./styles";

const TextField: React.FC<TextFieldProps> = forwardRef<
  HTMLInputElement,
  TextFieldProps
>(
  (
    { label, type, error, isDirty, success, infoMessage, fullWidth, ...rest },
    ref
  ) => {
    const restProps = { ...rest, ref };
    const [showPassword, setShowPassword] = useState(false);
    return (
      <TextFieldContainer fullWidth={fullWidth}>
        {label && (
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
        )}
        <TextInput
          error={Boolean(error)}
          success={success || (!error && isDirty)}
          infoMessage={infoMessage}
          fullWidth={fullWidth}
          type={showPassword ? "text" : type}
          {...restProps}
        />
        {error && (
          <WithAnimation shouldAppear={Boolean(error)}>
            <Text size="xs" color="ALERT/900">
              {error}
            </Text>
          </WithAnimation>
        )}
      </TextFieldContainer>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
