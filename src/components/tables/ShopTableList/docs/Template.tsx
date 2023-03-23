import { Source } from "@storybook/components";
import dedent from "ts-dedent";
import React, { useState } from "react";
import { ShopTableList } from "..";
import { mockShopTableListProps } from "./ShopTableList.mock";

export const Template = () => {
  const [tableUuid, setTableUuid] = useState("3");
  const [tableUuid2, setTableUuid2] = useState("2");

  return (
    <>
      <h2 style={{ margin: "20px 0" }}>lista de mesas 1</h2>
      <ShopTableList
        tables={mockShopTableListProps.base.tables}
        onClick={(uuid) => setTableUuid(uuid)}
        activeTableUuid={tableUuid}
      />
      <h2 style={{ margin: "20px 0" }}>lista de mesas 2</h2>
      <ShopTableList
        tables={mockShopTableListProps.base.tables.map((table) => ({
          ...table,
          noCounter: true,
        }))}
        onClick={(uuid) => setTableUuid2(uuid)}
        activeTableUuid={tableUuid2}
      />
      <Source
        language="tsx"
        dark
        format={false}
        code={dedent`
        import { IdThemeProvider, ShopTableList } from '@idbi/components'
        import { useState } from 'react';
        
        const tables = [
          {
            uuid: "1",
            label: "B1-1",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "2",
            label: "B1-2",
            counter: 1,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "3",
            label: "B1-3",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "4",
            label: "B1-4",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "5",
            label: "A1-1",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "6",
            label: "A1-2",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "7",
            label: "A1-3",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "8",
            label: "A1-4",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "9",
            label: "BOX1-1",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "10",
            label: "BOX1-2",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "11",
            label: "BOX1-3",
            counter: 2,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "12",
            label: "BOX1-4",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "13",
            label: "PREMIUN-1",
            counter: 1,
            noHover: false,
            noCounter: false,
          },
          {
            uuid: "14",
            label: "PREMIUN-2",
            counter: 0,
            noHover: false,
            noCounter: false,
          },
        ];
        
        function App() {
          const [tableUuid, setTableUuid] = useState("3");
          const [tableUuid2, setTableUuid2] = useState("2");
        
          return (
            <IdThemeProvider>
              <h2>lista de mesas 1</h2>
              <ShopTableList
                tables={tables}
                onClick={(uuid) => setTableUuid(uuid)}
                activeTableUuid={tableUuid}
              />
              <h2>lista de mesas 2</h2>
              <ShopTableList
                tables={tables.map((table) => ({...table, noCounter: true}))}
                onClick={(uuid) => setTableUuid(uuid)}
                activeTableUuid={tableUuid}
              />
            </IdThemeProvider>
          )
        }
        
        export default App
        `}
      />
    </>
  );
};
