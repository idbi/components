import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UploadMedia } from "../index";
import { IUploadMedia } from "../types";
import { mockConfirmationCardV2Props } from "./UploadMedia.mock";

export default {
  title: "upload/UploadMedia",
  component: UploadMedia,
  argTypes: {},
} as ComponentMeta<typeof UploadMedia>;

const Template: ComponentStory<typeof UploadMedia> = (args) => (
  <UploadMedia {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IUploadMedia;

export const WithInitialImg = Template.bind({});
WithInitialImg.args = {
  ...mockConfirmationCardV2Props.withInitialImg,
} as IUploadMedia;

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  ...mockConfirmationCardV2Props.customPlaceholder,
} as IUploadMedia;
