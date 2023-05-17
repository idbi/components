import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TotalFooter } from "../index";
import { ITotalFooter } from "../types";
import { mockTotalFooterProps } from "./TotalFooter.mock";

export default {
  title: "utils/TotalFooter",
  component: TotalFooter,
  argTypes: {},
} as ComponentMeta<typeof TotalFooter>;

const Template: ComponentStory<typeof TotalFooter> = (args) => <TotalFooter {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockTotalFooterProps.base,
} as ITotalFooter;

export const WithAside = Template.bind({});
WithAside.args = {
  ...mockTotalFooterProps.withAside,
} as ITotalFooter;

export const withLightAside = Template.bind({});
withLightAside.args = {
  ...mockTotalFooterProps.withLightAside,
} as ITotalFooter;

export const WithBoldSymbol = Template.bind({});
WithBoldSymbol.args = {
  ...mockTotalFooterProps.withBoldSymbol,
} as ITotalFooter;

export const LeftPrice = Template.bind({});
LeftPrice.args = {
  ...mockTotalFooterProps.leftPrice,
} as ITotalFooter;
