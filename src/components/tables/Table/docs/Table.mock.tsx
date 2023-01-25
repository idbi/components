/* eslint-disable no-console */
import { ITable } from "../types";

const defaultTable: ITable = {
  loading: false,
  noHover: true,
  onScroll: (scrollLeft) => console.log(scrollLeft),
  showPagination: true,
  styleWrapper: {},
  styleTable: {},
  pagination: {
    currentPage: 2,
    lastPage: 10,
    onChangePage: (val) => console.log(val),
  },
  headers: (
    <>
      <th>SKU</th>
      <th>Nombre</th>
      <th>Descripción</th>
    </>
  ),
  body: (
    <>
      <tr>
        <td>ASDC</td>
        <td>Lorem, ipsum.</td>
        <td>Lorem ipsum dolor sit amet.</td>
      </tr>
      <tr>
        <td>HBDC</td>
        <td>Lorem, ipsum.</td>
        <td>Lorem ipsum dolor sit amet.</td>
      </tr>
    </>
  ),
};

const customTable: ITable = {
  onScroll: (scrollLeft) => console.log(scrollLeft),
  showPagination: false,
  styleWrapper: {
    borderRadius: "10px",
  },
  styleTable: {
    marginBottom: "2px",
  },
  styleTHead: {
    background: "#4318FF",
    color: "#fff",
    fontSize: "18px",
  },
  styleTBody: {
    background: "#F1F2F9",
    color: "#4318FF",
    fontSize: "15px",
  },
  headers: (
    <>
      <th>SKU</th>
      <th className="center">Nombre</th>
      <th className="right">Descripción</th>
    </>
  ),
  body: (
    <>
      <tr>
        <td>HBDC</td>
        <td>Lorem, ipsum.</td>
        <td>Lorem ipsum dolor sit amet.</td>
      </tr>
      <tr>
        <td>HBDC</td>
        <td>Lorem, ipsum.</td>
        <td>Lorem ipsum dolor sit amet.</td>
      </tr>
    </>
  ),
};

export const mockTableProps = {
  defaultTable,
  customTable,
};
