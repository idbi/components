import React, { InputHTMLAttributes, useState } from "react";
import { InputContainer } from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  placeholder?: string;
  // isDirty?: boolean;
  // invalid?: boolean;
  error?: boolean;
  success?: boolean;
}

export const TextInput: React.FC<InputProps> = ({
  type,
  leftAddon,
  rightAddon,
  placeholder,
  error,
  success,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer
      success={success}
      error={error}
      disabled={rest.disabled}
      isFocused={isFocused}
    >
      <span>{leftAddon}</span>
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
      <span>{rightAddon}</span>
      {error && (
        <span>
          <RiErrorWarningLine size={24} color="#EE2316" />
        </span>
      )}
      {success && (
        <span>
          <AiOutlineCheck size={20} color="#2DC96F" />
        </span>
      )}
    </InputContainer>
  );
};
