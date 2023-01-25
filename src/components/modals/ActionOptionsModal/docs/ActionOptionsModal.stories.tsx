import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ActionOptionsModal } from "./Container";
import { IActionOptionsModal } from "../types";
import { mock } from "./ActionOptionsModal.mock";

export default {
  title: "modals/ActionOptionsModal",
  component: ActionOptionsModal,
  argTypes: {},
} as ComponentMeta<typeof ActionOptionsModal>;

const Template: ComponentStory<typeof ActionOptionsModal> = (args) => <ActionOptionsModal {...args} />;

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
