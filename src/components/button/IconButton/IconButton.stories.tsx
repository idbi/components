import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from ".";
import { IIconButton, mockIconButtonProps } from "./IconButton.mock";

export default {
  title: "ui/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockIconButtonProps.base,
} as IIconButton;
