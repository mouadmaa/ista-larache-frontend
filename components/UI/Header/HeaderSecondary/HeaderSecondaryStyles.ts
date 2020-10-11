import styled from 'styled-components'

export const HeaderSecondaryContainer = styled.h2`
  font-family: 'OpenSans Bold';
  font-size: 2.4rem;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 3rem;
  background-image: linear-gradient(to right, #2c8ac7, #2676ab);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  text-shadow: ${(({ theme }) => theme.shadow.white)};

  @media screen and (max-width: 37.5em) {
    font-size: 2rem;
  }
`
