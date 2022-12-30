import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HorizontalDivision } from "../index";
import { IHorizontalDivision } from "../types";
import { mock } from "./HorizontalDivision.mock";

export default {
  title: "UI/HorizontalDivision",
  component: HorizontalDivision,
  argTypes: {},
} as ComponentMeta<typeof HorizontalDivision>;

const Template: ComponentStory<typeof HorizontalDivision> = (args) => <HorizontalDivision {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IHorizontalDivision;

export const customThickness = Template.bind({});
customThickness.args = {
  ...mock.customThickness,
} as IHorizontalDivision;

export const customMinDivisionWidth = Template.bind({});
customMinDivisionWidth.args = {
  ...mock.customMinDivisionWidth,
} as IHorizontalDivision;
