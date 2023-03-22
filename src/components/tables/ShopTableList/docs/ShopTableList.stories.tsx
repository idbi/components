import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShopTableList } from "../index";
import { IShopTableList } from "../types";
import { mockShopTableListProps } from "./ShopTableList.mock";

export default {
  title: "tables/ShopTableList",
  component: ShopTableList,
  argTypes: {},
} as ComponentMeta<typeof ShopTableList>;

const Template: ComponentStory<typeof ShopTableList> = (args) => <ShopTableList {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockShopTableListProps.base,
} as IShopTableList;
