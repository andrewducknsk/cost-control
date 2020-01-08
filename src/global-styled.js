import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
 * {
    box-sizing: border-box;
 }

 body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
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
