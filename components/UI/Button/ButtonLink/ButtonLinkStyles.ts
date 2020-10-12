import styled from 'styled-components'

export const ButtonLinkContainer = styled.a`
  font-family: 'OpenSans Regular';
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #f2f8f8;
    box-shadow: ${({ theme }) => theme.shadow.white};
  }
`
