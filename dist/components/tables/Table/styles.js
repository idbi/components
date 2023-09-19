import t,{css as e}from"styled-components";const i=t.div`
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
  }

  ::-webkit-scrollbar {
    height: 6px;
  }
`,l=t.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px;

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }

  thead {
    background: #fafafa;
    color: "#6b6b6b";
    font: 700 12px Poppins;
    th {
      padding: 0px 15px 0px;
      text-align: left;
      height: 42px;
      vertical-align: middle;
      &:first-child {
        border-radius: 8px 0 0 8px;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }

  tbody {
    background-color: #fff;
    color: #4f4f4f;
    font: normal 12px Poppins;
    tr {
      transition: all 0.2s ease-in-out;
      vertical-align: middle;
      display: table-row !important;
      ${({noHover:r})=>!r&&e`
          &:hover {
            filter: brightness(98%);
          }
        `}
    }
    td {
      height: 100%;
      padding: 10px 15px;
      display: table-cell;
      vertical-align: middle;
      border-bottom: 0.5px solid rgba(196, 196, 196, 0.4);
    }
  }
`;export{l as Container,i as TableWrapper};
