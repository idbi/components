import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OrderTypeBanner } from "../index";
import { IOrderTypeBanner } from "../types";
import { mockOrderTypeBannerProps } from "./OrderTypeBanner.mock";

export default {
  title: "banners/OrderTypeBanner",
  component: OrderTypeBanner,
  argTypes: {},
} as ComponentMeta<typeof OrderTypeBanner>;

const Template: ComponentStory<typeof OrderTypeBanner> = (args) => (
  <OrderTypeBanner {...args} />
);

export const OnTable = Template.bind({});
OnTable.args = {
  ...mockOrderTypeBannerProps.onTable,
} as IOrderTypeBanner;

export const Delivery = Template.bind({});
Delivery.args = {
  ...mockOrderTypeBannerProps.delivery,
} as IOrderTypeBanner;

export const OnRoom = Template.bind({});
OnRoom.args = {
  ...mockOrderTypeBannerProps.onRoom,
} as IOrderTypeBanner;

export const PickUp = Template.bind({});
PickUp.args = {
  ...mockOrderTypeBannerProps.pickUp,
} as IOrderTypeBanner;

export const PersonalizeWithChildren = Template.bind({});
PersonalizeWithChildren.args = {
  ...mockOrderTypeBannerProps.personalizeWithChildren,
} as IOrderTypeBanner;
