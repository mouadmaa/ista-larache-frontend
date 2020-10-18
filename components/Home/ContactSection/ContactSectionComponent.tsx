import { FC } from 'react'

import {
  ContactSectionAdress, ContactSectionAdressContent, ContactSectionContainer,
  ContactSectionContent, ContactSectionMapContainer
} from './ContactSectionStyles'
import HeadingSecondary from '../../UI/Heading/HeadingScondary/HeadingScondaryComponent'
import ContactForm from '../ContactForm/ContactFormComponent'

interface ContatcSectionProps {
  inPage?: boolean
}

const ContatcSection: FC<ContatcSectionProps> = props => {
  const { inPage = false } = props

  return (
    <ContactSectionContainer>
      <HeadingSecondary text='Nous Contacter' />

      <ContactSectionAdress>
        <ContactSectionAdressContent>
          <img src='icons/location.ico' alt="location icon" />
          <p>Rte de Rabat. Avenue Omar Ibn Abdelaziz 92000 Larache</p>
        </ContactSectionAdressContent>

        <ContactSectionAdressContent>
          <img src='icons/email.ico' alt="email icon" />
          <p>istalarache2020@gmail.com</p>
        </ContactSectionAdressContent>

        <ContactSectionAdressContent>
          <img src='icons/phone.ico' alt="phone icon" />
          <p>+212539912646</p>
        </ContactSectionAdressContent>
      </ContactSectionAdress>

      <ContactSectionContent inPage={inPage}>
        <ContactSectionMapContainer>
          <iframe
            title='ista-larache-map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.948233274154!2d-6.149088084577449!3d35.1828427647502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0bc92e87c2d683%3A0x7bc3b3af704071c1!2sInstitut%20Sp%C3%A9cialis%C3%A9%20de%20Technologie%20Appliqu%C3%A9e!5e0!3m2!1sfr!2sma!4v1581380559147!5m2!1sfr!2sma"
            frameBorder="0"
            allowFullScreen
          />
        </ContactSectionMapContainer>
        <ContactForm />
      </ContactSectionContent>
    </ContactSectionContainer>
  )
}

export default ContatcSection
