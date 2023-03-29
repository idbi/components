import dedent from "ts-dedent";
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
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import { GridTable, IdThemeProvider } from '@idbi/components'

      function App() {
        return (
          <IdThemeProvider>
            <GridTable.Table
              maxWidth='1000px'
              minWidth='800px'
              gridTemplateColumns='1fr 1fr 1fr 1fr'
              header={
                <>
                  <GridTable.Th location="center">Column 1</GridTable.Th>
                  <GridTable.Th location="center">Column 2</GridTable.Th>
                  <GridTable.Th location="center">Column 3</GridTable.Th>
                  <GridTable.Th location="center">Column 4</GridTable.Th>
                </>
              }
              body={
                <>
                  <GridTable.Tr gridTemplateColumns="1fr 1fr 1fr 1fr">
                    <GridTable.Td location="center" separator>data 1</GridTable.Td>
                    <GridTable.Td location="center">data 2</GridTable.Td>
                    <GridTable.Td location="center">data 3</GridTable.Td>
                    <GridTable.Td location="center">data 4</GridTable.Td>
                  </GridTable.Tr>
                  <GridTable.Tr gridTemplateColumns="1fr 1fr 1fr 1fr">
                    <GridTable.Td location="center" separator>data 1</GridTable.Td>
                    <GridTable.Td location="center">data 2</GridTable.Td>
                    <GridTable.Td location="center">data 3</GridTable.Td>
                    <GridTable.Td location="center">data 4</GridTable.Td>
                  </GridTable.Tr>
                </>
              }
            />
          </IdThemeProvider>
        )
      }
      
      export default App
      `,
    },
  },
};

export const Variant1 = Template.bind({});
Variant1.args = {
  ...mockGridTableProps.variant1,
} as ITable;
Variant1.parameters = {
  docs: {
    source: {
      code: dedent`
      import { GridTable, IdThemeProvider } from '@idbi/components'

      function App() {
        return (
          <IdThemeProvider>
            <GridTable.Table
              maxWidth='1000px'
              gridTemplateColumns='1fr 1fr 1fr 1fr 1fr'
              header={
                <>
                  <GridTable.Th location="center">Column 1</GridTable.Th>
                  <GridTable.Th location="center">Column 2</GridTable.Th>
                  <GridTable.Th location="center">Column 3</GridTable.Th>
                  <GridTable.Th location="center">Column 4</GridTable.Th>
                  <GridTable.Th location="center">Column 5</GridTable.Th>
                </>
              }
              body={
                <>
                  <GridTable.Td location="center" gridColumn="1/2">
                    Data 1
                  </GridTable.Td>
                  <GridTable.Tr gridColumn="2/6" gridTemplateColumns="1fr 1fr 1fr 1fr">
                    <GridTable.Td location="center" separator>data 2</GridTable.Td>
                    <GridTable.Td location="center" separator>data 3</GridTable.Td>
                    <GridTable.Td location="center" separator>data 4</GridTable.Td>
                    <GridTable.Td location="center">data 5</GridTable.Td>
                  </GridTable.Tr>
                </>
              }
            />
          </IdThemeProvider>
        )
      }

      export default App
      `,
    },
  },
};

export const Variant2 = Template.bind({});
Variant2.args = {
  ...mockGridTableProps.variant2,
} as ITable;
Variant2.parameters = {
  docs: {
    source: {
      code: dedent`
      import { GridTable, IdThemeProvider, OrderStatusBadge, UserProfileIcon } from '@idbi/components'

      function App() {
        return (
          <IdThemeProvider>
            <GridTable.Table
              maxWidth='1000px'
              minWidth='800px'
              gridTemplateColumns='1fr 1fr 1fr 1fr 1fr'
              header={
                <>
                  <GridTable.Th />
                  <GridTable.Th location="center">Column 1</GridTable.Th>
                  <GridTable.Th location="center">Column 2</GridTable.Th>
                  <GridTable.Th location="center">Column 3</GridTable.Th>
                  <GridTable.Th location="center">Column 4</GridTable.Th>
                </>
              }
              body={
                <>
                  <GridTable.Td location="center" gridColumn="1/2" itemFlex>
                    <span>14:00</span>
                    <UserProfileIcon initials="FC" size={28} img={{ src: "" }} />
                  </GridTable.Td>
                  <GridTable.Tr gridColumn="2/6" gridTemplateColumns="1fr 1fr 1fr 1fr">
                    <GridTable.Td location="center">data 1</GridTable.Td>
                    <GridTable.Td location="center">data 2</GridTable.Td>
                    <GridTable.Td location="center">
                      <OrderStatusBadge text="estado" statusName="accepted" />
                    </GridTable.Td>
                    <GridTable.Td location="center">data 4</GridTable.Td>
                  </GridTable.Tr>
                </>
              }
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};
