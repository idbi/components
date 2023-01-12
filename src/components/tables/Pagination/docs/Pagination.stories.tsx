import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "../index";
import { IPagination } from "../types";
import { mockPaginationProps } from "./Pagination.mock";

export default {
  title: "tables/Pagination",
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockPaginationProps.base,
} as IPagination;
