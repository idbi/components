import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CartProductV2 } from "./Container";
import { ICartProductV2 } from "../types";
import { mockConfirmationCardV2Props } from "./CartProductV2.mock";

export default {
  title: "productCards/CartProductv2",
  component: CartProductV2,
  argTypes: {},
} as ComponentMeta<typeof CartProductV2>;

const Template: ComponentStory<typeof CartProductV2> = (args) => <CartProductV2 {...args} />;

export const base = Template.bind({});
base.args = {
  ...mockConfirmationCardV2Props.base,
} as ICartProductV2;

export const withCustomDetails = Template.bind({});
withCustomDetails.args = {
  ...mockConfirmationCardV2Props.withCustomDetails,
} as ICartProductV2;

export const withDiscount = Template.bind({});
withDiscount.args = {
  ...mockConfirmationCardV2Props.withDiscount,
} as ICartProductV2;

export const withDishOrder = Template.bind({});
withDishOrder.args = {
  ...mockConfirmationCardV2Props.withDishOrder,
} as ICartProductV2;
