import styled from 'styled-components'

export const ActivitySectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 18rem 5vw;
  height: 100%;
  min-height: 40rem;
  background-color: ${({ theme }) => theme.color.secondaryGray};
  clip-path: polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%);

  h2 {
    margin: 2rem 0 3rem;

    @media screen and (max-width: 37.5em) {
      margin-top: 15rem;
    }
  }

  a {
    margin-top: 3rem;

    @media screen and (max-width: 37.5em) {
      margin-bottom: 15rem;
    }
  }
`
