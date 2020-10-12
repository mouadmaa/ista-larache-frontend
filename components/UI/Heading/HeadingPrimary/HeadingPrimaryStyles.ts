import styled from 'styled-components'

export const HeadingPrimaryContainer = styled.h1`
  color: ${({ theme }) => theme.color.primaryWhite};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backface-visibility: hidden;
  margin-bottom: 5rem;

  span:first-of-type {
    display: block;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 1rem;
    letter-spacing: 1rem;
    line-height: 7rem;

    @media screen and (max-width: 37.5em) {
      margin-bottom: 4rem;
    }
  }

  span:last-of-type {
    display: block;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 600;
    letter-spacing: 0.2rem;
  }
`
