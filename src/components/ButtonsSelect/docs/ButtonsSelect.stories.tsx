import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IButtonsSelect } from "../types";
import { mock } from "./ButtonsSelect.mock";

export default {
  title: "selects/ButtonsSelect",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IButtonsSelect;

export const withTitle = Template.bind({});
withTitle.args = {
  ...mock.withTitle,
} as IButtonsSelect;

export const withDisabledOptions = Template.bind({});
withDisabledOptions.args = {
  ...mock.withDisabledOptions,
} as IButtonsSelect;
