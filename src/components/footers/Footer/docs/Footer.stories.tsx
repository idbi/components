import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "../index";
import { IFooter } from "../types";
import { mockFooterProps } from "./Footer.mock";

export default {
  title: "footers/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...mockFooterProps.primary,
} as IFooter;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockFooterProps.secondary,
} as IFooter;

export const WithTotal = Template.bind({});
WithTotal.args = {
  ...mockFooterProps.withTotal,
} as IFooter;

export const WithExtraContent = Template.bind({});
WithExtraContent.args = {
  ...mockFooterProps.withExtraContent,
} as IFooter;

export const FixedStrategy = Template.bind({});
FixedStrategy.args = {
  ...mockFooterProps.fixedStrategy,
} as IFooter;
