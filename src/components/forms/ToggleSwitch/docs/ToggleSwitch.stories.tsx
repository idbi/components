import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggleSwitch } from "../index";
import { IToggleSwitch } from "../types";
import { mockToggleSwitchProps } from "./ToggleSwitch.mock";

export default {
  title: "forms/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {},
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockToggleSwitchProps.base,
} as IToggleSwitch;

export const DefaultProps = Template.bind({});
DefaultProps.args = {
  ...mockToggleSwitchProps.defaultProps,
} as IToggleSwitch;
