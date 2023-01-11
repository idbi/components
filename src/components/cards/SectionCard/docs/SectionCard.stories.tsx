import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionCard } from "../index";
import { ISectionCard } from "../types";
import { mockConfirmationCardV2Props } from "./SectionCard.mock";

export default {
  title: "cards/SectionCard",
  component: SectionCard,
  argTypes: {},
} as ComponentMeta<typeof SectionCard>;

const Template: ComponentStory<typeof SectionCard> = (args) => <SectionCard {...args} />;

export const BaseNoContent = Template.bind({});
BaseNoContent.args = {
  ...mockConfirmationCardV2Props.baseNoContent,
} as ISectionCard;

export const WithContent = Template.bind({});
WithContent.args = {
  ...mockConfirmationCardV2Props.withContent,
} as ISectionCard;

export const noTitle = Template.bind({});
noTitle.args = {
  ...mockConfirmationCardV2Props.noTitle,
} as ISectionCard;

export const WithHeaderAside = Template.bind({});
WithHeaderAside.args = {
  ...mockConfirmationCardV2Props.withHeaderAside,
} as ISectionCard;

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...mockConfirmationCardV2Props.noIcon,
} as ISectionCard;

export const withInnerSections = Template.bind({});
withInnerSections.args = {
  ...mockConfirmationCardV2Props.withInnerSections,
} as ISectionCard;

export const innerSectionsNoChildren = Template.bind({});
innerSectionsNoChildren.args = {
  ...mockConfirmationCardV2Props.innerSectionsNoChildren,
} as ISectionCard;
