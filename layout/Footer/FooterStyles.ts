import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  grid-gap: 4rem;
  font-size: 1.4rem;
  width: 100%;
  height: 1000%;
  background: ${({ theme }) => theme.color.secondaryGray};
  padding: 8rem 5vw 1rem;

  > * {
    padding: 2rem 2rem 0;

    @media screen and (max-width: 37.5em) {
      padding: 0;
    }
  }

  @media screen and (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
  }

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`

export const FooterAboutContainer = styled.div`
  padding: 0;

  @media screen and (max-width: 75em) {
    grid-column: 1 / -1;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    img {
      width: 5rem;
      height: 5rem;
      margin-right: 1.5rem;

      @media screen and (max-width: 62.5em) {
        width: 4rem;
        height: 4rem;
      }
    }

    a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
      color: ${({ theme }) => theme.color.primaryWhite};
      padding: 0 0.5rem;
      transition: 0.4s;

      :hover {
        color: ${({ theme }) => theme.color.primary};
        box-shadow: ${({ theme }) => theme.shadow.white};
        transform: rotate(5deg) scale(1.2);
      }
    }
  }

  > p {
    text-align: center;
    color: ${({ theme }) => theme.color.primaryWhite};
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
`

export const FooterSocialList = styled.ul`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 75em) {
    width: 80%;
    margin: 0 auto;
  }

  > li {
    list-style: none;

    :nth-child(1):hover a {
      background-color: #3b5999;
    }

    :nth-child(2):hover a {
      background-color: #55acee;
    }

    :nth-child(3):hover a {
      background-color: #dd4b39;
    }

    :nth-child(4):hover a {
      background-color: #e4405f;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      border-radius: 50%;
      padding: 0.4rem;
      transition: 0.4s;

      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`

export const FooterNavigationContainer = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.primaryWhite};
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0 2rem;
    letter-spacing: 0.2rem;
    border-top: 1px solid ${({ theme }) => theme.color.primaryGray};

    @media screen and (max-width: 37.5em) {
      padding: 2rem 0 0;
    }

    h3 {
      color: ${({ theme }) => theme.color.primaryWhite};
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 37.5em) {
      flex-direction: row;
    }

    li {
      display: inline-block;
      padding: 0.5rem;
      flex: 1 1 auto;

      a {
        font-size: 1.2rem;
        display: inline-block;
        color: ${({ theme }) => theme.color.primaryWhite};
        background-color: ${({ theme }) => theme.color.secondaryGray};
        text-decoration: none;
        letter-spacing: 0.1rem;
        padding: 0 0.4rem;
        text-transform: uppercase;
        transition: 0.2s;

        :hover, :active {
          color: ${({ theme }) => theme.color.primary};
          box-shadow: ${({ theme }) => theme.shadow.white};
          transform: rotate(3deg) scale(1.1);
        }
      }
    }
  }
`

export const FooterAdressContainer = styled.div`
  > div :first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.primaryWhite};
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0 2rem;
    letter-spacing: 0.2rem;
    border-top: 1px solid ${({ theme }) => theme.color.primaryGray};

    @media screen and (max-width: 37.5em) {
      padding: 2rem 0 0;
    }

    h3 {
      color: ${({ theme }) => theme.color.primaryWhite};
    }
  }
`

export const FooterAdressContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem;

  img {
    width: 2rem;
    height: 2rem;
    margin: 0 1.5rem 1.4rem 0;
  }

  p {
    color: ${({ theme }) => theme.color.primaryWhite};
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
  }
  `

export const FooterCopyrightContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.primaryGray};
  color: ${({ theme }) => theme.color.primaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  padding-bottom: 2rem;

  @media screen and (max-width: 37.5em) {
    flex-direction: column;
    padding-top: 2rem;
  }

  a {
    display: inline-block;
    color: ${({ theme }) => theme.color.primaryWhite};
    background-color: ${({ theme }) => theme.color.secondaryGray};
    text-decoration: none;
    padding: 0 0.5rem;
    text-transform: uppercase;
    transition: 0.2s;

    :hover, :active {
      color: ${({ theme }) => theme.color.primary};
      box-shadow: ${({ theme }) => theme.shadow.white};
      transform: rotate(3deg) scale(1.1);
    }
  }

  p {
    margin-bottom: 0;

    @media screen and (max-width: 37.5em) {
      margin-bottom: 2.5rem;
    }
  }
`
