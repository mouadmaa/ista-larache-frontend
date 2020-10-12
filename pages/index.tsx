import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import HeaderPrimary from '../layout/HeaderPrimary/HeaderPrimaryComponent'
import AboutSection from '../components/Home/AboutSection/AboutSectionComponent'
import FormationSection from '../components/Home/FormationSection/FormationSectionComponent'
import { initializeApollo } from '../apollo/apolloClient'
import { FormationsDocument } from '../generated/graphql'

const Home: FC = () => {
  return (
    <Fragment>
      <HeaderPrimary />
      <AboutSection />
      <FormationSection />
    </Fragment>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: FormationsDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 86400,
  }
}
