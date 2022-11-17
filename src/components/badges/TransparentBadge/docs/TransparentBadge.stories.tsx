import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./Container";
import { mockConfirmationCardV2Props } from "./TransparentBadge.mock";

export default {
  title: "badges/TransparentBadge",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = () => <Container />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
};
