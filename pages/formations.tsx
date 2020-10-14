import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { initializeApollo } from '../apollo/apolloClient'
import { FormationsDocument } from '../generated/graphql'
import HeaderSecondary from '../layout/HeaderSecondary/HeaderSecondaryComponent'
import FormationSection from '../components/Home/FormationSection/FormationSectionComponent'

const Formations: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Formations | ISTA LARACHE</title>
      </Head>
      <HeaderSecondary
        textMain="les formations assurées à l'établissement"
        textSub="pour plus d'informations sur ces formations cliquez sur un."
      />
      <FormationSection inPage />
    </Fragment>
  )
}

export default Formations

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: FormationsDocument,
  })

  return {
    revalidate: 3000,
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
