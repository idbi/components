import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Search } from "../index";
import { ISearch } from "../types";
import { mockSearchProps } from "./Search.mock";

export default {
  title: "components/Search",
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const DefaultSearch = Template.bind({});
DefaultSearch.args = {
  ...mockSearchProps.defaultSearch,
} as ISearch;

export const BaseSmall = Template.bind({});
BaseSmall.args = {
  ...mockSearchProps.smallSearch,
} as ISearch;

export const BigSearch = Template.bind({});
BigSearch.args = {
  ...mockSearchProps.bigSearch,
} as ISearch;

export const AlertSearch = Template.bind({});
AlertSearch.args = {
  ...mockSearchProps.alertSearch,
} as ISearch;

export const DisabledSearch = Template.bind({});
DisabledSearch.args = {
  ...mockSearchProps.disabledSearch,
} as ISearch;
