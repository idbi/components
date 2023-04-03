import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QuantityInputV2 } from "./Container";
import { IQuantityInputV2 } from "../types";
import { mockConfirmationCardV2Props } from "./QuantityInputV2.mock";

export default {
  title: "forms/QuantityInputV2",
  component: QuantityInputV2,
  argTypes: {},
} as ComponentMeta<typeof QuantityInputV2>;

const Template: ComponentStory<typeof QuantityInputV2> = (args) => (
  <QuantityInputV2 {...args} />
);
export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IQuantityInputV2;
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, QuantityInputV2 } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [quantity, setQuantity] = useState(1);
      
        return (
          <IdThemeProvider>
            <QuantityInputV2
              quantity={quantity}
              onChange={(val) => setQuantity(val)}
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

export const withIcon = Template.bind({});
withIcon.args = {
  ...mockConfirmationCardV2Props.withIcon,
} as IQuantityInputV2;
withIcon.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, QuantityInputV2 } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [quantity, setQuantity] = useState(1);
      
        return (
          <IdThemeProvider>
            <QuantityInputV2
              quantity={quantity}
              icon={<>🚀</>}
              onChange={(val) => setQuantity(val)}
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

export const noDecrease = Template.bind({});
noDecrease.args = {
  ...mockConfirmationCardV2Props.noDecrease,
} as IQuantityInputV2;
noDecrease.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, QuantityInputV2 } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [quantity, setQuantity] = useState(1);
      
        return (
          <IdThemeProvider>
            <QuantityInputV2
              quantity={quantity}
              icon={<>🚀</>}
              onChange={(val) => setQuantity(val)}
              decrease={{
                available: false
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

export const fullWidth = Template.bind({});
fullWidth.args = {
  ...mockConfirmationCardV2Props.fullWidth,
} as IQuantityInputV2;
fullWidth.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, QuantityInputV2 } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [quantity, setQuantity] = useState(1);
      
        return (
          <IdThemeProvider>
            <QuantityInputV2
              quantity={quantity}
              icon={<>🚀</>}
              onChange={(val) => setQuantity(val)}
              fullWidth
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
