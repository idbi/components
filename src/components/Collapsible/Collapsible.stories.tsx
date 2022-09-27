import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Collapsible } from ".";
import { ICollapsibleProps } from "./types";
import { mockCollapsibleProps } from "./Collapsible.mock";

export default {
  title: "components/Collapsible",
  component: Collapsible,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Collapsible>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapsible> = (args) => (
  <Collapsible {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCollapsibleProps.base,
} as ICollapsibleProps;

export const Open = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Open.args = {
  ...mockCollapsibleProps.open,
} as ICollapsibleProps;
