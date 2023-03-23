import { Source } from "@storybook/components";
import dedent from "ts-dedent";
import React, { useState } from "react";
import { OrderTypeHeader } from "..";
import { mockOrderTypeHeaderProps } from "./OrderTypeHeader.mock";

export const Template = () => {
  const [typeUuid, setTypeUuid] = useState("2");

  return (
    <>
      <OrderTypeHeader
        {...mockOrderTypeHeaderProps.base}
        onClick={(type) => setTypeUuid(type)}
        activeTypeUuid={typeUuid}
      />
      <Source
        language="tsx"
        dark
        format={false}
        code={dedent`
        import { IdThemeProvider, OrderTypeHeader } from '@idbi/components'
        import { useState } from 'react';
        
        function App() {
          const [typeUuid, setTypeUuid] = useState("3");
        
          return (
            <IdThemeProvider>
              <OrderTypeHeader
                activeTypeUuid={typeUuid}
                onClick={(uuid) => setTypeUuid(uuid)}
                types={[
                  {
                    slug: "delivery",
                    uuid: "1",
                  },
                  {
                    slug: "on-room",
                    uuid: "2",
                  },
                  {
                    slug: "pick-up",
                    uuid: "3",
                  },
                  {
                    slug: "on-room",
                    uuid: "4",
                  },
                ]}
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
