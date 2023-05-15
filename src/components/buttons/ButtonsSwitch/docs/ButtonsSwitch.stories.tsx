import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonsSwitch, IButtonsSwitchContainer } from "./Container";
import { mockConfirmationCardV2Props } from "./ButtonsSwitch.mock";

export default {
  title: "forms/ButtonsSwitch",
  component: ButtonsSwitch,
  argTypes: {},
} as ComponentMeta<typeof ButtonsSwitch>;

const Template: ComponentStory<typeof ButtonsSwitch> = (args) => (
  <ButtonsSwitch {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...mockConfirmationCardV2Props.primary,
} as IButtonsSwitchContainer;
Primary.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider, IdiBox } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        {
          label: (
            <>
              <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
            </>
          ),
          value: "ADD",
        },
        {
          label: 'Detalles de la cotización',
          value: 'DETAILS'
        }
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="primary"
              options={options}
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const PrimaryFullWidth = Template.bind({});
PrimaryFullWidth.args = {
  ...mockConfirmationCardV2Props.primaryFullWidth,
} as IButtonsSwitchContainer;
PrimaryFullWidth.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider, IdiBox } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        {
          label: (
            <>
              <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
            </>
          ),
          value: "ADD",
        },
        {
          label: 'Detalles de la cotización',
          value: 'DETAILS'
        }
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="primary"
              options={options}
              fullWidth
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const PrimaryMultipleOptions = Template.bind({});
PrimaryMultipleOptions.args = {
  ...mockConfirmationCardV2Props.primaryMultipleOptions,
} as IButtonsSwitchContainer;
PrimaryMultipleOptions.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider, IdiBox } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        {
          label: (
            <>
              <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
            </>
          ),
          value: "ADD",
        },
        { label: "Detalles de la cotización", value: "DETAILS" },
        { label: "Otra opción", value: "OTHER" },
        { label: "Test", value: "TEST" },
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="primary"
              options={options}
              fullWidth
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...mockConfirmationCardV2Props.primaryDisabled,
} as IButtonsSwitchContainer;
PrimaryDisabled.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider, IdiBox } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        {
          label: (
            <>
              <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
            </>
          ),
          value: "ADD",
        },
        { label: "Detalles de la cotización", value: "DETAILS" },
        { label: "Otra opción", value: "OTHER" },
        { label: "Test", value: "TEST" },
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="primary"
              options={options}
              fullWidth
              disabled
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockConfirmationCardV2Props.secondary,
} as IButtonsSwitchContainer;
Secondary.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        { label: "S/", value: "PEN" },
        { label: "$", value: "USD" },
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="secondary"
              options={options}
            />
          </IdThemeProvider>
        )
      }
      
      export default App          
      `,
    },
  },
};

export const SecondaryMultipleOptions = Template.bind({});
SecondaryMultipleOptions.args = {
  ...mockConfirmationCardV2Props.secondaryMultipleOptions,
} as IButtonsSwitchContainer;
SecondaryMultipleOptions.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider, IdiBox } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        {
          label: (
            <>
              <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
            </>
          ),
          value: "ADD",
        },
        { label: "Detalles de la cotización", value: "DETAILS" },
        { label: "Otra opción", value: "OTHER" },
        { label: "Test", value: "TEST" },
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="secondary"
              options={options}
            />
          </IdThemeProvider>
        )
      }
      
      export default App      
      `,
    },
  },
};

export const tertiary = Template.bind({});
tertiary.args = {
  ...mockConfirmationCardV2Props.tertiary,
} as IButtonsSwitchContainer;
tertiary.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider, IdiBox } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        {
          label: (
            <>
              <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
            </>
          ),
          value: "ADD",
        },
        { label: "Detalles de la cotización", value: "DETAILS" },
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="tertiary"
              options={options}
            />
          </IdThemeProvider>
        )
      }
      
      export default App        
      `,
    },
  },
};

export const tertiaryMultipleOptions = Template.bind({});
tertiaryMultipleOptions.args = {
  ...mockConfirmationCardV2Props.tertiaryMultipleOptions,
} as IButtonsSwitchContainer;
tertiaryMultipleOptions.parameters = {
  docs: {
    source: {
      code: dedent`
      import { ButtonsSwitch, IdThemeProvider, IdiBox } from '@idbi/components'
      import { useState } from 'react'
      
      const options = [
        {
          label: (
            <>
              <IdiBox style={{ margin: "0 5px" }} /> Agregar productos
            </>
          ),
          value: "ADD",
        },
        { label: "Detalles de la cotización", value: "DETAILS" },
        { label: "Otra opción", value: "OTHER" },
        { label: "Test", value: "TEST" },
      ]
      
      function App() {
        const [selected, setSelected] = useState(options[0].value);
      
        return (
          <IdThemeProvider>
            <ButtonsSwitch
              selected={selected}
              onSelect={(val) => setSelected(val)}
              model="tertiary"
              options={options}
              fullWidth
            />
          </IdThemeProvider>
        )
      }
      
      export default App   
      `,
    },
  },
};
