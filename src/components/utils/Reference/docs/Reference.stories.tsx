import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Reference } from "../index";
import { IReference } from "../types";
import { mockReferenceProps } from "./Reference.mock";

export default {
  title: "utils/Reference",
  component: Reference,
  argTypes: {},
} as ComponentMeta<typeof Reference>;

const Template: ComponentStory<typeof Reference> = (args) => <Reference {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockReferenceProps.base,
} as IReference;

export const NoDescription = Template.bind({});
NoDescription.args = {
  ...mockReferenceProps.noDescription,
} as IReference;
