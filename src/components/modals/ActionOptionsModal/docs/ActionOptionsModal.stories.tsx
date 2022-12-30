import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IActionOptionsModal } from "../types";
import { mock } from "./ActionOptionsModal.mock";

export default {
  title: "modals/ActionOptionsModal",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IActionOptionsModal;

export const withIcons = Template.bind({});
withIcons.args = {
  ...mock.withIcons,
} as IActionOptionsModal;

export const closeOnAction = Template.bind({});
closeOnAction.args = {
  ...mock.closeOnAction,
} as IActionOptionsModal;
