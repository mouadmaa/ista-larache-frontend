import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding: 1rem 2.6rem;
  border-radius: 10rem;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  box-shadow: ${({ theme }) => theme.shadow.white};
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.primaryWhite};
  transition: 0.3s;

  :hover {
    transform: translateY(-1px);
    background-color: ${({ theme }) => theme.color.tertiary};
    box-shadow: ${({ theme }) => theme.shadow.black};
  }

  :active, :focus {
    outline: none;
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadow.black};
  }
`


