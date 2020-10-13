import { FC } from 'react'
import Link from 'next/link'

import {
  FooterAboutContainer, FooterContainer, FooterNavigationContainer, FooterSocialList,
  FooterAdressContainer, FooterAdressContent, FooterCopyrightContainer
} from './FooterStyles'
import HeadingTertiary from '../../components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterAboutContainer>
        <div>
          <img src='images/logo.png' alt="logo ista" />
          <Link href='/' as='/'><a>ISTA LARACHE</a></Link>
        </div>

        <p>
          ISTA LARACHE est un organisme public marocain qui propose des formations courtes
          et pratiques permettant aux jeunes de mieux s’intégrer dans le marché du travail.
        </p>

        <FooterSocialList>
          <li>
            <Link href='/' as='/'>
              <a><img className="footer__social-img" src='icons/facebook.png' alt="icon facebook" /></a>
            </Link>
          </li>
          <li>
            <Link href='/' as='/'>
              <a><img className="footer__social-img" src='icons/twitter.png' alt="icon twitter" /></a>
            </Link>
          </li>
          <li>
            <Link href='/' as='/'>
              <a><img className="footer__social-img" src='icons/google.png' alt="icon google plus" /></a>
            </Link>
          </li>
          <li>
            <Link href='/' as='/'>
              <a><img className="footer__social-img" src='icons/instagram.png' alt="icon instagram" /></a>
            </Link>
          </li>
        </FooterSocialList>
      </FooterAboutContainer>

      <FooterNavigationContainer>
        <div><HeadingTertiary text='Menu' /></div>

        <ul className="footer__list">
          <li>
            <Link href="/services" as="/services">
              <a>Services</a>
            </Link>
          </li>

          <li>
            <Link href="/formations" as="/formations">
              <a>Formations</a>
            </Link>
          </li>

          <li>
            <Link href="/activities" as="/activites">
              <a>Activités</a>
            </Link>
          </li>

          <li>
            <Link href="/about" as="/about">
              <a>Propos</a>
            </Link>
          </li>

          <li>
            <Link href="/contact" as="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </FooterNavigationContainer>

      <FooterAdressContainer>
        <div><HeadingTertiary text='Adresse' /></div>

        <div>
          <FooterAdressContent>
            <img src='icons/location.ico' alt="location icon" />
            <p>Rte de Rabat. Avenue Omar Ibn Abdelaziz 92000 Larache</p>
          </FooterAdressContent>

          <FooterAdressContent>
            <img src='icons/email.ico' alt="email icon" />
            <p>istalarache2020@gmail.com</p>
          </FooterAdressContent>

          <FooterAdressContent>
            <img src='icons/phone.ico' alt="phone icon" />
            <p>+212539912646</p>
          </FooterAdressContent>
        </div>
      </FooterAdressContainer>

      <FooterCopyrightContainer>
        <p>
          Copyright © {new Date().getFullYear()}&nbsp;
          All Rights Reserved. Created By&nbsp;
        </p>
        <Link href='/' as='/'>
          <a>Mouad Maaroufi</a>
        </Link>
        &nbsp;&&nbsp;
        <Link href='/' as='/'>
          <a>Achraf Hlimi</a>
        </Link>
      </FooterCopyrightContainer>
    </FooterContainer>
  )
}

export default Footer
