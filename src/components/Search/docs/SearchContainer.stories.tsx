import dedent from "ts-dedent";
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
DefaultSearchWithFoundItems.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, Search } from '@idbi/components'
      import { useRef, useState } from 'react'
      
      const mockUsers = [
        {
          uuid: "1",
          name: "Pedro Picapiedra",
          email: "pedro@id.com",
        },
        {
          uuid: "2",
          name: "Yessenia Cubas",
          email: "yessenia@id.com",
        },
        {
          uuid: "3",
          name: "Felix Castro",
          email: "felix@id.com",
        },
        {
          uuid: "3",
          name: "Federico Torres",
          email: "federico@id.com",
        },
      ];
      
      
      interface IUser {
        uuid: string;
        name: string;
        email: string;
      }
      
      function App() {
        const [data, setData] = useState<IUser[]>([]);
        const [loading, setLoading] = useState(false);
        const timeoutRef = useRef<any>(null);
      
        const handleSearch = (value: string) => {
          if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
          setLoading(true);
          timeoutRef.current = setTimeout(() => {
            const temp = mockUsers.filter((i) =>
              i.name.toLowerCase().includes(value.toLowerCase())
            );
            setData(temp);
            setLoading(false);
          }, 1000);
        };
      
        return (
          <IdThemeProvider>
            <Search
              addCleanOption
              addSearchIcon
              delay={400}
              onSearch={handleSearch}
              loading={loading}
              foundItems={{
                addCreateOption: {
                  location: 'top',
                  onCreate: () => {},
                  show: false,
                  text: 'Crear'
                },
                containerStyle: {
                  maxHeight: '250px'
                },
                data,
                enableScannerBehavior: false,
                getLabel: (item) => {
                  return <div>{item?.name}</div>;
                },
                hideOnBlur: true,
                onSelectItem: {
                  hideOnSelect: true,
                  onSelect: (value) => alert(value?.name),
                },
                show: true
              }}
              initSearch=""
              placeholder="search with default props"
              size="small"
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const SearchWithScannerBehavior = Template.bind({});
SearchWithScannerBehavior.args = {
  ...mockSearchProps.searchWithScannerBehavior,
} as ISearch;
SearchWithScannerBehavior.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, Search } from '@idbi/components'
      import { useRef, useState } from 'react'
      
      const mockUsers = [
        {
          uuid: "1",
          name: "Pedro Picapiedra",
          email: "pedro@id.com",
        },
        {
          uuid: "2",
          name: "Yessenia Cubas",
          email: "yessenia@id.com",
        },
        {
          uuid: "3",
          name: "Felix Castro",
          email: "felix@id.com",
        },
        {
          uuid: "3",
          name: "Federico Torres",
          email: "federico@id.com",
        },
      ];
      
      
      interface IUser {
        uuid: string;
        name: string;
        email: string;
      }
      
      function App() {
        const [data, setData] = useState<IUser[]>([]);
        const [loading, setLoading] = useState(false);
        const timeoutRef = useRef<any>(null);
      
        const handleSearch = (value: string) => {
          if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
          setLoading(true);
          timeoutRef.current = setTimeout(() => {
            const temp = mockUsers.filter((i) =>
              i.name.toLowerCase().includes(value.toLowerCase())
            );
            setData(temp);
            setLoading(false);
          }, 1000);
        };
      
        return (
          <IdThemeProvider>
            <Search
              addCleanOption
              addSearchIcon
              delay={400}
              onSearch={handleSearch}
              loading={loading}
              foundItems={{
                data,
                enableScannerBehavior: true,
                getLabel: (item) => {
                  return <div>{item?.name}</div>;
                },
              }}
              initSearch=""
              placeholder="search with scanner behavior / if 1 item is found it is selected"
              size="small"
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const SearchWithCustomFoundItems = Template.bind({});
SearchWithCustomFoundItems.args = {
  ...mockSearchProps.searchWithCustomFoundItems,
} as ISearch;
SearchWithCustomFoundItems.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, Search, Text, UserProfileIcon } from '@idbi/components'
      import { useRef, useState } from 'react'
      
      const mockUsers = [
        {
          uuid: "1",
          name: "Pedro Picapiedra",
          email: "pedro@id.com",
        },
        {
          uuid: "2",
          name: "Yessenia Cubas",
          email: "yessenia@id.com",
        },
        {
          uuid: "3",
          name: "Felix Castro",
          email: "felix@id.com",
        },
        {
          uuid: "3",
          name: "Federico Torres",
          email: "federico@id.com",
        },
      ];
      
      
      interface IUser {
        uuid: string;
        name: string;
        email: string;
      }
      
      function App() {
        const [data, setData] = useState<IUser[]>([]);
        const [loading, setLoading] = useState(false);
        const timeoutRef = useRef<any>(null);
      
        const handleSearch = (value: string) => {
          if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
          setLoading(true);
          timeoutRef.current = setTimeout(() => {
            const temp = mockUsers.filter((i) =>
              i.name.toLowerCase().includes(value.toLowerCase())
            );
            setData(temp);
            setLoading(false);
          }, 1000);
        };
      
        return (
          <IdThemeProvider>
            <Search
              addCleanOption
              addSearchIcon
              delay={400}
              onSearch={handleSearch}
              loading={loading}
              foundItems={{
                data,
                enableScannerBehavior: true,
                getLabel: (item) => {
                  return (
                    <div style={{ display: "flex", gap: "10px" }}>
                      <UserProfileIcon initials={item?.name} size={30} />
                      <p>
                        <Text size="sm" color="PRIMARY/800">
                          {item?.name}
                        </Text>
                        <br />
                        <Text size="xs" color="NEUTRAL/400">
                          {item?.email}
                        </Text>
                      </p>
                    </div>
                  );
                },
                addCreateOption: {
                  show: true,
                  onCreate: () => {},
                  location: "top",
                },
              }}
              initSearch=""
              placeholder="search with custom found items / If you want to add a card consider that it has no background or border"
              size="small"
            />
          </IdThemeProvider>
        )
      }
      
      export default App          
      `,
    },
  },
};
