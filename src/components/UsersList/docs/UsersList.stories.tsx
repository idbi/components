import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UsersList } from "./Container";
import { IUsersList } from "../types";
import { mock } from "./UsersList.mock";

export default {
  title: "imagesContainers/UsersList",
  component: UsersList,
  argTypes: {},
} as ComponentMeta<typeof UsersList>;

const Template: ComponentStory<typeof UsersList> = (args) => <UsersList {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IUsersList;

export const withAddBtn = Template.bind({});
withAddBtn.args = {
  ...mock.withAddBtn,
} as IUsersList;

export const customSize = Template.bind({});
customSize.args = {
  ...mock.customSize,
} as IUsersList;
