import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserIconTooltip } from "./Container";
import { IUserIconTooltip } from "../types";
import { mock } from "./UserIconTooltip.mock";

export default {
  title: "imagesContainers/UserIconTooltip",
  component: UserIconTooltip,
  argTypes: {},
} as ComponentMeta<typeof UserIconTooltip>;

const Template: ComponentStory<typeof UserIconTooltip> = (args) => <UserIconTooltip {...args} />;

export const noImage = Template.bind({});
noImage.args = {
  ...mock.noImage,
} as IUserIconTooltip;

export const withImage = Template.bind({});
withImage.args = {
  ...mock.withImage,
} as IUserIconTooltip;

export const noLastname = Template.bind({});
noLastname.args = {
  ...mock.noLastname,
} as IUserIconTooltip;

export const differentPosition = Template.bind({});
differentPosition.args = {
  ...mock.differentPosition,
} as IUserIconTooltip;
