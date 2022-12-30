import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IBulletOptionsModal } from "../types";
import { mock } from "./BulletOptionsModal.mock";

export default {
  title: "modals/BulletOptionsModal",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

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
