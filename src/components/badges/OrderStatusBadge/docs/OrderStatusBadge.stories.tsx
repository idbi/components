import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OrderStatusBadge } from "../index";
import { IOrderStatusBadge } from "../types";
import { mockOrderStatusBadgeProps } from "./OrderStatusBadge.mock";

export default {
  title: "badges/OrderStatusBadge",
  component: OrderStatusBadge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof OrderStatusBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrderStatusBadge> = (args) => (
  <OrderStatusBadge {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  ...mockOrderStatusBadgeProps.defaultStatus,
} as IOrderStatusBadge;

export const Draft = Template.bind({});
Draft.args = {
  ...mockOrderStatusBadgeProps.draftStatus,
} as IOrderStatusBadge;

export const Pending = Template.bind({});
Pending.args = {
  ...mockOrderStatusBadgeProps.pendingStatus,
} as IOrderStatusBadge;

export const Rejected = Template.bind({});
Rejected.args = {
  ...mockOrderStatusBadgeProps.rejectedStatus,
} as IOrderStatusBadge;

export const Accepted = Template.bind({});
Accepted.args = {
  ...mockOrderStatusBadgeProps.acceptedStatus,
} as IOrderStatusBadge;

export const Canceled = Template.bind({});
Canceled.args = {
  ...mockOrderStatusBadgeProps.canceledStatus,
} as IOrderStatusBadge;

export const Preparing = Template.bind({});
Preparing.args = {
  ...mockOrderStatusBadgeProps.preparingStatus,
} as IOrderStatusBadge;

export const ReadyForPickUp = Template.bind({});
ReadyForPickUp.args = {
  ...mockOrderStatusBadgeProps.readyforpickupStatus,
} as IOrderStatusBadge;

export const Delivered = Template.bind({});
Delivered.args = {
  ...mockOrderStatusBadgeProps.deliveredStatus,
} as IOrderStatusBadge;

export const Finished = Template.bind({});
Finished.args = {
  ...mockOrderStatusBadgeProps.finishedStatus,
} as IOrderStatusBadge;

