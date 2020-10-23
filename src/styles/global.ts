import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #47c16e;
    color: #000;
    -webkit-foot-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', serif;
    font-weight: bold;
    text-align: center;
  }

  button {
    cursor: pointer;
  }
`;
