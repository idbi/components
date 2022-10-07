import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfirmationCardV2 } from "../index";
import { IConfirmationCardV2 } from "../types";
import { mockConfirmationCardV2Props } from "./ConfirmationCardV2.mock";

export default {
  title: "confirmations/ConfirmationCardV2",
  component: ConfirmationCardV2,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ConfirmationCardV2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmationCardV2> = (args) => (
  <ConfirmationCardV2 {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IConfirmationCardV2;
