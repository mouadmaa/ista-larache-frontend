import { FC, Fragment } from 'react'
import Head from 'next/head'

import HeaderSecondary from '../layout/HeaderSecondary/HeaderSecondaryComponent'
import ContatcSection from '@/components/Home/ContactSection/ContactSectionComponent'

const Contact: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact | ISTA LARACHE</title>
      </Head>
      <HeaderSecondary
        textMain="nous contacter"
        textSub="pour nous contacter, remplissez les champs ci-dessous"
      />
      <ContatcSection inPage />
    </Fragment>
  )
}

export default Contact
