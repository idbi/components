import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OptionsModal } from "./Container";
import { IOptionsModal } from "../types";
import { mock } from "./OptionsModal.mock";

export default {
  title: "modals/OptionsModal",
  component: OptionsModal,
  argTypes: {},
} as ComponentMeta<typeof OptionsModal>;

const Template: ComponentStory<typeof OptionsModal> = (args) => <OptionsModal {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IOptionsModal;

export const withIcons = Template.bind({});
withIcons.args = {
  ...mock.withIcons,
} as IOptionsModal;

export const withDisabledOptions = Template.bind({});
withDisabledOptions.args = {
  ...mock.withDisabledOptions,
} as IOptionsModal;
