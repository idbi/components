import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionCard } from "../index";
import { SectionCard as SectionCardContainer } from "./Container";
import { ISectionCard } from "../types";
import { mockSectionCardProps } from "./SectionCard.mock";

export default {
  title: "cards/SectionCard",
  component: SectionCard,
  argTypes: {},
} as ComponentMeta<typeof SectionCard>;

const Template: ComponentStory<typeof SectionCard> = (args) => (
  <SectionCard {...args} />
);

const Template2: ComponentStory<typeof SectionCard> = (args) => (
  <SectionCardContainer {...args} />
);

export const BaseNoContent = Template.bind({});
BaseNoContent.args = {
  ...mockSectionCardProps.baseNoContent,
} as ISectionCard;

export const WithContent = Template.bind({});
WithContent.args = {
  ...mockSectionCardProps.withContent,
} as ISectionCard;

export const noTitle = Template.bind({});
noTitle.args = {
  ...mockSectionCardProps.noTitle,
} as ISectionCard;

export const WithHeaderAside = Template.bind({});
WithHeaderAside.args = {
  ...mockSectionCardProps.withHeaderAside,
} as ISectionCard;

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...mockSectionCardProps.noIcon,
} as ISectionCard;

export const withInnerSections = Template.bind({});
withInnerSections.args = {
  ...mockSectionCardProps.withInnerSections,
} as ISectionCard;

export const innerSectionsNoChildren = Template.bind({});
innerSectionsNoChildren.args = {
  ...mockSectionCardProps.innerSectionsNoChildren,
} as ISectionCard;

export const hideBody = Template2.bind({});
hideBody.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, SectionCard, ToggleSwitch } from '@idbi/components'
      import { useState } from 'react';

      function App() {
        const [showSection, setShowSection] = useState(false);

        return (
          <IdThemeProvider>
            <div style={{width: "100vw"}}>
              <SectionCard
                containerStyle={{
                  borderRadius: "20px",
                }}
                headerAside={
                  <ToggleSwitch
                    initial={showSection}
                    onToggle={(val) => {
                      setShowSection(val);
                    }}
                  />
                }
                icon={"📝"}
                title="Datos de la cotización"
                showBody={showSection}
                sections={[
                  <>
                    Some inner section...
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                      accusamus mollitia nam perspiciatis voluptatum optio! Ad eaque
                      cupiditate porro dicta, necessitatibus saepe, consequatur inventore
                      deleniti perferendis odio expedita? Sequi, explicabo.
                    </p>
                  </>,
                  <>
                    Other inner section...
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                      accusamus mollitia nam perspiciatis voluptatum optio! Ad eaque
                      cupiditate porro dicta, necessitatibus saepe, consequatur inventore
                      deleniti perferendis odio expedita? Sequi, explicabo.
                    </p>
                  </>,
                ]}
              >
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum suscipit optio accusantium hic voluptates, maxime a neque! Vitae iusto temporibus aperiam rerum possimus asperiores unde sunt fugit aliquam hic.
                </div>
              </SectionCard>
            </div>
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
