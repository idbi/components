import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IUsersList } from "../types";
import { mock } from "./UsersList.mock";

export default {
  title: "imagesContainers/UsersList",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

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
