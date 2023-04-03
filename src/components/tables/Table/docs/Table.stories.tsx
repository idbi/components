import dedent from "ts-dedent";
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
DefaultTable.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, Table } from '@idbi/components'

      function App() {
        return (
          <IdThemeProvider>
            <Table
              body={
                <>
                  <tr>
                    <td>ASDC</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                  <tr>
                    <td>HBDC</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                </>
              }
              headers={
                <>
                  <th>SKU</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                </>
              }
              noHover
              onScroll={() => {}}
              pagination={{
                currentPage: 2,
                lastPage: 10,
                onChangePage: function noRefCheck() {},
              }}
              showPagination
              styleTable={{}}
              styleWrapper={{}}
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const CustomTable = Template.bind({});
CustomTable.args = {
  ...mockTableProps.customTable,
} as ITable;
CustomTable.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, Table } from '@idbi/components'

      function App() {
        return (
          <IdThemeProvider>
            <Table
              body={
                <>
                  <tr>
                    <td>HBDC</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                  <tr>
                    <td>HBDC</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                </>
              }
              headers={
                <>
                  <th>SKU</th>
                  <th className='center'>Nombre</th>
                  <th className='right'>Descripción</th>
                </>
              }
              onScroll={() => {}}
              styleTBody={{
                background: '#F1F2F9',
                color: '#4318FF',
                fontSize: '15px',
              }}
              styleTHead={{
                background: '#4318FF',
                color: '#fff',
                fontSize: '18px',
              }}
              styleTable={{
                marginBottom: '2px',
              }}
              styleWrapper={{
                borderRadius: '10px',
              }}
              showPagination={false}
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};
