import { Source } from '@storybook/components';
import dedent from 'ts-dedent';
import json from "../../../../package.json"

export const InstallDependency = (args) => (
  <>
    <h2>☀️ Instalar Dependencia</h2>
    <br />
    <h3>Paso 1</h3>
    <span>General:</span>
    <Source
      language='bash'
      dark
      format={false}
      code={dedent`
      npm i "git+ssh://git@github.com:idbi/components.git" --legacy-peer-deps
      `}
    />
    <span>Para determinar versión: (Recomendado)</span>
    <Source
      language='bash'
      dark
      format={false}
      code={dedent`
      npm i "git+ssh://git@github.com:idbi/components/tree/v${json?.version || "0.35.0"}" --legacy-peer-deps
      `}
    />
    <h3>Paso 2</h3>
    <p>Agregar IdThemeProvider a tu proyecto:</p>
    <Source
      language='tsx'
      dark
      format={false}
      code={dedent`
      import { IdThemeProvider } from '@idbi/components'

      function App() {
        return (
          <IdThemeProvider>
            <div>
              your code
            </div>
          </IdThemeProvider>
        )
      }
      
      export default App
      `}
    />
     <h3>Paso 3</h3>
     <p>Comienza a usar los componentes disponibles!</p>
     <Source
      language='tsx'
      dark
      format={false}
      code={dedent`
      import { Button, IdThemeProvider, SectionCard } from '@idbi/components'

      function App() {
        return (
          <IdThemeProvider>
            <div>
              <Button>
                Cancelar
              </Button>
              <SectionCard
                icon="😎"
                title="Datos de la cotización"
              />
            </div>
          </IdThemeProvider>
        )
      }
      
      export default App
      `}
    />
  </>
)