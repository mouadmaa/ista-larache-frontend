import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url('/fonts/OpenSans-Light.ttf');
  }

  @font-face {
    font-family: 'OpenSans Regular';
    src: url('/fonts/OpenSans-Regular.ttf');
  }

  @font-face {
    font-family: 'OpenSans Bold';
    src: url('/fonts/OpenSans-SemiBold.ttf');
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  @media only screen and (min-width: 90em) {
    html {
      font-size: 75%;
    }
  }

  @media only screen and (max-width: 75em) {
    html {
      font-size: 56.25%;
    }
  }

  @media only screen and (max-width: 62.5em) {
    html {
      font-size: 50%;
    }
  }

  @media only screen and (max-width: 37.5em) {
    html {
      font-size: 45%;
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }: any) => theme.colors.primary_white};
  }

  body {
    font-family: "OpenSans", "Segoe UI", Arial, sans-serif;
    line-height: 1.7;
    color: ${({ theme }: any) => theme.colors.primary_gray};
    background-color: ${({ theme }: any) => theme.colors.secondary_white};

    min-height: 300vh;
  }
`
export default GlobalStyle