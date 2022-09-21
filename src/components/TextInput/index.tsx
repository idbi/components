/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, forwardRef } from "react";
import { theme } from "@/theme";
import WarningIcon from "@/icons/WarningIcon";
import CheckIcon from "@/icons/CheckIcon";
import { WithAnimation } from "@/utils/WithAnimation";
import { Text } from "../Typography";
import type { InputProps } from "./types";
import { InputContainer } from "./styles";

const TextInput: React.FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      type,
      leftAddon,
      rightAddon,
      placeholder,
      error,
      success,
      size,
      fullWidth,
      name,
      infoMessage,
      onFocus,
      onBlur,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const shouldAppear = !error && !success && infoMessage && isFocused;
    return (
      <>
        <InputContainer
          fullWidth={fullWidth}
          success={success}
          size={size}
          error={error}
          disabled={rest.disabled}
          leftAddon={leftAddon}
          rightAddon={rightAddon}
          isFocused={isFocused}
        >
          {leftAddon && <span className="leftAddon">{leftAddon}</span>}
          <input
            ref={ref}
            onFocus={(e) => {
              onFocus && onFocus(e);
              setIsFocused(true);
            }}
            onBlur={(e) => {
              onBlur && onBlur(e);
              setIsFocused(false);
            }}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            name={name}
            {...rest}
          />
          {rightAddon && <span className="rightAddon">{rightAddon}</span>}
          {error && (
            <span className="state">
              <WarningIcon size={24} color={theme.color.ALERT[900]} />
            </span>
          )}
          {success && (
            <span className="state">
              <CheckIcon size={20} color={theme.color.SUCCESS[900]} />
            </span>
          )}
        </InputContainer>
        {shouldAppear && (
          <WithAnimation shouldAppear={shouldAppear}>
            <Text size="xs" color="QUATERNARY/900">
              {infoMessage}
            </Text>
          </WithAnimation>
        )}
      </>
    );
  }
);

TextInput.displayName = "TextInput";
export { TextInput };
