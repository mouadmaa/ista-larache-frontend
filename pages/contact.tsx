import { FC, Fragment } from 'react'

import HeaderSecondary from '../layout/HeaderSecondary/HeaderSecondaryComponent'
import ContatcSection from '@/components/Home/ContactSection/ContactSectionComponent'

const Contact: FC = () => {
  return (
    <Fragment>
      <HeaderSecondary
        title="Contact"
        textMain="nous contacter"
        textSub="pour nous contacter, remplissez les champs ci-dessous"
      />
      <ContatcSection inPage />
    </Fragment>
  )
}

export default Contact
