import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleProductCard } from "../index";
import { SimpleProductCard as SimpleProductCardContainer } from "./Container";
import { SimpleProductCard as SimpleProductCardContainer2 } from "./Container2";
import { ISimpleProductCard } from "../types";
import { mockSimpleProductCardProps } from "./SimpleProductCard.mock";

export default {
  title: "productCards/SimpleProductCard",
  component: SimpleProductCard,
  argTypes: {},
} as ComponentMeta<typeof SimpleProductCard>;

const Template: ComponentStory<typeof SimpleProductCard> = (args) => (
  <SimpleProductCard {...args} />
);

const Template2: ComponentStory<typeof SimpleProductCard> = (args) => (
  <SimpleProductCardContainer {...args} />
);

const Template3: ComponentStory<typeof SimpleProductCard> = (args) => (
  <SimpleProductCardContainer2 {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockSimpleProductCardProps.base,
} as ISimpleProductCard;

export const variant1 = Template2.bind({});
variant1.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, SimpleProductCard } from '@idbi/components'
      import { useState } from 'react';

      function App() {
        const [quantity, setQuantity] = useState(0);

        return (
          <IdThemeProvider>
            <SimpleProductCard
              name="Helado de chocolate"
              description="fekichocolates"
              code="1GTZZVS"
              discount="-20%"
              price={{
                amount: "10.00",
                symbol: "S/.",
              }}
              quantityInput={{
                minimumQuantity: 0,
                show: true,
                noDecrement: false,
                noIncrement: false,
                value: quantity,
                onSetQuantity: (val, _type) => setQuantity(val),
              }}
              img={{
                src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
                alt: "helado de chocolate",
              }}
              onClick={() => alert("click")}
              disabled={false}
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

export const variant2 = Template3.bind({});
variant2.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, SimpleProductCard } from '@idbi/components'
      import { useState } from 'react';

      function App() {
        const [quantity, setQuantity] = useState(0);

        return (
          <IdThemeProvider>
            <SimpleProductCard
              name="Helado de chocolate"
              description="fekichocolates"
              code="1GTZZVS"
              discount="-20%"
              price={{
                amount: "10.00",
                symbol: "S/.",
              }}
              img={{
                src: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
                alt: "helado de chocolate",
              }}
              onClick={() => alert("click")}
              quantityInput={{
                blockInputModal: true,
                show: true,
                noDecrement: true,
                value: quantity,
                onSetQuantity: (val, _type) => setQuantity(val),
              }}
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
