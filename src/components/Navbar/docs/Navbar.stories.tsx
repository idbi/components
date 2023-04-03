import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "../index";
import { INavbar } from "../types";
import { mockNavbarProps } from "./Navbar.mock";

export default {
  title: "components/Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {
  ...mockNavbarProps.defaultNavbar,
} as INavbar;
DefaultNavbar.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, Navbar } from '@idbi/components'
      
      function App() {
      
        return (
          <IdThemeProvider>
            <Navbar
              zIndex={100}
              isSticky
              logoIcon={{
                onClick: () => alert("logo"),
              }}
              bellIcon={{
                children: <div style={{ padding: '15px' }}>customize the list</div>,
                onClick: () => {},
                show: true,
              }}
              searchOption={{
                addSearchIcon: true,
                onSearch: (val) => console.log(val),
                placeholder: 'take care of hiding the options',
                show: true,
              }}
              userIcon={{
                initials: 'FC',
                name: 'Felix Castro',
                note: 'Administrador',
                onClick:() => alert("user icon"),
                show: true,
              }}
              links={[
                {
                  onClick: () => alert("link 1"),
                  text: 'link 1',
                },
                {
                  onClick: () => alert("link 2"),
                  text: 'link 2',
                },
              ]}
              options={[
                {
                  option: {
                    key: '1',
                    onClick: () => alert("option 1"),
                    text: 'option 1',
                  },
                },
                {
                  option: {
                    key: '2',
                    onClick: () => alert("option 2"),
                    text: 'option 2',
                  },
                  subOptions: [
                    {
                      onClick: () => alert("sub option 1"),
                      text: 'sub option 1',
                    },
                    {
                      onClick: () => alert("sub option 2"),
                      text: 'sub option 2',
                    },
                    {
                      onClick: () => alert("sub option 3"),
                      text: 'sub option 3',
                    },
                  ],
                },
                {
                  option: {
                    key: '3',
                    onClick: () => alert("option 3"),
                    text: 'option 3',
                  },
                  subOptions: [
                    {
                      onClick: () => alert("sub option 1"),
                      text: 'sub option 1',
                    },
                    {
                      onClick: () => alert("sub option 2"),
                      text: 'sub option 2',
                    },
                    {
                      onClick: () => alert("sub option 3"),
                      text: 'sub option 3',
                    },
                  ],
                },
              ]}
            />
          </IdThemeProvider>
        )
      }
      
      export default App
      `,
    },
  },
};

export const SimpleNavbar = Template.bind({});
SimpleNavbar.args = {
  ...mockNavbarProps.SimpleNavbar,
} as INavbar;
SimpleNavbar.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, Navbar } from '@idbi/components'
      
      function App() {
      
        return (
          <IdThemeProvider>
            <Navbar
              links={[
                {
                  onClick: () => alert("link 1"),
                  text: 'link 1'
                },
                {
                  onClick: () => alert("link 2"),
                  text: 'link 2'
                }
              ]}
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};
