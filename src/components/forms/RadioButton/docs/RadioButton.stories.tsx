import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioButton } from "../index";
import { RadioButton as RadioButtonContainer } from "./Container";
import { IRadioButton } from "../types";
import { mockRadioButtonProps } from "./RadioButton.mock";

export default {
  title: "forms/RadioButton",
  component: RadioButton,
  argTypes: {},
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

const Template2: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButtonContainer {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockRadioButtonProps.base,
} as IRadioButton;

export const Base2 = Template2.bind({});
Base2.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, RadioButton } from '@idbi/components'
      import { useState } from 'react';
      
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
      
      function App() {
        const [radio, setRadio] = useState("");
      
        return (
          <IdThemeProvider>
            {radios.map((r, i) => (
              <RadioButton
                key={\`\${i}\${r.uuid}\`}
                text={r.text}
                id={r.uuid}
                value={r.uuid}
                name="radios"
                onChange={(e) => setRadio(e.target.value)}
                checked={radio === r.uuid}
              />
            ))}
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