import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "../index";
import { ITable } from "../types";
import { mockTableProps } from "./Table.mock";

export default {
  title: "tables/Table",
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  ...mockTableProps.defaultTable,
} as ITable;

export const CustomTable = Template.bind({});
CustomTable.args = {
  ...mockTableProps.customTable,
} as ITable;
