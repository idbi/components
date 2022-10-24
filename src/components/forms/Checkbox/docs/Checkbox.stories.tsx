import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../index";
import { ICheckbox } from "../types";
import { mockCheckboxProps } from "./Checkbox.mock";

export default {
  title: "forms/Checkbox",
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockCheckboxProps.base,
} as ICheckbox;
