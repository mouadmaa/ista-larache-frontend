import styled from 'styled-components'

export const HeadingSecondaryContainer = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 2.4rem;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  margin-bottom: 3rem;
  background-image: linear-gradient(to right, ${({ theme }) => theme.color.secondary}, ${({ theme }) => theme.color.tertiary});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  text-shadow: ${(({ theme }) => theme.shadow.white)};

  @media screen and (max-width: 37.5em) {
    font-size: 2rem;
  }
`
