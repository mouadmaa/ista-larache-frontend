import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  NavigationBurger, NavigationContainer, NavigationItem, NavigationLink,
  NavigationList, NavigationLogo
} from './NavigationStyles'

const Navigation: FC = () => {
  const [showNavigationBackground, setShowNavigationBackground] = useState(false)
  const [showNavigationSlide, setShowNavigationSlide] = useState(false)

  const { asPath } = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) setShowNavigationBackground(true)
      else setShowNavigationBackground(false)
    })
  }, [])

  return (
    <NavigationContainer showNavigationBackground={showNavigationBackground}>
      <NavigationLogo>
        <Link href='/' passHref>
          <a>ISTA LARACHE</a>
        </Link>
      </NavigationLogo>

      <NavigationList active={showNavigationSlide}>
        <NavigationItem active={asPath.startsWith('/services')}>
          <Link href="/services" passHref>
            <NavigationLink>Services</NavigationLink>
          </Link>
        </NavigationItem>

        <NavigationItem active={asPath.startsWith('/formations')}>
          <Link href="/formations" passHref>
            <NavigationLink>Formations</NavigationLink>
          </Link>
        </NavigationItem>

        <NavigationItem active={asPath.startsWith('/activities')}>
          <Link href="/activities" passHref>
            <NavigationLink>Activités</NavigationLink>
          </Link>
        </NavigationItem>

        <NavigationItem active={asPath.startsWith('/about')}>
          <Link href="/about" passHref>
            <NavigationLink>Propos</NavigationLink>
          </Link>
        </NavigationItem>

        <NavigationItem active={asPath.startsWith('/contact')}>
          <Link href="/contact" passHref>
            <NavigationLink>Contact</NavigationLink>
          </Link>
        </NavigationItem>
      </NavigationList>

      <NavigationBurger
        retateMenu={showNavigationSlide}
        onClick={() => setShowNavigationSlide(!showNavigationSlide)}
      >
        <div /><div /><div />
      </NavigationBurger>
    </NavigationContainer>
  )
}

export default Navigation
