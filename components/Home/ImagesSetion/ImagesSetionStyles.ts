import styled from 'styled-components'

export const ImagesSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  :hover img:not(:hover) {
    transform: scale(0.95);
  }

  img {
    width: 36%;
    position: absolute;
    box-shadow: ${(({ theme }) => theme.shadow.white)};
    border-radius: 0.4rem;
    cursor: pointer;
    filter: saturate(2);
    transition: 0.6s;

    :hover {
      transform: scale(1.05) translateY(-0.2rem);
      box-shadow: ${(({ theme }) => theme.shadow.black)};
      z-index: 2;
    }
  }

  img :nth-last-of-type(1) {
    left: 0;
    top: 2%;
  }

  img :nth-last-of-type(2) {
    z-index: 1;
    left: 32%;
    top: 0;
  }

  img :nth-last-of-type(3) {
    right: 0;
    top: 2%;
  }
`
