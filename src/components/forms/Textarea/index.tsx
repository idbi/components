import React, { useEffect, useRef, useState } from "react";
import { ITextarea } from "./types";
import * as s from "./styles";

export const Textarea = ({
  value,
  onChange,
  onFocus,
  onBlur,
  disabled,
  resize = true,
  startEl,
  endEl,
  ...props
}: ITextarea) => {
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const handleTextareaResize = () => {
    const el = textareaRef.current!;
    el.style.height = "";
    el.style.height = `${el.scrollHeight + 2}px`;
  };

  useEffect(() => {
    if (resize) handleTextareaResize();
  }, [value, resize]);

  return (
    <s.Container data-focused={focused} data-disabled={disabled}>
      {startEl}
      <s.Textarea
        ref={textareaRef}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          if (onChange) onChange(e.target.value, e);
          if (resize && !value) handleTextareaResize();
        }}
        onFocus={(e) => {
          setFocused(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          if (onBlur) onBlur(e);
        }}
        {...props}
      />
      {endEl}
    </s.Container>
  );
};
