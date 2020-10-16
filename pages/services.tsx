import { FC, Fragment } from 'react'
import { GetServerSideProps } from 'next'

import HeaderSecondary from '@/layout/HeaderSecondary/HeaderSecondaryComponent'
import NoteSection from '@/components/Service/Note/NoteSection/NoteSectionComponent'
import TimetableSection from '@/components/Service/Timetable/TimetableSection/TimetableSectionComponent'
import RegisterSection from '@/components/Service/Register/RegisterSection/RegisterSectionComponent'
import { initializeApollo } from '../apollo/apolloClient'
import { FormationsWithClassesDocument } from '@/generated/graphql'

const Services: FC = () => {
  return (
    <Fragment>
      <HeaderSecondary
        title="Services"
        textMain="Services"
        textSub="ista larache vous offre un services de obtenir les notes et l'emploi du temps du stagiaire et l'inscription ou vérifier acceptation"
      />
      <NoteSection />
      <TimetableSection />
      <RegisterSection />
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
