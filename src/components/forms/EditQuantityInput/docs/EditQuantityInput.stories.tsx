import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EditQuantityInput } from "./Container";
import { IEditQuantityInputContainer } from "./Container";
import { mockConfirmationCardV2Props } from "./EditQuantityInput.mock";

export default {
  title: "forms/EditQuantityInput",
  component: EditQuantityInput,
  argTypes: {},
} as ComponentMeta<typeof EditQuantityInput>;

const Template: ComponentStory<typeof EditQuantityInput> = (args) => <EditQuantityInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IEditQuantityInputContainer;
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
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

export const OnlyIntegers = Template.bind({});
OnlyIntegers.args = {
  ...mockConfirmationCardV2Props.onlyIntegers,
} as IEditQuantityInputContainer;
OnlyIntegers.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
              onlyIntegers
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

export const Disabled = Template.bind({});
Disabled.args = {
  ...mockConfirmationCardV2Props.disabled,
} as IEditQuantityInputContainer;
Disabled.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
              disabled
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

export const WithUnit = Template.bind({});
WithUnit.args = {
  ...mockConfirmationCardV2Props.withUnit,
} as IEditQuantityInputContainer;
WithUnit.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
              measureUnit="u."
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

export const NoModal = Template.bind({});
NoModal.args = {
  ...mockConfirmationCardV2Props.noModal,
} as IEditQuantityInputContainer;
NoModal.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
              blockInputModal
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

export const WithDelete = Template.bind({});
WithDelete.args = {
  ...mockConfirmationCardV2Props.withDelete,
} as IEditQuantityInputContainer;
WithDelete.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => alert("delete!")}
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

export const WithError = Template.bind({});
WithError.args = {
  ...mockConfirmationCardV2Props.withError,
} as IEditQuantityInputContainer;
WithDelete.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(null);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
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

export const NoDecrement = Template.bind({});
NoDecrement.args = {
  ...mockConfirmationCardV2Props.noDecrement,
} as IEditQuantityInputContainer;
NoDecrement.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
              noDecrement
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

export const CardVariant = Template.bind({});
CardVariant.args = {
  ...mockConfirmationCardV2Props.cardVariant,
} as IEditQuantityInputContainer;
CardVariant.parameters = {
  docs: {
    source: {
      code: dedent`
      import { EditQuantityInput, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react';
      
      function App() {
        const [value, setValue] = useState<null | number | string>(1);
      
      
        return (
          <IdThemeProvider>
            <EditQuantityInput
              onSetQuantity={(val) => setValue(val === 0 ? null : val)}
              hasError={value === null}
              value={value}
              onDelete={() => {}}
              measureUnit="u."
              variant="card"
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
