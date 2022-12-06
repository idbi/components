export const StepsToAddAComponent = (args) => (
  <>
    <h2>🛠️ Pasos para agregar un componente</h2>
    <br />
    <strong>Flujo en alto nivel</strong>
    <ol>
      <li>Agregar el componente considerando: <b>index.tsx</b> y <b>styles.ts</b></li>
      <li>Separar las props del componente en archivo types.d.ts.</li>
      <li>
        Crear carpeta docs considerando: <b>ComponentName.mock.ts</b> y <b>ComponentName.stories.ts</b>
        <ul>
          <li>De necesitar que el componente sea mostrado por un click de bottom u otro evento agregar un Container.tsx. Componente de referencia: CardModal</li>
        </ul>
      </li>
      <li>Exportar el componente dentro de <b>src/index.js</b></li>
      <li>Exportar tipos dentro de <b>types.d</b></li>
      <li>Si ha instalado una dependencia debe agregarlo dentro de <b>vite.config.ts</b></li>
    </ol>
    <span style={{background: "#eee"}}><b>Nota:</b> Actualmente para subir los cambios deberá ejecutar npm run build y crear una PR hacia la rama main.</span>
  </>
)