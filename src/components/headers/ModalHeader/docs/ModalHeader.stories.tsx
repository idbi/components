import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalHeader } from "../index";
import { IModalHeader } from "../types";
import { mockModalHeaderProps } from "./ModalHeader.mock";

export default {
  title: "headers/ModalHeader",
  component: ModalHeader,
  argTypes: {},
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockModalHeaderProps.base,
} as IModalHeader;

export const Variant = Template.bind({});
Variant.args = {
  ...mockModalHeaderProps.variant,
} as IModalHeader;

export const Variant2 = Template.bind({});
Variant2.args = {
  ...mockModalHeaderProps.variant2,
} as IModalHeader;
