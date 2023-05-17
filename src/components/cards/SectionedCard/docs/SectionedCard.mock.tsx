import { Reference } from "@/components/utils/Reference";
import { UserItem } from "@/components/items/UserItem";
import { Characteristics } from "@/components/utils/Characteristics";
import { TotalFooter } from "@/components/utils/TotalFooter";
import { ISectionedCard } from "../types";
import { SectionedCard } from "..";

const base: ISectionedCard = {
  children: (
    <>
      <SectionedCard.Header>Card Header</SectionedCard.Header>
      <SectionedCard.Body>Card Body</SectionedCard.Body>
      <SectionedCard.Footer>Card Footer</SectionedCard.Footer>
    </>
  ),
};

const noFooter: ISectionedCard = {
  children: (
    <>
      <SectionedCard.Header>Card Header</SectionedCard.Header>
      <SectionedCard.Body>Card Body</SectionedCard.Body>
    </>
  ),
};

const noHeader: ISectionedCard = {
  children: (
    <>
      <SectionedCard.Body>Card Body</SectionedCard.Body>
      <SectionedCard.Footer>Card Footer</SectionedCard.Footer>
    </>
  ),
};

const noBody: ISectionedCard = {
  children: (
    <>
      <SectionedCard.Header>Card Header</SectionedCard.Header>
      <SectionedCard.Footer>Card Footer</SectionedCard.Footer>
    </>
  ),
};

const withSideElements: ISectionedCard = {
  children: (
    <>
      <SectionedCard.Header>
        Card Header<span>Header aside</span>
      </SectionedCard.Header>
      <SectionedCard.Body>Card Body</SectionedCard.Body>
      <SectionedCard.Footer>
        Card Footer<span>Footer aside</span>
      </SectionedCard.Footer>
    </>
  ),
};

const transactionImplementation: ISectionedCard = {
  children: (
    <>
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
    </>
  ),
};

export const mockSectionedCardProps = {
  base,
  noFooter,
  noHeader,
  noBody,
  withSideElements,
  transactionImplementation,
};
