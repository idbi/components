import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";
import { IButton } from "./types";
import { mockButtonProps } from "./Button.mock";

export default {
  title: "components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockButtonProps.base,
} as IButton;

export const Google = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Google.args = {
  ...mockButtonProps.google,
} as IButton;
