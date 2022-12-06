import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IDCard } from "../index";
import { IIDCard } from "../types";
import { mockIDCardProps } from "./IDCard.mock";

export default {
  title: "cards/IDCard",
  component: IDCard,
  argTypes: {},
} as ComponentMeta<typeof IDCard>;

const Template: ComponentStory<typeof IDCard> = (args) => <IDCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockIDCardProps.base,
} as IIDCard;

export const WithImage = Template.bind({});
WithImage.args = {
  ...mockIDCardProps.withImage,
} as IIDCard;

export const WithImageNotFound = Template.bind({});
WithImageNotFound.args = {
  ...mockIDCardProps.withImageNotFound,
} as IIDCard;

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...mockIDCardProps.withIcon,
} as IIDCard;

export const WithIconAndImage = Template.bind({});
WithIconAndImage.args = {
  ...mockIDCardProps.withIconAndImage,
} as IIDCard;
