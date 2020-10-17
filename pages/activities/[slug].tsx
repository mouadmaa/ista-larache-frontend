import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import moment from 'moment'

import { initializeApollo } from '../../apollo/apolloClient'
import { ActivitiesDocument, ActivityDocument, useActivityQuery, ActivitiesQueryResult } from '@/generated/graphql'
import HeaderSecondary from '@/layout/HeaderSecondary/HeaderSecondaryComponent'
import ActivityContent from '@/components/Activity/ActivityContent/ActivityContentComponent'

const Activity: FC = () => {
  const router = useRouter()
  const slug = router.query.slug as string

  const { data: { activity } } = useActivityQuery({ variables: { slug } })

  return (
    <Fragment>
      <HeaderSecondary
        title={activity.title}
        textMain={activity.title}
        textSub={`Créateur: ${activity.creator.toUpperCase()} - Date: ${moment(+ activity.date).format('YYYY/MM/DD')}`}
        image={activity.image}
        inActivity
      />
      <ActivityContent
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
  }) as ActivitiesQueryResult

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
