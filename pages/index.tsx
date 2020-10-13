import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import HeaderPrimary from '../layout/HeaderPrimary/HeaderPrimaryComponent'
import AboutSection from '../components/Home/AboutSection/AboutSectionComponent'
import FormationSection from '../components/Home/FormationSection/FormationSectionComponent'
import ActivitySection, { ActivitiesQueryVars } from '../components/Home/ActivitySection/ActivitySectionComponent'
import ContatcSection from '../components/Home/ContactSection/ContactSectionComponent'
import { initializeApollo } from '../apollo/apolloClient'
import { ActivitiesDocument, FormationsDocument } from '../generated/graphql'

const Home: FC = () => {
  return (
    <Fragment>
      <HeaderPrimary />
      <AboutSection />
      <FormationSection />
      <ActivitySection />
      <ContatcSection />
    </Fragment>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: FormationsDocument,
  })

  await apolloClient.query({
    query: ActivitiesDocument,
    variables: ActivitiesQueryVars,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 3000,
  }
}
