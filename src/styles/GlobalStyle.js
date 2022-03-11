import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;

    position: relative;
    font-size: 62.10%;
  }

  body {
    font-family: 'Montserrat', sans-serif;

    background-color: #0D1323;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
