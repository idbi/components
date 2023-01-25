import { ComponentStory, ComponentMeta } from "@storybook/react";
import { KpiCardV2 } from "../index";
import { IKpiCardV2 } from "../types";
import { mockKpiCardV2Props } from "./KpiCardV2.mock";

export default {
  title: "reports/KpiCardV2",
  component: KpiCardV2,
  argTypes: {},
} as ComponentMeta<typeof KpiCardV2>;

const Template: ComponentStory<typeof KpiCardV2> = (args) => <KpiCardV2 {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  ...mockKpiCardV2Props.defaultCard,
} as IKpiCardV2;

export const LoadingCard = Template.bind({});
LoadingCard.args = {
  ...mockKpiCardV2Props.loadingCard,
} as IKpiCardV2;
