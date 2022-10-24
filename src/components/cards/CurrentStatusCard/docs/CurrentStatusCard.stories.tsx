import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CurrentStatusCard } from "../index";
import { ICurrentStatusCard } from "../types";
import { mockCurrentStatusCardProps } from "./CurrentStatusCard.mock";

export default {
  title: "cards/CurrentStatusCard",
  component: CurrentStatusCard,
  argTypes: {},
} as ComponentMeta<typeof CurrentStatusCard>;

const Template: ComponentStory<typeof CurrentStatusCard> = (args) => (
  <CurrentStatusCard {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockCurrentStatusCardProps.base,
} as ICurrentStatusCard;

export const Intermediate = Template.bind({});
Intermediate.args = {
  ...mockCurrentStatusCardProps.intermediate,
} as ICurrentStatusCard;
