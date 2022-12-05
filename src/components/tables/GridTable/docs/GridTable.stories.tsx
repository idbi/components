import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GridTable } from "../index";
import { IGridTable } from "../types";
import { mockGridTableProps } from "./GridTable.mock";

export default {
  title: "tables/GridTable",
  component: GridTable,
  argTypes: {},
} as ComponentMeta<typeof GridTable>;

const Template: ComponentStory<typeof GridTable> = (args) => (
  <GridTable {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockGridTableProps.base,
} as IGridTable;

export const Variant1 = Template.bind({});
Variant1.args = {
  ...mockGridTableProps.variant1
} as IGridTable;

export const Variant2 = Template.bind({});
Variant2.args = {
  ...mockGridTableProps.variant2
} as IGridTable;
