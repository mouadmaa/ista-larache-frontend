import { FC } from 'react'

import { ActivitySectionContainer } from './ActivitySectionStyles'
import ButtonLink from '../../UI/Button/ButtonLink/ButtonLinkComponent'
import HeadingSecondary from '../../UI/Heading/HeadingScondary/HeadingScondaryComponent'
import { ActivitiesQueryVariables, Sort, useActivitiesQuery } from '../../../generated/graphql'
import ActivityCard from '../../Activity/ActivityCard/ActivityCardComponent'

export const ActivitiesQueryVars: ActivitiesQueryVariables = {
  take: 2,
  skip: 0,
  orderBy: {
    date: Sort.Desc,
  },
}

const ActivitySection: FC = () => {
  const { data } = useActivitiesQuery({
    variables: ActivitiesQueryVars,
  })

  return (
    <ActivitySectionContainer>
      <HeadingSecondary text="les activités à l'ista larache" />

      {data.activities.activities.map((activity, index) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          maxLength={360}
          reverse={index % 2 !== 0}
        />
      ))}

      <ButtonLink
        href='/activities'
        as='/activities'
        text='Afficher tous les activités'
      />
    </ActivitySectionContainer>
  )
}

export default ActivitySection
