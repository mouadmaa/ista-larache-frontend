import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
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
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }: any) => theme.color.primaryWhite};
  }

  body {
    color: ${({ theme }) => theme.color.primary_gray};
    background-color: ${({ theme }) => theme.color.secondaryWhite};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    line-height: 1.7;
  }
`
export default GlobalStyle
