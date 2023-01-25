import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tab } from "../index";
import { ITab } from "../types";
import { mock } from "./Tab.mock";

export default {
  title: "UI/Tab",
  component: Tab,
  argTypes: {},
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as ITab;

export const customActiveColor = Template.bind({});
customActiveColor.args = {
  ...mock.customActiveColor,
} as ITab;

export const roundedTab = Template.bind({});
roundedTab.args = {
  ...mock.roundedTab,
} as ITab;

export const customTabWidth = Template.bind({});
customTabWidth.args = {
  ...mock.customTabWidth,
} as ITab;

export const customTabHeight = Template.bind({});
customTabHeight.args = {
  ...mock.customTabHeight,
} as ITab;

export const fullWidthTab = Template.bind({});
fullWidthTab.args = {
  ...mock.fullWidthTab,
} as ITab;
