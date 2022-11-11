import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UploadImage } from "../index";
import { IUploadImage } from "../types";
import { mockConfirmationCardV2Props } from "./UploadImage.mock";

export default {
  title: "upload/UploadImage",
  component: UploadImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UploadImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UploadImage> = (args) => (
  <UploadImage {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IUploadImage;
