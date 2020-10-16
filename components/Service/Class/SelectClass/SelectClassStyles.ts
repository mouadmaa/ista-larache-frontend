import styled from 'styled-components'

export const SelectClassContainer = styled.div`
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

  > div {
    flex: 1 1 auto;

    @media only screen and (max-width: 75em) {
      width: 60%;
      flex: 0 1 auto;
      margin-top: 2rem;
    }

    @media only screen and (max-width: 65.5em) {
      width: 90%;
    }
  }

  @media only screen and (max-width: 75em) {
    width: 100%;
    flex-direction: column;
  }
`
