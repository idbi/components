import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropdownMenu } from ".";
import { IDropdownMenu } from "./types";
import { mockDropdownMenuProps } from "./DropdownMenu.mock";

export default {
  title: "components/DropdownMenu",
  component: DropdownMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DropdownMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDropdownMenuProps.base,
} as IDropdownMenu;

export const WithIcons = Template.bind({});

WithIcons.args = {
  ...mockDropdownMenuProps.withIcons,
} as IDropdownMenu;

export const WithSubOptions = Template.bind({});

WithSubOptions.args = {
  ...mockDropdownMenuProps.withSubOptions,
} as IDropdownMenu;
