import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShopTable } from "../index";
import { IShopTable } from "../types";
import { mockShopTableProps } from "./ShopTable.mock";

export default {
  title: "tables/ShopTable",
  component: ShopTable,
  argTypes: {},
} as ComponentMeta<typeof ShopTable>;

const Template: ComponentStory<typeof ShopTable> = (args) => <ShopTable {...args} />;

export const available = Template.bind({});
available.args = {
  ...mockShopTableProps.available,
} as IShopTable;

export const occupied = Template.bind({});
occupied.args = {
  ...mockShopTableProps.occupied,
} as IShopTable;

export const selected = Template.bind({});
selected.args = {
  ...mockShopTableProps.selected,
} as IShopTable;
