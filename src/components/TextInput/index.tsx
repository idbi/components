import React, { InputHTMLAttributes, useState } from "react";
import { InputContainer } from "./styles";
import { theme } from "@/ThemeProvider/theme";
import type { InputProps } from "./types";
import WarningIcon from "@/icons/WarningIcon";
import CheckIcon from "@/icons/CheckIcon";

export const TextInput: React.FC<InputProps> = ({
  type,
  leftAddon,
  rightAddon,
  placeholder,
  error,
  success,
  size,
  fullWidth,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer
      fullWidth={fullWidth}
      success={success}
      size={size}
      error={error}
      disabled={rest.disabled}
      isFocused={isFocused}
    >
      {leftAddon && <span className="leftAddon">{leftAddon}</span>}
      <input
        onFocus={(e) => {
          onFocus && onFocus(e);
          setIsFocused(true);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setIsFocused(false);
        }}
        placeholder={placeholder}
        type={type}
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
  );
};
