import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfirmationCardV3 } from "../index";
import { IConfirmationCardV3 } from "../types";
import { mockConfirmationCardV2Props } from "./ConfirmationCardV2.mock";

export default {
  title: "confirmations/ConfirmationCardV3",
  component: ConfirmationCardV3,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ConfirmationCardV3>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmationCardV3> = (args) => (
  <ConfirmationCardV3 {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IConfirmationCardV3;
