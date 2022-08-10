import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import VerticalBarRankingCard, { VerticalBarRankingCardProps } from ".";
import { mockVerticalBarRankingCardProps } from "./VerticalBarRankingCard.mock";

export default {
  title: "ui/VerticalBarRankingCard",
  component: VerticalBarRankingCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VerticalBarRankingCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VerticalBarRankingCard> = (args) => <VerticalBarRankingCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVerticalBarRankingCardProps.base,
} as VerticalBarRankingCardProps;
