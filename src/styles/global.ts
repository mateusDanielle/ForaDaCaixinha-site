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

  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-Regular.otf') format('otf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-Italic.otf') format('otf');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-Bold.otf') format('otf');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-BoldItalic.otf') format('otf');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-Thin.otf') format('otf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-Light.otf') format('otf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-ThinItalic.otf') format('otf');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-LightItalic.otf') format('otf');
    font-weight: 300;
    font-style: italic;
  }

  body, input, button {
    font-family: 'Poppins', serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
    text-align: center;
  }

  button {
    cursor: pointer;
  }
`;
