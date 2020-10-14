import { FC } from 'react'

import { ButtonLinkContainer } from '@/components/UI/Button/ButtonLink/ButtonLinkStyles'
import { AboutSectionContainer } from './AboutSectionStyles'
import HeadingSecondary from '../../UI/Heading/HeadingScondary/HeadingScondaryComponent'
import ButtonLink from '../../UI/Button/ButtonLink/ButtonLinkComponent'
import ImagesSetion from '../ImagesSetion/ImagesSetionComponent'

interface AboutSectionProps {
  inPage?: boolean
}

const AboutSection: FC<AboutSectionProps> = props => {
  const { inPage = false } = props

  const headingText = inPage
    ? 'institut spécialisé de technologie appliquée larache'
    : 'à propos de ista larache'

  const buttonLink = inPage
    ? (
      <ButtonLinkContainer target='_blanck'
        href='https://inscription.ma/inscription-ofppt-ista-ita-maroc/'
      >
        cliquez ici pour inscrire
      </ButtonLinkContainer>
    ) : (
      <ButtonLink
        href='/about'
        as='/about'
        text='Afficher plus de détails'
      />
    )

  return (
    <AboutSectionContainer
      inPage={inPage}
    >

      <HeadingSecondary
        text={headingText}
      />

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

      {buttonLink}

    </AboutSectionContainer>
  )
}

export default AboutSection
