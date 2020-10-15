import { FC, Fragment } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import HeaderSecondary from '@/layout/HeaderSecondary/HeaderSecondaryComponent'
import NoteSection from '@/components/Service/Note/NoteSection/NoteSectionComponent'
import TimetableSection from '@/components/Service/Timetable/TimetableSectionComponent'
import { initializeApollo } from 'apollo/apolloClient'
import { FormationsWithClassesDocument } from '@/generated/graphql'

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
      <TimetableSection />
    </Fragment>
  )
}

export default Services

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: FormationsWithClassesDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
