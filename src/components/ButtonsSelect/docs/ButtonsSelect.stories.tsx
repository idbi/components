import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonsSelect } from "./Container";
import { IButtonsSelect } from "../types";
import { mock } from "./ButtonsSelect.mock";

export default {
  title: "selects/ButtonsSelect",
  component: ButtonsSelect,
  argTypes: {},
} as ComponentMeta<typeof ButtonsSelect>;

const Template: ComponentStory<typeof ButtonsSelect> = (args) => (
  <ButtonsSelect {...args} />
);

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IButtonsSelect;
base.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSelect, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react'
      
      function App() {
        const [selected, setSelected] = useState("1");
      
        return (
          <IdThemeProvider>
            <ButtonsSelect
              selected={selected}
              onSelect={(val) => setSelected(val)}
              options={[
                {
                  content: 1,
                  value: '1'
                },
                {
                  content: 2,
                  value: '2'
                },
                {
                  content: 3,
                  value: '3'
                },
                {
                  content: 4,
                  value: '4'
                },
                {
                  content: 5,
                  value: '5'
                }
              ]}
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const withTitle = Template.bind({});
withTitle.args = {
  ...mock.withTitle,
} as IButtonsSelect;
withTitle.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSelect, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react'
      
      function App() {
        const [selected, setSelected] = useState("1");
      
        return (
          <IdThemeProvider>
            <ButtonsSelect
              title="Orden"
              selected={selected}
              onSelect={(val) => setSelected(val)}
              options={[
                {
                  content: 1,
                  value: '1'
                },
                {
                  content: 2,
                  value: '2'
                },
                {
                  content: 3,
                  value: '3'
                },
                {
                  content: 4,
                  value: '4'
                },
                {
                  content: 5,
                  value: '5'
                }
              ]}
            />
          </IdThemeProvider>
        )
      }
      
      export default App       
      `,
    },
  },
};

export const withDisabledOptions = Template.bind({});
withDisabledOptions.args = {
  ...mock.withDisabledOptions,
} as IButtonsSelect;
withDisabledOptions.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSelect, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react'
      
      function App() {
        const [selected, setSelected] = useState("1");
      
        return (
          <IdThemeProvider>
            <ButtonsSelect
              title="Orden"
              selected={selected}
              onSelect={(val) => setSelected(val)}
              options={[
                {
                  content: 1,
                  value: '1'
                },
                {
                  content: 2,
                  value: '2'
                },
                {
                  content: 3,
                  value: '3'
                },
                {
                  content: 4,
                  value: '4',
                  disabled: true
                },
                {
                  content: 5,
                  value: '5',
                  disabled: true
                }
              ]}
            />
          </IdThemeProvider>
        )
      }
      
      export default App          
      `,
    },
  },
};
