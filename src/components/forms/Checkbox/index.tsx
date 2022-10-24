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
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (rest.checked) setIsChecked(rest.checked);
  }, []);

  return (
    <Label disabled={disabled}>
      <input
        type="checkbox"
        value={value}
        disabled={disabled}
        onChange={(event) => {
          callbackOnChange(event.target.value, isChecked && !disabled);
          setIsChecked(!isChecked);
        }}
        {...rest}
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
