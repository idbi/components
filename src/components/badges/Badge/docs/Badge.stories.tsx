import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "../index";
import { IBadge } from "../types";
import { mockBadgeProps } from "./Badge.mock";

export default {
  title: "badges/Badge",
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockBadgeProps.base,
} as IBadge;

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...mockBadgeProps.withIcons,
} as IBadge;