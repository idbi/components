import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from "..";
import { TextFieldProps } from "../types";
import { mockTextFieldProps } from "./TextField.mock";

export default {
  title: "Forms/TextField",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextFieldProps.base,
} as TextFieldProps;

export const Error = Template.bind({});

Error.args = {
  ...mockTextFieldProps.error,
} as TextFieldProps;

export const Success = Template.bind({});

Success.args = {
  ...mockTextFieldProps.success,
} as TextFieldProps;

export const Info = Template.bind({});

Info.args = {
  ...mockTextFieldProps.info,
} as TextFieldProps;
