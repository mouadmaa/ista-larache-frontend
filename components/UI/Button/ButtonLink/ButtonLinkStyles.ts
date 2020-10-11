import styled from 'styled-components'

export const ButtonLinkContainer = styled.a`
  font-family: 'OpenSans Regular';
  font-size: 1.4rem;
  color: #2980b9;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #2980b9;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #2980b9;
    color: #f2f8f8;
    box-shadow: ${({ theme }) => theme.shadow.black};
  }
`
