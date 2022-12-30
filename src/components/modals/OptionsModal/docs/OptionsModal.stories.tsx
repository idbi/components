import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IOptionsModal } from "../types";
import { mock } from "./OptionsModal.mock";

export default {
  title: "modals/OptionsModal",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

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
