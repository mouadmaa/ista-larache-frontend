import styled, { css } from 'styled-components'

interface NavigationContainerProps {
  showNavigationBackground: boolean
}

const getNavigationContainerStyles = (navbarContainerProps: NavigationContainerProps) => {
  return navbarContainerProps.showNavigationBackground && showNavigationBackground
}

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 10vh;
  background: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 5%;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.5s;

  ${getNavigationContainerStyles}
`

const showNavigationBackground = css`
  width: 100%;
  height: 6vh;
  background-color: rgba(41, 128, 185, 0.95);
  box-shadow: ${(({ theme }) => theme.shadow.white)};

  ul {
    top: 6vh;
  }
`

export const NavigationLogo = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.color.primaryWhite};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    text-decoration: none;
    padding: 0 0.5rem;
    transition: 0.3s;

    :hover {
      box-shadow: ${(({ theme }) => theme.shadow.black)};
      transform: rotate(3deg) scale(1.1);
    }
  }
`

interface NavigationListProps {
  active: boolean
}

const getNavigationListStyles = (navbatListProps: NavigationListProps) => {
  return navbatListProps.active && navbarListActive
}

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  top: 10vh;
  margin-bottom: 0;

  @media screen and (max-width: 50em) {
    width: 75%;
    height: 94vh;
    background-color: rgba(41, 128, 185, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10vh;
    right: 0;
    flex-direction: column;
    justify-content: space-around;
    padding: 10% 0 30%;
    transform: translateX(200%);
    transition: all 0.5s ease-in;
  }

  ${getNavigationListStyles}
`

const navbarListActive = css`
  transform: translateX(0%) !important;
`

interface NavigationItemProps {
  active: boolean
}

const getNavigationItemStyles = (navbarItem: NavigationItemProps) => {
  return navbarItem.active && navbarItemActive
}

export const NavigationItem = styled.li`
  ${getNavigationItemStyles}

  margin: 0.2rem;
  position: relative;
`
const navbarItemActive = css`
  a::after {
    width: 100%;
    left: 0;
  }
`

export const NavigationLink = styled.a`
  color: ${({ theme }) => theme.color.primaryWhite} !important;
  position: relative;
  display: inline-block;
  padding: 0.1rem 0.6rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
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
    height: 0.14rem;
    background-color: ${({ theme }) => theme.color.primaryWhite};
    transition: 0.3s;
  }

  :hover::after {
    width: 100%;
    left: 0;
  }
`

interface NavigationBurgerProps {
  retateMenu: boolean
}

const getNavigationBurgerStyles = (navbarBurgerProps: NavigationBurgerProps) => {
  return navbarBurgerProps.retateMenu && navbarBurgerLine
}

export const NavigationBurger = styled.div`
  ${getNavigationBurgerStyles}

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
    background-color: ${({ theme }) => theme.color.primaryWhite};
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
