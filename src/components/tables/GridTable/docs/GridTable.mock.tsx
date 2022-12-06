// Refactor: investigate how to document an object with react components and style components
// import { OrderStatusBadge } from "@/components/badges/OrderStatusBadge";
// import { UserProfileIcon } from "@/components/image-containers/UserProfileIcon";
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
}

// const variant1: ITable = {
//   gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
//   maxWidth: "1000px",
//   header: (
//     <>
//       <div className="th item-center">Column 1</div>
//       <div className="th item-center">Column 2</div>
//       <div className="th item-center">Column 3</div>
//       <div className="th item-center">Column 4</div>
//       <div className="th item-center">Column 5</div>
//     </>
//   ),
//   body: (
//     <>
//       <div
//         className="td item-center"
//         style={{
//           gridColumn: "1/2",
//         }}
//       >
//         Data 1
//       </div>
//       <div
//         className="tr"
//         style={{
//           gridColumn: "2/6",
//           gridTemplateColumns: "1fr 1fr 1fr 1fr"
//         }}
//       >
//         <div className="td item-center separator">data 2</div>
//         <div className="td item-center separator">data 3</div>
//         <div className="td item-center separator">data 4</div>
//         <div className="td item-center ">data 5</div>
//       </div>
//     </>
//   ),
// };

// const variant2: ITable = {
//   gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
//   maxWidth: "1000px",
//   minWidth: "800px",
//   header: (
//     <>
//       <div />
//       <div className="th item-center">Column 1</div>
//       <div className="th item-center">Column 2</div>
//       <div className="th item-center">Column 3</div>
//       <div className="th item-center">Column 4</div>
//     </>
//   ),
//   body: (
//     <>
//       <div
//         className="td item-center item-flex"
//         style={{
//           gridColumn: "1/2",
//         }}
//       >
//         <span>14:00</span>
//         <UserProfileIcon initials="FC" size={28} img={{ src: "" }} />
//       </div>
//       <div
//         className="tr"
//         style={{
//           gridColumn: "2/6",
//           gridTemplateColumns: "1fr 1fr 1fr 1fr"
//         }}
//       >
//         <div className="td item-center">data 1</div>
//         <div className="td item-center">data 2</div>
//         <div className="td item-center">
//           <OrderStatusBadge text="estado" statusName="accepted"/>
//         </div>
//         <div className="td item-center">data 4</div>
//       </div>
//     </>
//   ),
// };

export const mockGridTableProps = {
  base,
  // variant1,
  // variant2,
};
