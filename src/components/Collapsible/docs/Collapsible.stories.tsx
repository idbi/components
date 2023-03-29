import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Collapsible } from "./Container";
import { ICollapsible } from "../types";
import { mockCollapsibleProps } from "./Collapsible.mock";

export default {
  title: "components/Collapsible",
  component: Collapsible,
  argTypes: {},
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => (
  <Collapsible {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockCollapsibleProps.base,
} as ICollapsible;
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import { Button, Collapsible, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react'
      
      function App() {
        const [show, setShow] = useState(false)
      
        return (
          <IdThemeProvider>
            <Collapsible
              content={
                <Button design='outline' leftIcon={<>🕵🏻</>}>
                  Continuar
                </Button>
              }
              label='Open Collapsible'
              open={show}
              setOpen={setShow}
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};
