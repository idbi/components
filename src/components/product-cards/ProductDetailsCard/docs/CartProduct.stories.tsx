import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductDetailsCard } from "../index";
import { IProductDetailsCard } from "../types";
import { mockConfirmationCardV2Props } from "./CartProduct.mock";

export default {
  title: "productCards/ProductDetailsCard",
  component: ProductDetailsCard,
  argTypes: {},
} as ComponentMeta<typeof ProductDetailsCard>;

const Template: ComponentStory<typeof ProductDetailsCard> = (args) => <ProductDetailsCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IProductDetailsCard;

export const noUnitPrice = Template.bind({});
noUnitPrice.args = {
  ...mockConfirmationCardV2Props.noUnitPrice,
} as IProductDetailsCard;

export const WithDetails = Template.bind({});
WithDetails.args = {
  ...mockConfirmationCardV2Props.withDetails,
} as IProductDetailsCard;

export const WithDiscount = Template.bind({});
WithDiscount.args = {
  ...mockConfirmationCardV2Props.withDiscount,
} as IProductDetailsCard;

export const withImageStatusLabel = Template.bind({});
withImageStatusLabel.args = {
  ...mockConfirmationCardV2Props.withImageStatusLabel,
} as IProductDetailsCard;

export const Disabled = Template.bind({});
Disabled.args = {
  ...mockConfirmationCardV2Props.disabled,
} as IProductDetailsCard;
