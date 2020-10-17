import { FC, useEffect } from 'react'
import { Router } from 'next/router'
import ReactHtmlParser from 'react-html-parser'

import { ActivityContentContainer, ActivityContentFooterContainer } from './ActivityContentStyles'
import { Activity } from '@/generated/graphql'
import ButtonLink from '@/components/UI/Button/ButtonLink/ButtonLinkComponent'

interface ActivityProps {
  activity: Activity
}

const ActivityContent: FC<ActivityProps> = props => {
  const { activity } = props

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({ top: 0, left: 0, })
    })
  }, [])

  return (
    <ActivityContentContainer>
      <div>{ReactHtmlParser(activity.desc)}</div>
      <ActivityContentFooterContainer>
        <img
          src={activity.image}
          alt={activity.title}
        />
        <ButtonLink
          href='/activities'
          text='Retour à la page des activités'
          passHref
        />
      </ActivityContentFooterContainer>
    </ActivityContentContainer>
  )
}

export default ActivityContent
