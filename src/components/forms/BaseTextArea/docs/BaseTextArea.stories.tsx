import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseTextArea } from "../index";
import { IBaseTextArea } from "../types";
import { mock } from "./BaseTextArea.mock";

export default {
  title: "Forms/BaseTextArea",
  component: BaseTextArea,
  argTypes: {},
} as ComponentMeta<typeof BaseTextArea>;

const Template: ComponentStory<typeof BaseTextArea> = (args) => (
  <BaseTextArea {...args} />
);

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IBaseTextArea;

export const alert = Template.bind({});
alert.args = {
  ...mock.alert,
} as IBaseTextArea;
