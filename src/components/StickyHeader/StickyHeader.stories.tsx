import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StickyHeader } from ".";
import { IStickyHeaderProps } from "./types";
import { mockStickyHeaderProps } from "./StickyHeader.mock";

export default {
  title: "components/StickyHeader",
  component: StickyHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StickyHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StickyHeader> = (args) => (
  <StickyHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStickyHeaderProps.base,
} as IStickyHeaderProps;
