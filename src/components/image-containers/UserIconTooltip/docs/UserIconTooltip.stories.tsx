import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { IUserIconTooltip } from "../types";
import { mock } from "./UserIconTooltip.mock";

export default {
  title: "imagesContainers/UserIconTooltip",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const noImage = Template.bind({});
noImage.args = {
  ...mock.noImage,
} as IUserIconTooltip;

export const withImage = Template.bind({});
withImage.args = {
  ...mock.withImage,
} as IUserIconTooltip;

export const noLastname = Template.bind({});
noLastname.args = {
  ...mock.noLastname,
} as IUserIconTooltip;

export const differentPosition = Template.bind({});
differentPosition.args = {
  ...mock.differentPosition,
} as IUserIconTooltip;
