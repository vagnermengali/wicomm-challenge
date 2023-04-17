import { createGlobalStyle } from "styled-components";

import roboto from "@/assets/fonts/roboto.ttf"
import barlow from "@/assets/fonts/barlow.otf"

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: local('Roboto'), url(${roboto}) format('truetype');
}

@font-face {
  font-family: 'Barlow';
  src: local('Barlow'), url(${barlow}) format('truetype');
}

:root {
    --brand1: #FF9601;
    --brand2: #FFC470;
    --brand3: #0B0B0B;
    --brand4: #1C1C1E;
    --brand5: #2C2C2E;
    --brand6: #3A3A3C;
    --brand7: #9A9A9A;
    --brand8: #CACACA;
    --brand9: #F1F1F1;
    --brand10: #FFFFFF;
    --brand11: linear-gradient(213.8deg, #9A9A9A -17.86%, #0B0B0B 73%);;
    --brand12: linear-gradient(180deg, #3A3A3C 0%, #0B0B0B 101.48%);
    --brand13: #2c2c2ef2;
    --roboto: "Roboto";
    --barlow: "Barlow";

  html, body, #root {
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
  }  
  a {
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
}
  `;

export const ResetCSS = createGlobalStyle`
  html,main, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: var(--barlow);
    vertical-align: baseline;
    scroll-behavior: smooth;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;