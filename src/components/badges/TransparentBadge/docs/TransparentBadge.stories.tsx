import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { mockConfirmationCardV2Props } from "./TransparentBadge.mock";

export default {
  title: "badges/TransparentBadge",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = () => <Container />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
};
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import {
        IdThemeProvider,
        TransparentBadge,
      } from '@idbi/components'
      
      function App() {
        return (
          <IdThemeProvider>
              <TransparentBadge intensity={0.3} opacity={0.1}>
                1
              </TransparentBadge>
              <TransparentBadge intensity={0.5} opacity={0.2}>
                Text
              </TransparentBadge>
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
