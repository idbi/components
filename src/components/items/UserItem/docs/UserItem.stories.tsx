import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserItem } from "../index";
import { IUserItem } from "../types";
import { mockUserItemProps } from "./UserItem.mock";

export default {
  title: "items/UserItem",
  component: UserItem,
  argTypes: {},
} as ComponentMeta<typeof UserItem>;

const Template: ComponentStory<typeof UserItem> = (args) => <UserItem {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockUserItemProps.base,
} as IUserItem;

export const WithImage = Template.bind({});
WithImage.args = {
  ...mockUserItemProps.withImage,
} as IUserItem;

export const CustomImageSize = Template.bind({});
CustomImageSize.args = {
  ...mockUserItemProps.customImageSize,
} as IUserItem;

export const AsideVariant = Template.bind({});
AsideVariant.args = {
  ...mockUserItemProps.asideVariant,
} as IUserItem;
