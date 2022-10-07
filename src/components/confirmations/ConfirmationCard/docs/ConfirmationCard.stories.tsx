import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfirmationCard } from "../index";
import { IConfirmationCard } from "../types";
import { mockConfirmationCardProps } from "./ConfirmationCard.mock";

export default {
  title: "confirmations/ConfirmationCard",
  component: ConfirmationCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ConfirmationCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmationCard> = (args) => (
  <ConfirmationCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockConfirmationCardProps.base,
} as IConfirmationCard;
