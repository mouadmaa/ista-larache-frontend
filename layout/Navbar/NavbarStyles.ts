import styled, { css } from 'styled-components'

interface NavbarContainerProps {
  showNavbarBackground: boolean
}

const getNavbarContainerStyles = (navbarContainerProps: NavbarContainerProps) => {
  return navbarContainerProps.showNavbarBackground && showNavbarBackground
}

export const NavbarContainer = styled.nav`
  ${getNavbarContainerStyles}

  width: 100%;
  height: 12vh;
  background: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 5%;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.5s;
`

const showNavbarBackground = css`
  width: 100% !important;
  height: 8vh !important;
  background-color: rgba(41, 128, 185, 0.95) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);

  ul {
    top: 8vh !important;
  }
`

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.primary_white};
    font-family: 'OpenSans Bold';
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    text-decoration: none;
    padding: 0 0.5rem;
    transition: 0.3s;

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      transform: rotate(3deg) scale(1.1);
    }
  }
`

interface NavbarListProps {
  active: boolean
}

const getNavbarListStyles = (navbatListProps: NavbarListProps) => {
  return navbatListProps.active && navbarListActive
}

export const NavbarList = styled.ul`
  ${getNavbarListStyles}

  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  top: 10vh !important;

  @media screen and (max-width: 50em) {
    width: 75%;
    height: 92vh;
    background-color: rgba(41, 128, 185, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8vh;
    right: 0;
    flex-direction: column;
    justify-content: space-around;
    padding: 10% 0 30%;
    transform: translateX(200%);
    transition: all 0.8s ease-in;
  }
`

const navbarListActive = css`
  transform: translateX(0%) !important;
`

interface NavbarItemProps {
  active: boolean
}

const getNavbarItemStyles = (navbarItem: NavbarItemProps) => {
  return navbarItem.active && navbarItemActive
}

export const NavbarItem = styled.li`
  ${getNavbarItemStyles}

  margin: 0.2rem;
  position: relative;
`
const navbarItemActive = css`
  width: 100%;
  left: 0;
`

export const NavbarLink = styled.a`
  color: ${({ theme }) => theme.colors.primary_white};
  position: relative;
  display: inline-block;
  padding: 0.2rem 0.6rem;
  font-family: 'OpenSans Bold';
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s;

  ::after {
    content: '';
    position: absolute;
    left: auto;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0.16rem;
    background-color: ${({ theme }) => theme.colors.primary_white};
    transition: 0.3s;
  }

  :hover::after {
    width: 100%;
    left: 0;
  }
`

interface NavbarBurgerProps {
  retateMenu: boolean
}

const getNavbarBurgerStyles = (navbarBurgerProps: NavbarBurgerProps) => {
  return navbarBurgerProps.retateMenu && navbarBurgerLine
}

export const NavbarBurger = styled.div`
  ${getNavbarBurgerStyles}

  display: none;
  justify-self: end;
  align-self: center;
  cursor: pointer;
  margin: 0.2rem;
  padding: 1.5rem;
  border-radius: 50%;
  transition: 0.5s;

  @media screen and (max-width: 50em) {
    display: block;
  }

  div {
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary_white};
    margin: 3px;
    transition: all 0.4s ease;
  }
`

const navbarBurgerLine = css`
  div:first-of-type {
    transform: rotate(-45deg) translate(-3px, 4px);
  }

  div:nth-of-type(2) {
    opacity: 0;
  }

  div:last-of-type {
    transform: rotate(45deg) translate(-3px,-4px);
  }
`
