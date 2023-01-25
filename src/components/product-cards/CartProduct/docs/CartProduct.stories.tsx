import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CartProduct } from "./Container";
import { ICartProductContainer } from "./Container";
import { mockConfirmationCardV2Props } from "./CartProduct.mock";

export default {
  title: "productCards/CartProduct",
  component: CartProduct,
  argTypes: {},
} as ComponentMeta<typeof CartProduct>;

const Template: ComponentStory<typeof CartProduct> = (args) => <CartProduct {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as ICartProductContainer;

export const WithDiscount = Template.bind({});
WithDiscount.args = {
  ...mockConfirmationCardV2Props.withDiscount,
} as ICartProductContainer;

export const WithCustomDetails = Template.bind({});
WithCustomDetails.args = {
  ...mockConfirmationCardV2Props.withCustomDetails,
} as ICartProductContainer;

export const Clickeable = Template.bind({});
Clickeable.args = {
  ...mockConfirmationCardV2Props.clickeable,
} as ICartProductContainer;

export const customUnit = Template.bind({});
customUnit.args = {
  ...mockConfirmationCardV2Props.customUnit,
} as ICartProductContainer;
