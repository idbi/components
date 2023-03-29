import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionCard } from "../index";
import { SectionCard as SectionCardContainer } from "./Container";
import { SectionCard as SectionCardContainer2 } from "./Container2";
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

const Template3: ComponentStory<typeof SectionCard> = (args) => (
  <SectionCardContainer2 {...args} />
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

export const ProductOutput = Template3.bind({});
ProductOutput.parameters = {
  docs: {
    source: {
      code: dedent`
      import { IdThemeProvider, SectionCard, ToggleSwitch, Text } from '@idbi/components'
      import { useState } from 'react';
      import { IdiArrowBottom } from "@/icons/IdiArrowBottom"; // TODO: export icons
      import styled, { css } from "styled-components";

      const Circle = styled.div\`
        display: flex;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 7px;
        \${(props) => {
          return css\`
            background-color: \${props.color};
            \`;
        }};
        \`;

      const CircleContainerWithText = styled.div\`
        display: flex;
        align-items: center;
        margin-right: 10px;
      \`;

      const Line = styled.div\`
        display: flex;
        width: 2px;
        height: 18px;
        background-color: #4a4a4a;
        margin: 0 17px 0 8px;
      \`;

      const Row = styled.div\`
        display: flex;
        justify-content: space-between;
        align-items: center;
      \`;

      const styledText = {
        color: "NEUTRAL/400",
        size: "xs",
        weight: "regular",
        style: {
          lineHeight: "20px",
        },
      };

      const styledAmount = {
        position: "absolute",
        right: 0,
        top: 0,
      };

      function App() {
        const [showSection, setShowSection] = useState(false);

        return (
          <IdThemeProvider>
            <div style={{width: "100vw"}}>
            <SectionCard
              containerStyle={{
                borderRadius: "20px",
              }}
              headerTop={
                <div
                  style={{
                    marginBottom: "15px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text color="SECONDARY/900">Salida: N° 1</Text>
                  <Text color="NEUTRAL/500">1 x BOTELLITAS</Text>
                  <Text color="NEUTRAL/500" style={styledAmount}>
                    s/40.00
                  </Text>
                </div>
              }
              headerAside={
                <IdiArrowBottom
                  size={15}
                  onClick={() => setShowSection((s) => !s)}
                  styleContainer={{
                    transition: "0.3s ease all",
                    transform: showSection ? "rotate(180deg)" : "rotate(0deg)"
                  }}
                />
              }
              title={
                <>
                  <Line />
                  <CircleContainerWithText>
                    <Circle color="#151E5A" />
                    <Text color="PRIMARY/800" weight="regular">
                      El producto fue aceptado
                    </Text>
                  </CircleContainerWithText>
                </>
              }
              showBody={showSection}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "10px",
                  marginTop: "15px",
                  borderTop: "1px solid #eeeeee",
                }}
              >
                <Text color="NEUTRAL/400" size="xs" weight="regular">
                  0 / 1 AGUA MINERAL EVIAN (750 ML)-PRUEBA PAGADAS
                </Text>
                <Text {...styledText}>Razón descuento:</Text>
                <Row>
                  <Text {...styledText}>Monto pagado</Text>
                  <Text {...styledText}>s/ 0.00</Text>
                </Row>
                <Row>
                  <Text {...styledText}>Monto a pagar</Text>
                  <Text {...styledText}>s/ 15.00</Text>
                </Row>
                <Row>
                  <Text {...styledText}>Creado</Text>
                  <Text {...styledText}>11/01/2023 - 09:57 am</Text>
                </Row>
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
