// Refactor: investigate how to document an object with react components and style components
import { OrderStatusBadge } from "@/components/badges/OrderStatusBadge";
import { UserProfileIcon } from "@/components/image-containers/UserProfileIcon";
import { GridTable } from "..";
import { ITable } from "../types";

const base: ITable = {
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  maxWidth: "1000px",
  minWidth: "800px",
  header: (
    <>
      <GridTable.Th location="center">Column 1</GridTable.Th>
      <GridTable.Th location="center">Column 2</GridTable.Th>
      <GridTable.Th location="center">Column 3</GridTable.Th>
      <GridTable.Th location="center">Column 4</GridTable.Th>
    </>
  ),
  body: (
    <>
      <GridTable.Tr gridTemplateColumns="1fr 1fr 1fr 1fr">
        <GridTable.Td location="center" separator>data 1</GridTable.Td>
        <GridTable.Td location="center">data 2</GridTable.Td>
        <GridTable.Td location="center">data 3</GridTable.Td>
        <GridTable.Td location="center">data 4</GridTable.Td>
      </GridTable.Tr>
      <GridTable.Tr gridTemplateColumns="1fr 1fr 1fr 1fr">
        <GridTable.Td location="center" separator>data 1</GridTable.Td>
        <GridTable.Td location="center">data 2</GridTable.Td>
        <GridTable.Td location="center">data 3</GridTable.Td>
        <GridTable.Td location="center">data 4</GridTable.Td>
      </GridTable.Tr>
    </>
  ),
};

const variant1: ITable = {
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  maxWidth: "1000px",
  header: (
    <>
      <GridTable.Th location="center">Column 1</GridTable.Th>
      <GridTable.Th location="center">Column 2</GridTable.Th>
      <GridTable.Th location="center">Column 3</GridTable.Th>
      <GridTable.Th location="center">Column 4</GridTable.Th>
      <GridTable.Th location="center">Column 5</GridTable.Th>
    </>
  ),
  body: (
    <>
      <GridTable.Td location="center" gridColumn="1/2">
        Data 1
      </GridTable.Td>
      <GridTable.Tr gridColumn="2/6" gridTemplateColumns="1fr 1fr 1fr 1fr">
        <GridTable.Td location="center" separator>data 2</GridTable.Td>
        <GridTable.Td location="center" separator>data 3</GridTable.Td>
        <GridTable.Td location="center" separator>data 4</GridTable.Td>
        <GridTable.Td location="center">data 5</GridTable.Td>
      </GridTable.Tr>
    </>
  ),
};

const variant2: ITable = {
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  maxWidth: "1000px",
  minWidth: "800px",
  header: (
    <>
      <GridTable.Th />
      <GridTable.Th location="center">Column 1</GridTable.Th>
      <GridTable.Th location="center">Column 2</GridTable.Th>
      <GridTable.Th location="center">Column 3</GridTable.Th>
      <GridTable.Th location="center">Column 4</GridTable.Th>
    </>
  ),
  body: (
    <>
      <GridTable.Td location="center" gridColumn="1/2" itemFlex>
        <span>14:00</span>
        <UserProfileIcon initials="FC" size={28} img={{ src: "" }} />
      </GridTable.Td>
      <GridTable.Tr gridColumn="2/6" gridTemplateColumns="1fr 1fr 1fr 1fr">
        <GridTable.Td location="center">data 1</GridTable.Td>
        <GridTable.Td location="center">data 2</GridTable.Td>
        <GridTable.Td location="center">
          <OrderStatusBadge text="estado" statusName="accepted" />
        </GridTable.Td>
        <GridTable.Td location="center">data 4</GridTable.Td>
      </GridTable.Tr>
    </>
  ),
};

export const mockGridTableProps = {
  base,
  variant1,
  variant2,
};
