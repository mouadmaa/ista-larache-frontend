import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  NavbarBurger, NavbarContainer, NavbarItem, NavbarLink,
  NavbarList, NavbarLogo
} from './NavbarStyles'

const Navbar: FC = () => {
  const [showNavbarBackground, setShowNavbarBackground] = useState(false)
  const [showNavbarSlide, setShowNavbarSlide] = useState(false)

  const { asPath } = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) setShowNavbarBackground(true)
      else setShowNavbarBackground(false)
    })
  }, [])

  return (
    <NavbarContainer showNavbarBackground={showNavbarBackground}>
      <NavbarLogo>
        <Link href='/' as='/'>
          <a>ISTA LARACHE</a>
        </Link>
      </NavbarLogo>

      <NavbarList active={showNavbarSlide}>
        <NavbarItem active={asPath.startsWith('/services')}>
          <Link href="/services" as='/services'>
            <NavbarLink>Services</NavbarLink>
          </Link>
        </NavbarItem>

        <NavbarItem active={asPath.startsWith('/formations')}>
          <Link href="/formations" as='/formations'>
            <NavbarLink>Formations</NavbarLink>
          </Link>
        </NavbarItem>

        <NavbarItem active={asPath.startsWith('/activities')}>
          <Link href="/activities" as='/activities'>
            <NavbarLink>Activités</NavbarLink>
          </Link>
        </NavbarItem>

        <NavbarItem active={asPath.startsWith('/about')}>
          <Link href="/about" as='/about'>
            <NavbarLink>Propos</NavbarLink>
          </Link>
        </NavbarItem>

        <NavbarItem active={asPath.startsWith('/contact')}>
          <Link href="/contact" as='/contact'>
            <NavbarLink>Contact</NavbarLink>
          </Link>
        </NavbarItem>
      </NavbarList>

      <NavbarBurger
        retateMenu={showNavbarSlide}
        onClick={() => setShowNavbarSlide(!showNavbarSlide)}
      >
        <div />
        <div />
        <div />
      </NavbarBurger>
    </NavbarContainer>
  )
}

export default Navbar
