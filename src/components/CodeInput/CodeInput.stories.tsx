import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CodeInput } from ".";
import { ICodeInputProps } from "./types";
import { mockCodeInputProps } from "./CodeInput.mock";

export default {
  title: "components/CodeInput",
  component: CodeInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CodeInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CodeInput> = (args) => (
  <CodeInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCodeInputProps.base,
} as ICodeInputProps;

export const Error = Template.bind({});

Error.args = {
  ...mockCodeInputProps.error,
} as ICodeInputProps;

export const Success = Template.bind({});

Success.args = {
  ...mockCodeInputProps.success,
} as ICodeInputProps;
