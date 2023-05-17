import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Characteristics } from "../index";
import { ICharacteristics } from "../types";
import { mockCharacteristicsProps } from "./Characteristics.mock";

export default {
  title: "utils/Characteristics",
  component: Characteristics,
  argTypes: {},
} as ComponentMeta<typeof Characteristics>;

const Template: ComponentStory<typeof Characteristics> = (args) => <Characteristics {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockCharacteristicsProps.base,
} as ICharacteristics;

export const WithAside = Template.bind({});
WithAside.args = {
  ...mockCharacteristicsProps.withAside,
} as ICharacteristics;

export const DescriptionTop = Template.bind({});
DescriptionTop.args = {
  ...mockCharacteristicsProps.descriptionTop,
} as ICharacteristics;

export const NoDescription = Template.bind({});
NoDescription.args = {
  ...mockCharacteristicsProps.noDescription,
} as ICharacteristics;
