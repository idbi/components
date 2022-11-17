import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UploadImage } from "../index";
import { IUploadImage } from "../types";
import { mockConfirmationCardV2Props } from "./UploadImage.mock";

export default {
  title: "upload/UploadImage",
  component: UploadImage,
  argTypes: {},
} as ComponentMeta<typeof UploadImage>;

const Template: ComponentStory<typeof UploadImage> = (args) => (
  <UploadImage {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IUploadImage;

export const WithInitialImg = Template.bind({});
WithInitialImg.args = {
  ...mockConfirmationCardV2Props.withInitialImg,
} as IUploadImage;

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  ...mockConfirmationCardV2Props.customPlaceholder,
} as IUploadImage;
