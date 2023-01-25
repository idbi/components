import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfirmationModalV3 } from "./Container";
import { IConfirmationModalV3 } from "../types";
import { mockConfirmationModalV3Props } from "./ConfirmationModalV3.mock";

export default {
  title: "modals/ConfirmationModalV3",
  component: ConfirmationModalV3,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ConfirmationModalV3>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmationModalV3> = (args) => <ConfirmationModalV3 {...args} />;

export const MultipleOptions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

MultipleOptions.args = {
  ...mockConfirmationModalV3Props.multipleOptions,
} as IConfirmationModalV3;

export const SingleConfirmation = Template.bind({});
SingleConfirmation.args = {
  ...mockConfirmationModalV3Props.singleConfirmation,
} as IConfirmationModalV3;

export const MultipleCancelOptions = Template.bind({});
MultipleCancelOptions.args = {
  ...mockConfirmationModalV3Props.multipleCancelOptions,
} as IConfirmationModalV3;

export const NoCancelOptions = Template.bind({});
NoCancelOptions.args = {
  ...mockConfirmationModalV3Props.noCancelOptions,
} as IConfirmationModalV3;

export const WithDisabledOptions = Template.bind({});
WithDisabledOptions.args = {
  ...mockConfirmationModalV3Props.withDisabledOptions,
} as IConfirmationModalV3;

export const CustomContent = Template.bind({});
CustomContent.args = {
  ...mockConfirmationModalV3Props.customContent,
} as IConfirmationModalV3;
