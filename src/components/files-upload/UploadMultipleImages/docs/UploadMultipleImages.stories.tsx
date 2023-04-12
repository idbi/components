import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UploadMultipleImages } from "../index";
import { IUploadMultipleImages } from "../types";
import { mockConfirmationCardV2Props } from "./UploadMultipleImages.mock";

export default {
  title: "upload/UploadMultipleImages",
  component: UploadMultipleImages,
  argTypes: {},
} as ComponentMeta<typeof UploadMultipleImages>;

const Template: ComponentStory<typeof UploadMultipleImages> = (args) => (
  <UploadMultipleImages {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IUploadMultipleImages;

export const InitialImages = Template.bind({});
InitialImages.args = {
  ...mockConfirmationCardV2Props.initialImages,
} as IUploadMultipleImages;

export const WithLimit = Template.bind({});
WithLimit.args = {
  ...mockConfirmationCardV2Props.withLimit,
} as IUploadMultipleImages;
