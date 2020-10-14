import styled from 'styled-components'
import { Form } from 'antd'

export const ContactFormContainer = styled(Form)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  input, textarea {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryGray};
    background-color: transparent;
    border-radius: 0.3rem;

    :hover, :focus, :active {
      border-bottom: 1px solid ${({ theme }) => theme.color.secondaryGray};
    }
  }

  > div {
    width: 100%;
    height: 100%;
    display: block;

    > div :nth-of-type(1) {
      padding-bottom: 0.2rem;
    }
  }

  > div :nth-of-type(1) {
    justify-self: start;
    width: 95%;

    @media screen and (max-width: 37.5em) {
      width: 100%;
    }
  }

  > div :nth-of-type(3), > div :nth-of-type(4) {
    grid-column: 1 / -1;
  }

  button {
    grid-column: 1 / -1;
    margin-top: -1rem;
    font-size: 1rem;

    @media screen and (max-width: 37.5em) {
      font-size: 1.2rem;
      margin-top: 0;
    }
  }
`
