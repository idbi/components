import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OrderCard } from "../index";
import { IOrderCard } from "../types";
import { mockOrderCardProps } from "./OrderCard.mock";

export default {
  title: "cards/OrderCard",
  component: OrderCard,
  argTypes: {},
} as ComponentMeta<typeof OrderCard>;

const Template: ComponentStory<typeof OrderCard> = (args) => (
  <OrderCard {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockOrderCardProps.base,
} as IOrderCard;

export const withChildren = Template.bind({});
withChildren.args = {
  ...mockOrderCardProps.withChildren,
} as IOrderCard;
