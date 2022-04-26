import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
   margin: 0;
   padding: 0; 
   outline: 0;
   box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${props => props.theme.colors.backgroundGradient};
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3 {
    line-height: 1.1;
  }

  p {
    max-width: 60ch;
  }
`;
