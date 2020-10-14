import styled, { css } from 'styled-components'

interface FormationSectionContainerProps {
  inPage: boolean
}

const getFormationSectionContainerStyles = (formationSectionContainerProps: FormationSectionContainerProps) => {
  return formationSectionContainerProps.inPage && formationSectionContainerStyles
}

export const FormationSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 5vw 10rem;

  ${getFormationSectionContainerStyles}

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
      min-height: 10rem;
      max-width: 80vw;
    }
  }

  @media only screen and (max-width: 37.5em) {
    padding-bottom: 5rem;
  }
`

const formationSectionContainerStyles = css`
  padding: 10rem 5vw 14rem;

  > div {
    margin: 2rem 0 8rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 8rem 5vw;
  }
`

export const FormationSectionContent = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(3, minmax(200px, 520px));
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-gap: 3rem;
  margin: 2rem 0 5rem;

  @media only screen and (max-width: 62.5em) {
    grid-template-columns: repeat(2, minmax(200px, 520px));
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: minmax(200px, 520px);
    width: 100%;
  }
`
