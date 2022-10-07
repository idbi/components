# ID COMPONENTS

## Instalar
---
```
npm i "git+ssh://git@github.com:idbi/components.git" --legacy-peer-deps
```

## Documentación:
---

https://storybook.idbi.pe/?path=/story/template-basetemplate--base

## Pasos para agregar un componente
---

Flujo en alto nivel para agregar un componente:

1. Agregar el componente considerando: **index.tsx** y **styles.ts**
2. Separar las props del componente en archivo **types.d.ts**.
3. Crear carpeta **docs** considerando: **ComponentName.mock.ts** y  **ComponentName.stories.ts**

    - De necesitar que el componente sea mostrado por un click de bottom u otro evento agregar un **Container.tsx**. Componente de referencia: CardModal
4. Exportar el componente dentro de **src/index.js**
5. Exportar tipos dentro de **types.d**
6. Si ha instalado una dependencia debe agregarlo dentro de vite.config.ts

Nota: Actualmente para subir los cambios deberá ejecutar **npm run build** y crear una PR hacia la rama main.