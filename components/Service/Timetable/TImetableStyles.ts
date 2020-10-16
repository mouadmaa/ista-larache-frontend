import styled from 'styled-components'

export const TimetableSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15rem 5vw;

  @media screen and (max-width: 37.5em) {
    margin: 15rem 2vw;
  }
`

export const TimetableImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  min-height: 10rem;

  img {
    width: 100%;
  }

  h3 {
    font-size: 1.8rem;
  }
`
