import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProfileImage } from ".";
import { IProfileImage } from "./types";
import { mockProfileImageProps } from "./ProfileImage.mock";

export default {
  title: "components/ProfileImage",
  component: ProfileImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProfileImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileImage> = (args) => (
  <ProfileImage {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProfileImageProps.base,
} as IProfileImage;
