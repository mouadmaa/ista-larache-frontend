import styled from 'styled-components'

export const NoteSectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  margin: 6rem 5vw;

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 5rem;

    @media screen and (max-width: 62.5em) {
      font-size: 2rem;
    }
  }

  div {
    img {
      width: 34rem;
      height: 24rem;
      transition: 0.3s;

      @media screen and (max-width: 62.5em) {
        height: 20rem;
      }
    }

    @media screen and (max-width: 37.5em) {
      display: none;
    }
  }

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
    margin: 8rem 2vw;
  }
`
