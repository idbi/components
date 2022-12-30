import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseInput } from "../index";
import { IBaseInput } from "../types";
import { mock } from "./BaseInput.mock";

export default {
  title: "Forms/BaseInput",
  component: BaseInput,
  argTypes: {},
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IBaseInput;

export const alert = Template.bind({});
alert.args = {
  ...mock.alert,
} as IBaseInput;

export const withEndElement = Template.bind({});
withEndElement.args = {
  ...mock.withEndElement,
} as IBaseInput;

export const withStartElement = Template.bind({});
withStartElement.args = {
  ...mock.withStartElement,
} as IBaseInput;
