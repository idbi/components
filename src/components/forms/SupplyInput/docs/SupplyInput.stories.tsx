import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SupplyInput } from "../index";
import { ISupplyInput } from "../types";
import { mockSupplyInputProps } from "./SupplyInput.mock";

export default {
  title: "forms/SupplyInput",
  component: SupplyInput,
  argTypes: {},
} as ComponentMeta<typeof SupplyInput>;

const Template: ComponentStory<typeof SupplyInput> = (args) => (
  <SupplyInput {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSupplyInputProps.base,
} as ISupplyInput;

export const Variant1 = Template.bind({});
Variant1.args = {
  ...mockSupplyInputProps.variant1,
} as ISupplyInput;

export const Variant2 = Template.bind({});
Variant2.args = {
  ...mockSupplyInputProps.variant2,
} as ISupplyInput;

export const Variant3 = Template.bind({});
Variant3.args = {
  ...mockSupplyInputProps.variant3,
} as ISupplyInput;
