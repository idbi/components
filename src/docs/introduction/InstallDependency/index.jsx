import { Source } from '@storybook/components';
import dedent from 'ts-dedent';

export const InstallDependency = (args) => (
  <>
    <h2>☀️ Instalar Dependencia</h2>
    <br />
    <span>General:</span>
    <Source
      language='bash'
      dark
      format={false}
      code={dedent`
      npm i "git+ssh://git@github.com:idbi/components.git" --legacy-peer-deps
      `}
    />
    <span>Para determinar versión:</span>
    <Source
      language='bash'
      dark
      format={false}
      code={dedent`
      npm i "git+ssh://git@github.com:idbi/components/tree/v0.22.0" --legacy-peer-deps
      `}
    />

  </>
)