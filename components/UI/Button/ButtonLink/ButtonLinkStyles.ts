import styled from 'styled-components'

export const ButtonLinkContainer = styled.a`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.primary};
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primaryWhite};
    box-shadow: ${({ theme }) => theme.shadow.white};
  }
`
