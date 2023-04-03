import React, { useMemo, useState } from "react";
import { ButtonsSwitch } from "@/components/buttons/ButtonsSwitch";
import { SelectField } from "@/components/SelectField";
import { BaseInput as BaseInputComponent } from "..";
import { IBaseInput } from "../types";

interface ICurrency {
  label: string;
  value: "PEN" | "USD";
}

const currencyOptions: ICurrency[] = [
  {
    label: "s/",
    value: "PEN",
  },
  {
    label: "$",
    value: "USD",
  },
];

const currencies = {
  PEN: "s/",
  USD: "$",
};

export const BaseInput = (props: IBaseInput) => {
  const [option, setOption] = useState("fixed");
  const [amount, setAmount] = useState("");

  const [currency, setCurrency] = useState<ICurrency>({
    label: "s/",
    value: "PEN",
  });

  const btnOptions = useMemo(() => {
    return [
      { label: currencies[currency.value], value: "fixed" },
      { label: "%", value: "percentage" },
    ];
  }, [currency]);

  return (
    <>
      <p>Selecciona la currency</p>
      <SelectField
        value={currency}
        onChange={(val) => setCurrency(val)}
        options={currencyOptions}
      />
      <p>Aplicar descuento por currency o porcentaje</p>
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
    </>
  );
};
