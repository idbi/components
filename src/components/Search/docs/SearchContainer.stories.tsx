import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Search } from "./Container";
import { ISearch } from "../types";
import { mockSearchProps } from "./Search.mock";

export default {
  title: "components/Search/withFoundItems",
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const DefaultSearchWithFoundItems = Template.bind({});
DefaultSearchWithFoundItems.args = {
  ...mockSearchProps.defaultSearchWithFoundItems,
} as ISearch;

export const SearchWithScannerBehavior = Template.bind({});
SearchWithScannerBehavior.args = {
  ...mockSearchProps.searchWithScannerBehavior,
} as ISearch;

export const SearchWithCustomFoundItems = Template.bind({});
SearchWithCustomFoundItems.args = {
  ...mockSearchProps.searchWithCustomFoundItems,
} as ISearch;
