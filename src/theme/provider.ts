import { createGlobalStyle } from "styled-components";
import { theme } from ".";
import MQ from "./media-query";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after{
      -ms-box-sizing:border-box;
      -moz-box-sizing:border-box;
      -webkit-box-sizing:border-box;
      box-sizing:border-box;
  }

  * {
    font-family: 'Poppins', sans-serif;
    &::-webkit-scrollbar {
      background: transparent;
      width: 0.5em;
    }
    &::-webkit-scrollbar-thumb {
      background: ${() => theme.color.PRIMARY[900]};
      border-radius: 0.25em;
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
    font-family: Poppins, sans-serif;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  
    &::-webkit-scrollbar {
      background: transparent;
      width: 0.5em;
    }
    &::-webkit-scrollbar-thumb {
      background: ${() => theme.color.PRIMARY[900]};
      border-radius: 0.25em;
    }
  }

  html{
    @media ${MQ.xs} {
      font-size: 16px;
    }
    @media ${MQ.sm} {
      font-size: 16px;
    }
    @media ${MQ.md} {
      font-size: 20px;
    }
  }

  pre span {
    font-family: monospace;
  }


  b {
    font-weight: 500;
  }

  body, html{
      min-height: 100vh;
      width: 100%;
      height: auto;
  }

  #__next{
    min-height: 100vh;
  }

  body{
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    color: #4a4a4a;
    font-weight:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{
    text-decoration: none;
  }

  figure{
    margin:0px;
  }

  input, textarea, select, button {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
