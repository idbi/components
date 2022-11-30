import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NoData } from "../index";
import { INoData } from "../types";
import { mockNoDataProps } from "./NoData.mock";

export default {
  title: "components/NoData",
  component: NoData,
  argTypes: {},
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockNoDataProps.base,
} as INoData;

export const Variant = Template.bind({});
Variant.args = {
  ...mockNoDataProps.variant,
} as INoData;