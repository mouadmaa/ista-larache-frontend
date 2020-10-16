import styled from 'styled-components'

export const RegisterSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15rem 5vw;

  > div :first-of-type {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    h3 {
      margin-right: 1rem;
    }

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
    }
  }

  > div :last-of-type {
    width: 100%;
  }

  @media screen and (max-width: 37.5em) {
    margin: 15rem 2vw;
  }
`
