import styled, { css } from 'styled-components'

export const ContactSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 5vw 12rem;
`

interface ContactSectionContentProps {
  inPage: boolean
}

const getContactSectionContentStyles = (props: ContactSectionContentProps) => {
  return props.inPage && contactSectionContentStyles
}

export const ContactSectionContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 700px));
  justify-content: space-between;
  grid-gap: 6rem 3rem;

  @media screen and (max-width: 75em) {
    grid-template-columns: minmax(200px, 800px);
  }

  ${getContactSectionContentStyles}
`

const contactSectionContentStyles = css`
  display: grid;
  grid-template-columns: minmax(200px, 1000px);
  grid-template-rows: 35rem;
`

export const ContactSectionAdress = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
  margin: 2rem 0 4rem;

  @media screen and (max-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContactSectionAdressContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :first-of-type {
    @media screen and (max-width: 50em) {
      grid-column: 1 / -1;
    }
  }

  :nth-of-type(2), :last-of-type {
    @media screen and (max-width: 37.5em) {
      grid-column: 1 / -1;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.6rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`

export const ContactSectionMapContainer = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  min-height: 25rem;

  @media screen and (max-width: 75em) {
    width: 100%;
    height: 30rem;
  }

  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
`
