import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionedKpi } from "../index";
import { ISectionedKpi } from "../types";
import { mockSectionedKpiProps } from "./SectionedKpi.mock";

export default {
  title: "reports/SectionedKpi",
  component: SectionedKpi,
  argTypes: {},
} as ComponentMeta<typeof SectionedKpi>;

const Template: ComponentStory<typeof SectionedKpi> = (args) => <SectionedKpi {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockSectionedKpiProps.base,
} as ISectionedKpi;

export const Loading = Template.bind({});
Loading.args = {
  ...mockSectionedKpiProps.loading,
} as ISectionedKpi;
