import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "../index";
import { ITable } from "../types";
import { mockGridTableProps } from "./GridTable.mock";

export default {
  title: "tables/GridTable",
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockGridTableProps.base,
} as ITable;

export const Variant1 = Template.bind({});
Variant1.args = {
  ...mockGridTableProps.variant1,
} as ITable;

export const Variant2 = Template.bind({});
Variant2.args = {
  ...mockGridTableProps.variant2,
} as ITable;
