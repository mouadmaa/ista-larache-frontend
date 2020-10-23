import { FC } from 'react'
import router from 'next/router'
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser'

import { ActivityCardContainer, ActivityCardContent, ActivityCardImageContainer } from './ActivityCardStyles'
import HeadingTertiary from '../../UI/Heading/HeadingTertiary/HeadingTertiaryComponent'
import { Activity } from '../../../generated/graphql'

interface ActivityCardProps {
  activity: Activity
  maxLength?: number
  reverse?: boolean
}

const ActivityCard: FC<ActivityCardProps> = props => {
  const { activity, reverse = false, maxLength = 200 } = props

  const handleClick = () => {
    router.push('/activities/[slug]', `/activities/${activity.slug}`)
  }


  let imageUrl = ''
  activity.image.split('/').forEach((item, index) => {
    if (index === 6) imageUrl += `/c_scale,q_50,w_300/`
    imageUrl += `${index !== 6 && index !== 0 ? '/' : ''}${item}`
  })

  return (
    <ActivityCardContainer
      reverse={reverse}
      onClick={handleClick}
    >
      <ActivityCardImageContainer>
        <img
          src={imageUrl}
          alt={activity.title}
        />
      </ActivityCardImageContainer>

      <ActivityCardContent>
        <div>
          <span>{moment(+activity.date).format('YYYY/MM/DD')}</span>
          <span>Créateur: {activity.creator.toUpperCase()}</span>
        </div>

        <HeadingTertiary text={activity.title} />

        <div>
          {ReactHtmlParser(`${activity.desc.substr(0, maxLength)}
            ${activity.desc.length >= maxLength ? '...' : ''}`)}
        </div>
      </ActivityCardContent>
    </ActivityCardContainer>
  )
}

export default ActivityCard
