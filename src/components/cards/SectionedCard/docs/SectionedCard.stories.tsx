import dedent from "ts-dedent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionedCard } from "../index";
import { ISectionedCard } from "../types";
import { mockSectionedCardProps } from "./SectionedCard.mock";

export default {
  title: "cards/SectionedCard",
  component: SectionedCard,
  argTypes: {},
} as ComponentMeta<typeof SectionedCard>;

const Template: ComponentStory<typeof SectionedCard> = (args) => <SectionedCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockSectionedCardProps.base,
} as ISectionedCard;
Base.parameters = {
  docs: {
    source: {
      code: dedent`
      <SectionedCard>
        <SectionedCard.Header>Card Header</SectionedCard.Header>
        <SectionedCard.Body>Card Body</SectionedCard.Body>
        <SectionedCard.Footer>Card .Footer</SectionedCard.Footer>
      </SectionedCard> 
      `,
    },
  },
};

export const NoFooter = Template.bind({});
NoFooter.args = {
  ...mockSectionedCardProps.noFooter,
} as ISectionedCard;
NoFooter.parameters = {
  docs: {
    source: {
      code: dedent`
      <SectionedCard>
        <SectionedCard.Header>Card Header</SectionedCard.Header>
        <SectionedCard.Body>Card Body</SectionedCard.Body>
      </SectionedCard> 
      `,
    },
  },
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  ...mockSectionedCardProps.noHeader,
} as ISectionedCard;
NoHeader.parameters = {
  docs: {
    source: {
      code: dedent`
      <SectionedCard>
        <SectionedCard.Body>Card Body</SectionedCard.Body>
        <SectionedCard.Footer>Card .Footer</SectionedCard.Footer>
      </SectionedCard> 
      `,
    },
  },
};

export const NoBody = Template.bind({});
NoBody.args = {
  ...mockSectionedCardProps.noBody,
} as ISectionedCard;
NoBody.parameters = {
  docs: {
    source: {
      code: dedent`
      <SectionedCard>
        <SectionedCard.Header>Card Header</SectionedCard.Header>
        <SectionedCard.Footer>Card Footer</SectionedCard.Footer>
      </SectionedCard> 
      `,
    },
  },
};

export const WithSideElements = Template.bind({});
WithSideElements.args = {
  ...mockSectionedCardProps.withSideElements,
} as ISectionedCard;
WithSideElements.parameters = {
  docs: {
    source: {
      code: dedent`
      <SectionedCard>
        <SectionedCard.Header>
          Card Header<span>Header aside</span>
        </SectionedCard.Header>
        <SectionedCard.Body>Card Body</SectionedCard.Body>
        <SectionedCard.Footer>
          Card Footer<span>Footer aside</span>
        </SectionedCard.Footer>
      </SectionedCard> 
      `,
    },
  },
};

export const TransactionImplementation = Template.bind({});
TransactionImplementation.args = {
  ...mockSectionedCardProps.transactionImplementation,
} as ISectionedCard;
TransactionImplementation.parameters = {
  docs: {
    source: {
      code: dedent`
      import { SectionedCard, Reference, UserItem, Characteristics, TotalFooter } from '@idbi/components'

      <SectionedCard>
        <SectionedCard.Header>
          <Reference reference="S-003" onClick={() => alert("clicked reference")} description="2 articulos" />
          <UserItem
            name="Francisco Gutierrez"
            description="Creado: 14 Nov"
            img="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
            aside
          />
        </SectionedCard.Header>
        <SectionedCard.Body>
          <Characteristics title="Venta" description="Por evento del dia de la Madre" aside="Principal" />
          <div style={{ marginTop: 15 }}>
            <TotalFooter currencySymbol="S/" total={36} />
          </div>
        </SectionedCard.Body>
      </SectionedCard> 
      `,
    },
  },
};
