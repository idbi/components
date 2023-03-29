import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "./Container";
import { IRadio } from "../types";
import { mockRadioProps } from "./Radio.mock";

export default {
  title: "forms/Radio",
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockRadioProps.base,
} as IRadio;
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import {
        IdThemeProvider,
        Radio,
      } from '@idbi/components'
      import { useState } from 'react'
      
      function App() {
        return (
          <IdThemeProvider>
            <Radio id='radioid' text='opción 1' name='radio' value='valor' />
            <Radio id='radioid' text='opción 2' name='radio' value='valor' />
            <Radio id='radioid' text='opción 3' name='radio' value='valor' />
            <Radio id='radioid' text='opción 4' name='radio' value='valor' />
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
