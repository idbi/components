import { ComponentStory, ComponentMeta } from "@storybook/react";
import { KpiCard } from "../index";
import { IKpiCard } from "../types";
import { mockKpiCardProps } from "./KpiCard.mock";

export default {
  title: "reports/KpiCard",
  component: KpiCard,
  argTypes: {},
} as ComponentMeta<typeof KpiCard>;

const Template: ComponentStory<typeof KpiCard> = (args) => <KpiCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  ...mockKpiCardProps.defaultCard,
} as IKpiCard;

export const PERCard = Template.bind({});
PERCard.args = {
  ...mockKpiCardProps.PERCard,
} as IKpiCard;

export const USACard = Template.bind({});
USACard.args = {
  ...mockKpiCardProps.USACard,
} as IKpiCard;

export const WithQuantityCard = Template.bind({});
WithQuantityCard.args = {
  ...mockKpiCardProps.withQuantityCard,
} as IKpiCard;

export const MainCard = Template.bind({});
MainCard.args = {
  ...mockKpiCardProps.mainCard,
} as IKpiCard;

export const bigAmountsCard = Template.bind({});
bigAmountsCard.args = {
  ...mockKpiCardProps.bigAmountsCard,
} as IKpiCard;

export const LoadingCard = Template.bind({});
LoadingCard.args = {
  ...mockKpiCardProps.loadingCard,
} as IKpiCard;

export const WithIconCard = Template.bind({});
WithIconCard.args = {
  ...mockKpiCardProps.withIconCard,
} as IKpiCard;
