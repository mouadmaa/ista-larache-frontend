import styled from 'styled-components'

export const AboutSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10rem 5vw;

  p {
    font-family: 'OpenSans Bold';
    font-size: 1.4rem;
    text-align: center;
    max-width: 80vw;
    margin: 5rem 0 2rem;
  }

  section {
    margin-top: 1rem;
    height: 18rem;
    max-width: 60vw;

    @media only screen and (min-width: 90em) {
      height: 18rem;
    }

    @media only screen and (max-width: 75em) {
      height: 15rem;
    }

    @media only screen and (max-width: 62.5em) {
      height: 12rem;
    }

    @media only screen and (max-width: 37.5em) {
      height: 10rem;
      max-width: 80vw;
    }
  }
`
