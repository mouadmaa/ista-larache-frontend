import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import HeaderSecondary from '@/layout/HeaderSecondary/HeaderSecondaryComponent'
import ActivitySection, { ActivitiesPageQueryVars } from '@/components/Home/ActivitySection/ActivitySectionComponent'
import { initializeApollo } from '../../apollo/apolloClient'
import { ActivitiesDocument } from '@/generated/graphql'

const Activities: FC = () => {
  return (
    <Fragment>
      <HeaderSecondary
        title="Activités"
        textMain="Les activités à l'ista larache"
        textSub="Découvrez les activités à venir et passés à ista larache"
      />
      <ActivitySection inPage />
    </Fragment>
  )
}

export default Activities

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ActivitiesDocument,
    variables: ActivitiesPageQueryVars,
  })

  return {
    revalidate: 3000,
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
