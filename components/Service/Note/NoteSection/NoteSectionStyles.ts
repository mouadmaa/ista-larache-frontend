import styled, { css } from 'styled-components'

interface NoteSectionContainerProps {
  tableVisible: boolean
}

const getNoteSectionContainerStyles = (props: NoteSectionContainerProps) => {
  return props.tableVisible && noteSectionContainerStyles
}

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

  > div :last-child {
    img {
      width: 34rem;
      height: 24rem;
      transition: 0.3s;

      @media screen and (max-width: 62.5em) {
        width: 26rem;
        height: 20rem;
      }
    }

    @media screen and (max-width: 37.5em) {
      display: none;
    }
  }

  > div :first-of-type {
    width: 100%;

    h3 {
      font-size: 1.2rem;
    }

    transform: rotateX('180dg');
    @media screen and (max-width: 37.5em) {
    }
  }

  > button {
    font-size: 1rem;
    padding: 0.6rem 3rem;
  }

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
    margin: 8rem 2vw;
  }

  ${getNoteSectionContainerStyles}
`

const noteSectionContainerStyles = css`
  grid-template-columns: 1fr;
`
