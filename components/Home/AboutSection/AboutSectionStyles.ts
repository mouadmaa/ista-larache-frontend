import styled, { css } from 'styled-components'

interface AboutSectionContainerProps {
  inPage: boolean
}

const getAboutSectionContainerStyles = (props: AboutSectionContainerProps) => {
  return props.inPage && aboutSectionContainerStyles
}

export const AboutSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10rem 5vw;

  p {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 1.4rem;
    text-align: center;
    max-width: 80vw;
    margin: 5rem 0 2rem;
  }

  section {
    margin-top: 1rem;
    height: 20rem;
    max-width: 70vw;

    @media only screen and (min-width: 90em) {
      height: 22rem;
    }

    @media only screen and (max-width: 75em) {
      height: 18rem;
    }

    @media only screen and (max-width: 62.5em) {
      height: 15rem;
    }

    @media only screen and (max-width: 37.5em) {
      height: 10rem;
      max-width: 80vw;
    }
  }

  ${getAboutSectionContainerStyles}
`

const aboutSectionContainerStyles = css`
  a {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
  }
`

export const AboutPageContent = styled.section`
  text-align: left;
  padding: 0 5vw 10rem;
  margin-top: -6rem;

  h3 {
    margin-top: 3rem;
  }

  h4 {
    margin-top: 2rem;
    font-weight: 600;
    text-decoration: underline;
  }
`
