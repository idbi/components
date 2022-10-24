import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "./Container";
import { IRadio } from "../types";
import { mockRadioProps } from "./Radio.mock";

export default {
  title: "forms/Radio",
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockRadioProps.base,
} as IRadio;
