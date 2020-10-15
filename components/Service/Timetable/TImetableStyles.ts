import styled from 'styled-components'

export const TimetableSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15rem 5vw;

  > div :first-of-type {
    width: 80%;
    display: flex;
    align-items: center;

    > h3 {
      flex: 0 3 auto;
      margin: 0 2rem 0 0;
      text-align: center;

      @media only screen and (max-width: 75em) {
        margin: 0;
        flex: 0 1 auto;
      }
    }

    > span {
      flex: 1 1 auto;

      @media only screen and (max-width: 75em) {
        width: 60%;
        flex: 0 1 auto;
        margin-top: 2rem;
      }

      @media only screen and (max-width: 65.5em) {
        width: 80%;
      }
    }

    @media only screen and (max-width: 75em) {
      width: 100%;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 37.5em) {
    margin: 15rem 2vw;
  }
`
