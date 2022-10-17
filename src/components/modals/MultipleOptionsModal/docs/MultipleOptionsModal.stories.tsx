import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultipleOptionsModal } from "./Container";
import { IMultipleOptionsModal } from "../types";
import { mockMultipleOptionsModalProps } from "./MultipleOptionsModal.mock";

export default {
  title: "modals/MultipleOptionsModal",
  component: MultipleOptionsModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MultipleOptionsModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultipleOptionsModal> = (args) => (
  <MultipleOptionsModal {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMultipleOptionsModalProps.base,
} as IMultipleOptionsModal;

export const WithIcons = Template.bind({});

WithIcons.args = {
  ...mockMultipleOptionsModalProps.withIcons,
} as IMultipleOptionsModal;

export const WithSubOptions = Template.bind({});

WithSubOptions.args = {
  ...mockMultipleOptionsModalProps.withSubOptions,
} as IMultipleOptionsModal;
