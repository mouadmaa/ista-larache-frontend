import { FC, Fragment } from 'react'

import HeaderSecondary from 'layout/HeaderSecondary/HeaderSecondaryComponent'
import ContatcSection from '@/components/Home/ContactSection/ContactSectionComponent'

const Contact: FC = () => {
  return (
    <Fragment>
      <HeaderSecondary
        textMain="les formations assurées à l'établissement"
        textSub="pour plus d'informations sur ces formations cliquez sur un."
      />
      <ContatcSection inPage />
    </Fragment>
  )
}

export default Contact
