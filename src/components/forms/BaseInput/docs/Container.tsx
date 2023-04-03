import React, { useState } from "react";
import { ButtonsSwitch } from "@/components/buttons/ButtonsSwitch";
import { BaseInput as BaseInputComponent } from "..";
import { IBaseInput } from "../types";

const btnOptions = [
  { label: "s/", value: "PEN" },
  { label: "$", value: "USD" },
];

export const BaseInput = (props: IBaseInput) => {
  const [option, setOption] = useState("PEN");
  const [amount, setAmount] = useState("");

  return (
    <BaseInputComponent
      value={amount}
      onChange={(e) => setAmount(e?.target?.value)}
      startEl={
        <ButtonsSwitch
          options={btnOptions}
          selected={option}
          onSelect={(opt) => setOption(opt)}
          style={{ border: "none" }}
        />
      }
    />
  );
};
