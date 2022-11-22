import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ClientCard } from "../index";
import { IClientCard } from "../types";
import { mockConfirmationCardV2Props } from "./ClientCard.mock";

export default {
  title: "cards/ClientCard",
  component: ClientCard,
  argTypes: {},
} as ComponentMeta<typeof ClientCard>;

const Template: ComponentStory<typeof ClientCard> = (args) => <ClientCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IClientCard;

export const WithOtherSections = Template.bind({});
WithOtherSections.args = {
  ...mockConfirmationCardV2Props.withOtherSections,
} as IClientCard;

export const NoProfileImg = Template.bind({});
NoProfileImg.args = {
  ...mockConfirmationCardV2Props.noProfileImg,
} as IClientCard;

export const NoIdentification = Template.bind({});
NoIdentification.args = {
  ...mockConfirmationCardV2Props.noIdentification,
} as IClientCard;
