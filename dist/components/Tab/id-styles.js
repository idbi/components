import s,{css as n}from"styled-components";const d=s.button`
  color: currentColor;
  background-color: transparent;
  border: none;
  font-size: 14px;
  position: relative;
  padding: 4px 5px;
  font-weight: ${({bold:o})=>o?"bold":"regular"};

  @media (hover: hover) {
    cursor: pointer;
  }

  ${({noWrap:o})=>o&&n`
      white-space: "nowrap";
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    `}

  ${({isActive:o,rounded:i,activeColor:a,tabWidth:r,tabFullWidth:t,tabHeight:p})=>o&&n`
      color: ${({theme:e})=>a||e.color.SECONDARY[900]};
      ::before {
        content: "";
        background-color: ${({theme:e})=>a||e.color.SECONDARY[900]};
        border-radius: ${i?"8px":0};
        width: ${t?"100%":`${r}px`};
        height: ${p}px;
        position: absolute;
        bottom: 0px;
        left: ${t?"0":"unset"};

        animation: fadeIn 1.2s;
        -webkit-animation: fadeIn 1.2s;
        -moz-animation: fadeIn 1.2s;
        -o-animation: fadeIn 1.2s;
        -ms-animation: fadeIn 1.2s;

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-moz-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-webkit-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-o-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-ms-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      
    `};
`;export{d as Tab};
