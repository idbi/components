import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectField } from "..";
import { SelectFieldProps } from "../types";
import { mockSelectFieldProps } from "./SelectField.mock";

export default {
  title: "components/SelectField",
  component: SelectField,
  argTypes: {},
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
);

export const DefaultSelectField = Template.bind({});
DefaultSelectField.args = {
  ...mockSelectFieldProps.defaultSelectField,
} as SelectFieldProps;

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  ...mockSelectFieldProps.multiSelect,
} as SelectFieldProps;

export const CustomSelect = Template.bind({});
CustomSelect.args = {
  ...mockSelectFieldProps.customSelect,
} as SelectFieldProps;
