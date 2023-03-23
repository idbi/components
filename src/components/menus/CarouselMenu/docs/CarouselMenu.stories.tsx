import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CarouselMenu } from "../index";
import { CarouselMenu as CarouselMenuContainer } from "./Container";

import { ICarouselMenu } from "../types";
import { mockCarouselMenuProps } from "./CarouselMenu.mock";

export default {
  title: "menus/CarouselMenu",
  component: CarouselMenu,
  argTypes: {},
} as ComponentMeta<typeof CarouselMenu>;

const Template: ComponentStory<typeof CarouselMenu> = (args) => (
  <CarouselMenuContainer {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockCarouselMenuProps.base,
} as ICarouselMenu;
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import { CarouselMenu, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      const items = [
        {
          id: "1",
          text: "Gaseosas",
        },
        {
          id: "2",
          text: "Galletas",
        },
        {
          id: "3",
          text: "Cocteles",
        },
        {
          id: "4",
          text: "Entradas",
        },
        {
          id: "5",
          text: "Vinos",
        },
        {
          id: "6",
          text: "Hamburguesas",
        },
        {
          id: "7",
          text: "Ensaladas",
        },
        {
          id: "8",
          text: "Panes",
        },
        {
          id: "9",
          text: "Café",
        },
        {
          id: "10",
          text: "Adicionales",
        },
        {
          id: "11",
          text: "Helados",
        },
        {
          id: "12",
          text: "Conservas",
        },
        {
          id: "13",
          text: "Tacos",
        },
        {
          id: "14",
          text: "FekiCaramelos",
        },
        {
          id: "21",
          text: "Gaseosas",
        },
        {
          id: "22",
          text: "Galletas",
        },
        {
          id: "23",
          text: "Cocteles",
        },
        {
          id: "24",
          text: "Entradas",
        },
        {
          id: "25",
          text: "Vinos",
        },
        {
          id: "26",
          text: "Hamburguesas",
        },
        {
          id: "27",
          text: "Ensaladas",
        },
        {
          id: "28",
          text: "Panes",
        },
        {
          id: "29",
          text: "Café",
        },
        {
          id: "210",
          text: "Adicionales",
        },
        {
          id: "211",
          text: "Helados",
        },
        {
          id: "212",
          text: "Conservas",
        },
        {
          id: "213",
          text: "Tacos",
        },
        {
          id: "214",
          text: "FekiCaramelos",
        },
      ];
      
      function App() {
        const [selectedId, setSelectedId] = useState("");
      
        return (
          <IdThemeProvider>
            <CarouselMenu
              items={items}
              loadingSelectedId={false}
              showArrows={false}
              selectedId={selectedId}
              setSelectedId={(id) => setSelectedId(id)}
            />
          </IdThemeProvider>
        )
      }
      
      export default App
      `,
      language: "tsx",
      type: "auto",
    },
  },
};
