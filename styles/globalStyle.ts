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

  body {
    color: ${({ theme }) => theme.color.primaryGray};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    line-height: 1.7;
  }

  ::selection {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }: any) => theme.color.primaryWhite};
  }

  /* NProgress */
  #nprogress > div.bar {
    background-color: ${({ theme }: any) => theme.color.primaryWhite};;
  }

  #nprogress > div.spinner > div {
    border-top-color: ${({ theme }: any) => theme.color.primaryWhite};;
    border-left-color: ${({ theme }: any) => theme.color.primaryWhite};;
  }
`
export default GlobalStyle
