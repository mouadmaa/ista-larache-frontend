import { FC } from 'react'

import { ActivitySectionContainer } from './ActivitySectionStyles'
import ButtonLink from '../../UI/Button/ButtonLink/ButtonLinkComponent'
import HeadingSecondary from '../../UI/Heading/HeadingScondary/HeadingScondaryComponent'
import { ActivitiesQueryVariables, Sort, useActivitiesQuery } from '../../../generated/graphql'
import ActivityCard from '../../Activity/ActivityCard/ActivityCardComponent'

interface ActivitySectionProps {
  inPage?: boolean
}

const ActivitySection: FC<ActivitySectionProps> = props => {
  const { inPage = false } = props

  const { data } = useActivitiesQuery({
    variables: inPage ? ActivitiesPageQueryVars : ActivitiesQueryVars,
  })

  return (
    <ActivitySectionContainer
      inPage={inPage}
    >
      <HeadingSecondary
        text="les activités à l'ista larache"
      />

      {data.activities.activities.map((activity, index) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          reverse={index % 2 !== 0}
        />
      ))}

      {!inPage && (
        <ButtonLink
          href='/activities'
          text='Afficher tous les activités'
          passHref
        />
      )}
    </ActivitySectionContainer>
  )
}

export default ActivitySection

export const ActivitiesPageQueryVars: ActivitiesQueryVariables = {
  take: 6,
  skip: 0,
  orderBy: {
    date: Sort.Desc,
  },
}

export const ActivitiesQueryVars: ActivitiesQueryVariables = {
  take: 2,
  skip: 0,
  orderBy: {
    date: Sort.Desc,
  },
}
