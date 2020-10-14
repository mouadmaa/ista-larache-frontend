import styled from 'styled-components'

export const HeaderPrimaryContainer = styled.header`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to left, rgba(38, 118, 171, 0.95), rgba(44, 138, 199, 0.85)), url(images/ista-3.png);
  background-size: cover;
  background-position: center bottom;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);

  @media screen and (max-width: 75em) {
    background-position-y: top;
  }
`

export const HeaderPrimaryTextContainer = styled.div`
  text-align: center;

  h1 {
    margin: 8rem 0 4rem;
  }

  @media screen and (max-width: 37.5em) {
    h1 > span:first-of-type {
      display: none;
    }

    h1 > span:last-of-type {
      font-family: ${({ theme }) => theme.fontFamily};
      font-weight: 600;
      font-size: 1.8rem;
      margin: 0 4rem;
    }
  }
`

export const HeaderPrimarySectionService = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 620px));
  justify-content: space-evenly;
  grid-gap: 4rem 6rem;
  padding: 0 5vw;

  @media screen and (max-width: 37.5em) {
    grid-template-columns: minmax(200px, 460px);
    padding: 0 6vw;
    grid-gap: 2rem;
  }

  > :first-child img {
    max-height: 80%;
    height: 8rem;
  }

  > :last-child {
    grid-column: 1 / -1;
    justify-self: center;
    width: 50%;

    @media screen and (max-width: 37.5em) {
      width: 100%;
    }
  }
`

export const HeaderPrimaryServerBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
  grid-column: 1.2rem;
  grid-gap: 2rem;
  background-color: #f3feffdb;
  padding: 1rem 3rem;
  border-radius: 1rem;
  box-shadow: ${(({ theme }) => theme.shadow.white)};
  cursor: pointer;
  transition: 0.4s;

  @media screen and (max-width: 62.5em) {
    grid-template-columns: 1fr;
    padding: 1rem 3rem;
  }

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr 2fr;
  }

  :hover {
    transform: translateY(-0.4rem) scale(1.02);
    box-shadow: ${(({ theme }) => theme.shadow.black)};
  }

  img {
    height: 9rem;

    @media screen and (max-width: 62.5em) {
      height: 7rem;
    }

    @media screen and (max-width: 20em) {
      display: none;
    }
  }

  div {
    h3 {
      letter-spacing: 0.05rem;
    }

    p {
      font-size: 1.25rem;
      text-align: justify;
      margin-bottom: 0;
    }

    @media screen and (max-width: 62.5em) {
      text-align: center;
    }

    @media screen and (max-width: 37.5em) {
      text-align: left;
    }
  }

  @media screen and (max-width: 25em) {
    grid-template-columns: 1fr;
  }
`
