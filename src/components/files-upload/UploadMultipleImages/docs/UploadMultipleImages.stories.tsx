import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UploadMultipleImages } from "../index";
import { IUploadMultipleImages } from "../types";
import { mockConfirmationCardV2Props } from "./UploadMultipleImages.mock";

export default {
  title: "upload/UploadMultipleImages",
  component: UploadMultipleImages,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UploadMultipleImages>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UploadMultipleImages> = (args) => (
  <UploadMultipleImages {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IUploadMultipleImages;
