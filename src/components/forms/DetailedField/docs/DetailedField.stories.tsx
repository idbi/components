import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DetailedField } from "../index";
import { IDetailedField } from "../types";
import { mockDetailedFieldProps } from "./DetailedField.mock";

export default {
  title: "forms/DetailedField",
  component: DetailedField,
  argTypes: {},
} as ComponentMeta<typeof DetailedField>;

const Template: ComponentStory<typeof DetailedField> = (args) => <DetailedField {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockDetailedFieldProps.base,
} as IDetailedField;

export const ContentRight = Template.bind({});
ContentRight.args = {
  ...mockDetailedFieldProps.contentRight,
} as IDetailedField;

export const ContentSpacing = Template.bind({});
ContentSpacing.args = {
  ...mockDetailedFieldProps.contentSpacing,
} as IDetailedField;
