import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectField } from ".";
import { SelectFieldProps } from "./types";
import { mockSelectFieldProps } from "./SelectField.mock";

export default {
  title: "components/SelectField",
  component: SelectField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectFieldProps.base,
} as SelectFieldProps;
