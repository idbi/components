import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BulletPoint } from "../index";
import { IBulletPoint } from "../types";
import { mock } from "./BulletPoint.mock";

export default {
  title: "UI/BulletPoint",
  component: BulletPoint,
  argTypes: {},
} as ComponentMeta<typeof BulletPoint>;

const Template: ComponentStory<typeof BulletPoint> = (args) => <BulletPoint {...args} />;

export const base = Template.bind({});
base.args = {
  ...mock.base,
} as IBulletPoint;

export const customColor = Template.bind({});
customColor.args = {
  ...mock.customColor,
} as IBulletPoint;

export const customSize = Template.bind({});
customSize.args = {
  ...mock.customSize,
} as IBulletPoint;

export const customBulletSize = Template.bind({});
customBulletSize.args = {
  ...mock.customBulletSize,
} as IBulletPoint;

export const customSpacing = Template.bind({});
customSpacing.args = {
  ...mock.customSpacing,
} as IBulletPoint;
