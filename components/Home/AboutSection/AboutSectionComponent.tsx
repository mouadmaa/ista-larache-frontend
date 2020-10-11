import { FC } from 'react'

import { AboutSectionContainer } from './AboutSectionStyles'
import HeaderSecondary from '../../UI/Header/HeaderSecondary/HeaderSecondaryComponent'
import ButtonLink from '../../UI/Button/ButtonLink/ButtonLinkComponent'
import ImagesSetion from '../ImagesSetion/ImagesSetionComponent'

const AboutSection: FC = () => (
  <AboutSectionContainer>
    <HeaderSecondary text='À Propos De ISTA Larache' />

    <ImagesSetion
      img1='images/ista-1.png'
      img2='images/ista-2.png'
      img3='images/ista-3.png'
    />

    <p>
      ISTA Larache ou Office de la Formation Professionnelle et de la
      Promotion du Travail Larache est un organisme public marocain qui
      propose des formations courtes et pratiques permettant aux jeunes de
      mieux s’intégrer dans le marché du travail.
    </p>

    <ButtonLink href='/about' as='/about' text='Afficher plus de détails' />
  </AboutSectionContainer>
)

export default AboutSection
