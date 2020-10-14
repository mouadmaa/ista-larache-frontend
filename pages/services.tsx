import { FC, Fragment } from 'react'
import Head from 'next/head'

import HeaderSecondary from '../layout/HeaderSecondary/HeaderSecondaryComponent'
import NoteSection from '../components/Service/Note/NoteSection/NoteSectionComponent'

const Services: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Services | ISTA LARACHE</title>
      </Head>
      <HeaderSecondary
        textMain="services"
        textSub="ista larache vous offre un service de obtenir les notes et l'emploi du temps du stagiaire et l'inscription pour les stagiaires"
      />
      <NoteSection />
    </Fragment>
  )
}

export default Services
