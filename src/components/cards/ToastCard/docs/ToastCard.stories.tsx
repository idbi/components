import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToastCard } from "../index";
import { IToastCard } from "../types";
import { mockToastCardProps } from "./ToastCard.mock";

export default {
  title: "cards/ToastCard",
  component: ToastCard,
  argTypes: {},
} as ComponentMeta<typeof ToastCard>;

const Template: ComponentStory<typeof ToastCard> = (args) => (
  <ToastCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...mockToastCardProps.primary,
} as IToastCard;

export const Success = Template.bind({});
Success.args = {
  ...mockToastCardProps.success,
} as IToastCard;

export const Warning = Template.bind({});
Warning.args = {
  ...mockToastCardProps.warning,
} as IToastCard;

export const Error = Template.bind({});
Error.args = {
  ...mockToastCardProps.error,
} as IToastCard;

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...mockToastCardProps.tertiary,
} as IToastCard;

export const Quaternary = Template.bind({});
Quaternary.args = {
  ...mockToastCardProps.quaternary,
} as IToastCard;

export const WithLink = Template.bind({});
WithLink.args = {
  ...mockToastCardProps.withLink,
} as IToastCard;

export const CustomDescription = Template.bind({});
CustomDescription.args = {
  ...mockToastCardProps.customDescription,
} as IToastCard;

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  ...mockToastCardProps.onlyTitle,
} as IToastCard;

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  ...mockToastCardProps.onlyDescription,
} as IToastCard;
