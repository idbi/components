import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UploadMultiMedia } from "./Container";

export default {
  title: "upload/UploadMultiMedia",
  component: UploadMultiMedia,
  argTypes: {},
} as ComponentMeta<typeof UploadMultiMedia>;

const Template: ComponentStory<typeof UploadMultiMedia> = (args) => (
  <UploadMultiMedia {...args} />
);

export const Base = Template.bind({});
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      import {
        IdThemeProvider, UploadMultiMedia,
      } from '@idbi/components'
      import { IFile } from '@idbi/components/src/components/files-upload/UploadMultiMedia/types';
      import { useState } from 'react';
      
      function App() {
        const [files, setFiles] = useState<IFile[]>([]);
      
        return (
          <IdThemeProvider>
            <UploadMultiMedia
              onRemove={(_file, _url, allFiles) => setFiles(allFiles)}
              onChange={(_file, _url, allFiles) => setFiles(allFiles)}
              onError={() => {}}
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
