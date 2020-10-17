import styled from 'styled-components'

export const ActivityContentContainer = styled.section`
  margin: 6rem auto;
  padding: 0 5vw;
  width: 100%;
  max-width: 120rem;
  min-height: 60vh;

  img {
    width: 100%;
  }
`

export const ActivityContentFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;

  a {
    text-align: center;
    width: 100%;
    display: inline-block;
  }

  img {
    margin-bottom: 3rem;
    width: 100%;
    border-radius: 0.8rem;
    box-shadow: ${({ theme }) => theme.shadow.white};
  }
`
