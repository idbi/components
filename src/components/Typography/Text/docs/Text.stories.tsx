import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "..";
import { mockTextProps } from "./Text.mock";
import { ITextProps } from "../../TextBuilder/types";

export default {
  title: "components/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockTextProps.base,
} as ITextProps;
