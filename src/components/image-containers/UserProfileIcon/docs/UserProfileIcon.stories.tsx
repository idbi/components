import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserProfileIcon } from "../index";
import { IUserIcon } from "../types";
import { mock } from "./UserProfileIcon.mock";

export default {
  title: "imagesContainers/UserProfileIcon",
  component: UserProfileIcon,
  argTypes: {},
} as ComponentMeta<typeof UserProfileIcon>;

const Template: ComponentStory<typeof UserProfileIcon> = (args) => <UserProfileIcon {...args} />;

export const noImage = Template.bind({});
noImage.args = {
  ...mock.noImage,
} as IUserIcon;

export const withImage = Template.bind({});
withImage.args = {
  ...mock.withImage,
} as IUserIcon;
