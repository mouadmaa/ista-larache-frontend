import styled from 'styled-components'

export const NoteFormContainer = styled.div`
  max-width: 40rem;

  h3 {
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.1rem;
    margin-bottom: 2.5rem;
  }

  button {
    width: 100%;
    font-size: 1rem;
    padding: 0.6rem;
  }

  input {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryGray};
    background-color: transparent;
    border-radius: 0.3rem;

    :hover, :focus, :active {
      border-bottom: 1px solid ${({ theme }) => theme.color.secondaryGray};
    }
  }
`
