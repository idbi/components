import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Separator } from "../index";
import { ISeparator } from "../types";
import { mockSeparatorProps } from "./Separator.mock";

export default {
  title: "components/Separator",
  component: Separator,
  argTypes: {},
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => (
  <Separator {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockSeparatorProps.base,
} as ISeparator;
