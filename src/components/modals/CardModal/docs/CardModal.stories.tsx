import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardModal } from "./Container";
import { ICardModal } from "../types";
import { mockCardModalProps } from "./CardModal.mock";

export default {
  title: "modals/CardModal",
  component: CardModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardModal> = (args) => (
  <CardModal {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardModalProps.base,
} as ICardModal;

export const fullPageInMobile = Template.bind({});

fullPageInMobile.args = {
  ...mockCardModalProps.fullPageInMobile,
} as ICardModal;
