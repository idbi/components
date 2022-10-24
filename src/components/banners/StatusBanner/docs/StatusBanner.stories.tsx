import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StatusBanner } from "../index";
import { IStatusBanner } from "../types";
import { mockStatusBannerProps } from "./StatusBanner.mock";

export default {
  title: "banners/StatusBanner",
  component: StatusBanner,
  argTypes: {},
} as ComponentMeta<typeof StatusBanner>;

const Template: ComponentStory<typeof StatusBanner> = (args) => (
  <StatusBanner {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockStatusBannerProps.base,
} as IStatusBanner;

export const Draft = Template.bind({});
Draft.args = {
  ...mockStatusBannerProps.draft,
} as IStatusBanner;

export const Pending = Template.bind({});
Pending.args = {
  ...mockStatusBannerProps.pending,
} as IStatusBanner;

export const Rejected = Template.bind({});
Rejected.args = {
  ...mockStatusBannerProps.rejected,
} as IStatusBanner;

export const Accepted = Template.bind({});
Accepted.args = {
  ...mockStatusBannerProps.accepted,
} as IStatusBanner;

export const Canceled = Template.bind({});
Canceled.args = {
  ...mockStatusBannerProps.canceled,
} as IStatusBanner;

export const Preparing = Template.bind({});
Preparing.args = {
  ...mockStatusBannerProps.preparing,
} as IStatusBanner;

export const ReadyForPickup = Template.bind({});
ReadyForPickup.args = {
  ...mockStatusBannerProps.readyForPickup,
} as IStatusBanner;

export const Delivered = Template.bind({});
Delivered.args = {
  ...mockStatusBannerProps.delivered,
} as IStatusBanner;

export const Personalize = Template.bind({});
Personalize.args = {
  ...mockStatusBannerProps.personalize,
} as IStatusBanner;

export const PersonalizeWithChildren = Template.bind({});
PersonalizeWithChildren.args = {
  ...mockStatusBannerProps.personalizeWithChildren,
} as IStatusBanner;
