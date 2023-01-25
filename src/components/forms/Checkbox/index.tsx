import React, { useEffect, useState } from "react";
import { IconChecked } from "../../../icons/IconChecked";
import { IconNotChecked } from "../../../icons/IconNotChecked";
import { Label } from "./styles";
import { ICheckbox } from "./types";

export const Checkbox: React.FC<ICheckbox> = ({
  children,
  value = "value",
  callbackOnChange = () => {},
  disabled = false,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(rest?.checked || false);

  useEffect(() => {
    setIsChecked(Boolean(rest?.checked));
  }, [rest?.checked]);

  return (
    <Label disabled={disabled}>
      <input
        {...rest}
        type="checkbox"
        value={value}
        disabled={disabled}
        onChange={(event) => {
          setIsChecked(!isChecked);
          callbackOnChange(event.target.value, !isChecked);
        }}
        checked={isChecked}
      />
      <span>
        {isChecked ? (
          <IconChecked color={disabled ? "gray" : "#4318FF"} />
        ) : (
          <IconNotChecked color={disabled ? "gray" : "#4318FF"} />
        )}
      </span>
      {children}
    </Label>
  );
};
