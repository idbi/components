import React from "react";
import * as s from "./styles";
import type { ISupplyInput } from "./types";

export const SupplyInput: React.FC<ISupplyInput> = ({
  description,
  defaultValue,
  value,
  onChange = () => {},
  placeholder,
  suffix,
  disabled,
  readingMode,
}) => {
  return (
    <s.Container
      disabled={disabled}
      withDescription={Boolean(description)}
      readingMode={readingMode}
    >
      {description && <s.Description>{description}</s.Description>}
      {readingMode ? (
        <s.SubContainer readingMode={readingMode}>
          <s.Value>{defaultValue}</s.Value>
          {suffix && !disabled && <s.Suffix>{suffix}</s.Suffix>}
        </s.SubContainer>
      ) : (
        <s.SubContainer>
          <input
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          />
          {suffix && !disabled && <s.Suffix>{suffix}</s.Suffix>}
        </s.SubContainer>
      )}
    </s.Container>
  );
};
