import styled from 'styled-components'

export const HeaderSecondaryContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 43vh;
  padding-top: 12vh;
  background-image: linear-gradient(to left, rgba(38, 118, 171, 0.95), rgba(44, 138, 199, 0.85)), url(images/ista-4.png);
  background-size: cover;
  background-position: center top;

  @media screen and (max-width: 75em) {
    height: auto;
    min-height: 35vh;
    grid-template-columns: 1fr;
    background-position-y: top;
  }

  h1 {
    margin-bottom: 0;
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 75em) {
      align-items: center;
      justify-content: center;
      padding: 0 4rem;
    }

    > span:nth-child(1) {
      font-size: 3rem;
      font-weight: 500;
      line-height: 4rem;
      letter-spacing: .3rem;
      margin-bottom: .4em;
      text-align: center;

      @media screen and (max-width: 37.5em) {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.6;
        letter-spacing: 0.2rem;
        margin-bottom: 2rem;
      }
    }

    > span:nth-child(2) {
      text-align: center;

      @media screen and (max-width: 37.5em) {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }
`