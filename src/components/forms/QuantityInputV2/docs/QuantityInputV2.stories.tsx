import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IQuantityInputV2 } from "../types";
import { mockConfirmationCardV2Props } from "./QuantityInputV2.mock";

export default {
  title: "forms/QuantityInputV2",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IQuantityInputV2;

export const withIcon = Template.bind({});
withIcon.args = {
  ...mockConfirmationCardV2Props.withIcon,
} as IQuantityInputV2;

export const noDecrease = Template.bind({});
noDecrease.args = {
  ...mockConfirmationCardV2Props.noDecrease,
} as IQuantityInputV2;

export const fullWidth = Template.bind({});
fullWidth.args = {
  ...mockConfirmationCardV2Props.fullWidth,
} as IQuantityInputV2;
