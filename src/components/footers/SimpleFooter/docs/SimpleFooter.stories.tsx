import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleFooter } from "../index";
import { ISimpleFooter } from "../types";
import { mockSimpleFooterProps } from "./SimpleFooter.mock";

export default {
  title: "footers/SimpleFooter",
  component: SimpleFooter,
  argTypes: {},
} as ComponentMeta<typeof SimpleFooter>;

const Template: ComponentStory<typeof SimpleFooter> = (args) => (
  <SimpleFooter {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSimpleFooterProps.base,
} as ISimpleFooter;

export const Variant = Template.bind({});
Variant.args = {
  ...mockSimpleFooterProps.variant,
} as ISimpleFooter;