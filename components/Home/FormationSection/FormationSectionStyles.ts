import styled from 'styled-components'

export const FormationSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5vw 10rem;

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
`

export const FormationSectionContent = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 520px);
  justify-items: center;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`
