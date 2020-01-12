import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
 * {
    box-sizing: border-box;
 }

  html {
    overflow-y: scroll;
  }

 body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
 }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
  margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyled;
