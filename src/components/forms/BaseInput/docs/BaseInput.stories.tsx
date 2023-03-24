import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseInput } from "../index";
import { BaseInput as BaseInputContainer } from "./Container";
import { BaseInput as BaseInputContainer2 } from "./Container2";
import { BaseInput as BaseInputContainer3 } from "./Container3";
import { IBaseInput } from "../types";
import { mock } from "./BaseInput.mock";

export default {
  title: "Forms/BaseInput",
  component: BaseInput,
  argTypes: {},
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput {...args} />
);

const Template2: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInputContainer {...args} />
);

const Template3: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInputContainer2 {...args} />
);

const Template4: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInputContainer3 {...args} />
);

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IBaseInput;

export const alert = Template.bind({});
alert.args = {
  ...mock.alert,
} as IBaseInput;

export const withEndElement = Template.bind({});
withEndElement.args = {
  ...mock.withEndElement,
} as IBaseInput;

export const withStartElement = Template.bind({});
withStartElement.args = {
  ...mock.withStartElement,
} as IBaseInput;

export const withSwitch = Template2.bind({});
withSwitch.parameters = {
  docs: {
    source: {
      code: dedent`
      import { BaseInput, ButtonsSwitch, IdThemeProvider, RadioButton } from '@idbi/components'
      import { useState } from 'react';
      
      const btnOptions = [
        { label: "s/", value: "PEN" },
        { label: "$", value: "USD" },
      ];
      
      function App() {
        const [option, setOption] = useState("PEN");
        const [amount, setAmount] = useState("");
      
        return (
          <IdThemeProvider>
            <BaseInput
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
          </IdThemeProvider>
        )
      }
      
      export default App
      `,
      language: "tsx",
      type: "auto",
    },
  },
};

export const withSwitch2 = Template3.bind({});
withSwitch2.parameters = {
  docs: {
    source: {
      code: dedent`
      import { BaseInput, ButtonsSwitch, IdThemeProvider, RadioButton, SelectField } from '@idbi/components'
      import { useMemo, useState } from 'react';
      
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
      
      function App() {
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
          <IdThemeProvider>
            <p>Selecciona la currency</p>
            <SelectField
              value={currency}
              onChange={(val) => setCurrency(val)}
              options={currencyOptions}
            />
            <p>Aplicar descuento por currency o porcentaje</p>
            <BaseInput
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
          </IdThemeProvider>
        )
      }
      
      export default App
      `,
      language: "tsx",
      type: "auto",
    },
  },
};

export const withSelect = Template4.bind({});
withSelect.parameters = {
  docs: {
    source: {
      code: dedent`
      import { BaseInput, IdThemeProvider, SelectField } from '@idbi/components'
      import { useState } from 'react';
      
      const btnOptions = [
        { label: "s/", value: "fixed" },
        { label: "%", value: "percentage" },
      ];
      
      function App() {
        const [option, setOption] = useState(btnOptions[0]);
        const [amount, setAmount] = useState("");
      
        return (
          <IdThemeProvider>
            <BaseInput
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
          </IdThemeProvider>
        )
      }
      
      export default App
      `,
      language: "tsx",
      type: "auto",
    },
  },
};
