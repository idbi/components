import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductItem } from "../index";
import { IProductItem } from "../types";
import { mockProductItemProps } from "./ProductItem.mock";

export default {
  title: "items/ProductItem",
  component: ProductItem,
  argTypes: {},
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockProductItemProps.base,
} as IProductItem;

export const noSKU = Template.bind({});
noSKU.args = {
  ...mockProductItemProps.noSKU,
} as IProductItem;

export const WithImage = Template.bind({});
WithImage.args = {
  ...mockProductItemProps.withImage,
} as IProductItem;

export const WithCustomImage = Template.bind({});
WithCustomImage.args = {
  ...mockProductItemProps.withCustomImage,
} as IProductItem;

export const NoImage = Template.bind({});
NoImage.args = {
  ...mockProductItemProps.noImage,
} as IProductItem;
NoImage.parameters = {
  docs: {
    source: {
      code: dedent`
        <ProductItem 
          image={false} 
          name="Coca cola"
          sku="VBNM123"
        />`,
    },
  },
};
