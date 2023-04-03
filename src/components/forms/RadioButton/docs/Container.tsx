import React, { useState } from "react";
import { RadioButton as RadioButtonComponent } from "../index";
import { IRadioButton } from "../types";

export const RadioButton: React.FC<IRadioButton> = () => {
  const [radio, setRadio] = useState("");

  const radios = [
    {
      uuid: "r1",
      text: "hola mundo",
    },
    {
      uuid: "r2",
      text: "hello world",
    },
    {
      uuid: "r3",
      text: "happy code",
    },
  ];

  return (
    <>
      {radios.map((r, i) => (
        <RadioButtonComponent
          key={`${i}${r.uuid}`}
          text={r.text}
          id={r.uuid}
          value={r.uuid}
          name="radios"
          onChange={(e) => setRadio(e.target.value)}
          checked={radio === r.uuid}
        />
      ))}
      el radio es {radio}
    </>
  );
};
