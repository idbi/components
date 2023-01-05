const fs = require("fs")

const raw = process.argv[2]
if (!raw?.trim()) return console.log("Add the path of new component. example: /src/components/Example")
const rawParts = raw.split("/")

const componentName = rawParts.slice(-1)[0]
const storiesTitle = rawParts.filter(i => i.trim() && i !== "src" && i !== "components").join("/")
const path = (() => {
  rawParts.pop()
  const format = rawParts.join("/")
  return `.${format}`
})()

const baseFolderPath = `${path}/${componentName}`
const docsFolderPath = `${baseFolderPath}/docs`
const indexPath = `${baseFolderPath}/index.tsx`
const stylesPath = `${baseFolderPath}/styles.ts`
const typesPath = `${baseFolderPath}/types.d.ts`
const mockPath = `${docsFolderPath}/${componentName}.mock.tsx`
const storiesPath = `${docsFolderPath}/${componentName}.stories.tsx`

const indexPath_content = `
import React from "react";
import type { I${componentName} } from "./types";
import * as s from "./styles"

export const ${componentName}: React.FC<I${componentName}> = ({}) => {
  return (
    <s.Container>
      structure for ${componentName}
    </s.Container>
  );
};
`

const stylesPath_content = `
import styled from "styled-components";

export const Container = styled.div\`\`
`

const typesPath_content = `
import React from "react";

export interface I${componentName} {
}

export declare const ${componentName}: (props: I${componentName}) => JSX.Element;
`

const mockPath_content = `
import { I${componentName} } from "../types";

const base: I${componentName} = {

};

export const mock${componentName}Props = {
  base,
};
`

const storiesPath_content = `
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ${componentName} } from "../index";
import { I${componentName} } from "../types";
import { mock${componentName}Props } from "./${componentName}.mock";

export default {
  title: "${storiesTitle}",
  component: ${componentName},
  argTypes: {},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mock${componentName}Props.base,
} as I${componentName};
`

const data = {
  general: {
    componentName,
    storiesTitle,
    path,
  },
  component: {
    baseFolderPath,
    indexPath,
    stylesPath,
    typesPath,
    indexPath_content,
    stylesPath_content,
    typesPath_content,
  },
  docs: {
    docsFolderPath,
    mockPath,
    storiesPath,
    mockPath_content,
    storiesPath_content,
  }
}
const {general, component, docs} = data

if(!fs.existsSync(general.path)) fs.mkdirSync(general.path)
if(fs.existsSync(component.baseFolderPath)) return console.log(`the ${general.componentName} component already exists!`)
fs.mkdirSync(component.baseFolderPath)
fs.writeFileSync(component.indexPath, component.indexPath_content)
fs.writeFileSync(component.stylesPath, component.stylesPath_content)
fs.writeFileSync(component.typesPath, component.typesPath_content)
fs.mkdirSync(docs.docsFolderPath)
fs.writeFileSync(docs.mockPath, docs.mockPath_content)
fs.writeFileSync(docs.storiesPath, docs.storiesPath_content)

console.log(`
  The ${general.componentName} component storybook structure was created correctly!
  happy code documentation! 😎
`)