import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BulletOptionsModal } from "./Container";
import { IBulletOptionsModal } from "../types";
import { mock } from "./BulletOptionsModal.mock";

export default {
  title: "modals/BulletOptionsModal",
  component: BulletOptionsModal,
  argTypes: {},
} as ComponentMeta<typeof BulletOptionsModal>;

const Template: ComponentStory<typeof BulletOptionsModal> = (args) => <BulletOptionsModal {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IBulletOptionsModal;

export const coloredOptions = Template.bind({});
coloredOptions.args = {
  ...mock.coloredOptions,
} as IBulletOptionsModal;

export const withDisabledOptions = Template.bind({});
withDisabledOptions.args = {
  ...mock.withDisabledOptions,
} as IBulletOptionsModal;
