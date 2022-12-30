import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionHeader } from "../index";
import { ISectionHeader } from "../types";
import { mock } from "./SectionHeader.mock";

export default {
  title: "Headers/SectionHeader",
  component: SectionHeader,
  argTypes: {},
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => <SectionHeader {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as ISectionHeader;

export const withAside = Template.bind({});
withAside.args = {
  ...mock.withAside,
} as ISectionHeader;

export const withoutSubtitle = Template.bind({});
withoutSubtitle.args = {
  ...mock.withoutSubtitle,
} as ISectionHeader;
