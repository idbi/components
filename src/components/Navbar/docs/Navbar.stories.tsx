import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "../index";
import { INavbar } from "../types";
import { mockNavbarProps } from "./Navbar.mock";

export default {
  title: "components/Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {
  ...mockNavbarProps.defaultNavbar,
} as INavbar;

export const SimpleNavbar = Template.bind({});
SimpleNavbar.args = {
  ...mockNavbarProps.SimpleNavbar,
} as INavbar;
