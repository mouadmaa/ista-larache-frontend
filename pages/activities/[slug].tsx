import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import { initializeApollo } from '../../apollo/apolloClient'
import { ActivitiesDocument, ActivityDocument, useActivityQuery } from '@/generated/graphql'
import HeaderSecondary from '@/layout/HeaderSecondary/HeaderSecondaryComponent'
import ActivityCard from '@/components/Activity/ActivityCard/ActivityCardComponent'

const Activity: FC = () => {
  const router = useRouter()
  const slug = router.query.slug as string

  const { data: { activity } } = useActivityQuery({ variables: { slug } })

  return (
    <Fragment>
      <HeaderSecondary
        title="Activités"
        textMain="Les activités à l'ista larache"
        textSub="Découvrez les activités à venir et passés à ista larache"
      />
      <ActivityCard
        activity={activity}
      />
    </Fragment>
  )
}

export default Activity

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data: { activities } } = await apolloClient.query({
    query: ActivitiesDocument,
  })

  return {
    fallback: true,
    paths: activities.map(activity => ({
      params: { slug: activity.slug },
    })),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ActivityDocument,
    variables: { slug: params.slug }
  })

  return {
    revalidate: 3000,
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
