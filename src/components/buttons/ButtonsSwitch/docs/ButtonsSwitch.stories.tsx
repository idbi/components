import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IButtonsSwitchContainer } from "./Container";
import { mockConfirmationCardV2Props } from "./ButtonsSwitch.mock";

export default {
  title: "forms/ButtonsSwitch",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...mockConfirmationCardV2Props.primary,
} as IButtonsSwitchContainer;

export const PrimaryFullWidth = Template.bind({});
PrimaryFullWidth.args = {
  ...mockConfirmationCardV2Props.primaryFullWidth,
} as IButtonsSwitchContainer;

export const PrimaryMultipleOptions = Template.bind({});
PrimaryMultipleOptions.args = {
  ...mockConfirmationCardV2Props.primaryMultipleOptions,
} as IButtonsSwitchContainer;

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...mockConfirmationCardV2Props.primaryDisabled,
} as IButtonsSwitchContainer;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockConfirmationCardV2Props.secondary,
} as IButtonsSwitchContainer;

export const SecondaryMultipleOptions = Template.bind({});
SecondaryMultipleOptions.args = {
  ...mockConfirmationCardV2Props.secondaryMultipleOptions,
} as IButtonsSwitchContainer;
