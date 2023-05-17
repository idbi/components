import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DetailedInput } from "../index";
import { IDetailedInput } from "../types";
import { mockDetailedInputProps } from "./DetailedInput.mock";

export default {
  title: "forms/DetailedInput",
  component: DetailedInput,
  argTypes: {},
} as ComponentMeta<typeof DetailedInput>;

const Template: ComponentStory<typeof DetailedInput> = (args) => <DetailedInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockDetailedInputProps.base,
} as IDetailedInput;

export const ExtraInputProps = Template.bind({});
ExtraInputProps.args = {
  ...mockDetailedInputProps.extraInputProps,
} as IDetailedInput;

export const InputRight = Template.bind({});
InputRight.args = {
  ...mockDetailedInputProps.inputRight,
} as IDetailedInput;

export const NoAside = Template.bind({});
NoAside.args = {
  ...mockDetailedInputProps.noAside,
} as IDetailedInput;
