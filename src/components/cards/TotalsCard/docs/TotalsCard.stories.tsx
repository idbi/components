import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TotalsCard } from "../index";
import { ITotalsCard } from "../types";
import { mockTotalsCardProps } from "./TotalsCard.mock";

export default {
  title: "cards/TotalsCard",
  component: TotalsCard,
  argTypes: {},
} as ComponentMeta<typeof TotalsCard>;

const Template: ComponentStory<typeof TotalsCard> = (args) => (
  <TotalsCard {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockTotalsCardProps.base,
} as ITotalsCard;

export const Intermediate = Template.bind({});
Intermediate.args = {
  ...mockTotalsCardProps.intermediate,
} as ITotalsCard;

export const Advanced = Template.bind({});
Advanced.args = {
  ...mockTotalsCardProps.advanced,
} as ITotalsCard;

export const WithChildren = Template.bind({});
WithChildren.args = {
  ...mockTotalsCardProps.withChildren,
} as ITotalsCard;
