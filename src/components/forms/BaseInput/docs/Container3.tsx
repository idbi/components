import React, { useState } from "react";
import { SelectField } from "@/components/SelectField";
import { BaseInput as BaseInputComponent } from "..";

import { IBaseInput } from "../types";

const btnOptions = [
  { label: "s/", value: "fixed" },
  { label: "%", value: "percentage" },
];

export const BaseInput = (props: IBaseInput) => {
  const [option, setOption] = useState(btnOptions[0]);
  const [amount, setAmount] = useState("");

  return (
    <BaseInputComponent
      value={amount}
      onChange={(e) => setAmount(e?.target?.value)}
      startEl={
        <SelectField
          value={option}
          options={btnOptions}
          onChange={(type) => setOption(type)}
          style={{ width: "100px", transform: "scale(0.8)" }}
        />
      }
      minHeight={0}
      containerProps={{
        style: { paddingLeft: "0" },
      }}
    />
  );
};
