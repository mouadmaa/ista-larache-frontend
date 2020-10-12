import { FC } from 'react'

import { HeadingTertiaryContainer } from './HeadingTertiaryStyles'

interface HeaderTertiaryProps {
  text: string
}

const HeadingTertiary: FC<HeaderTertiaryProps> = props => {
  const { text } = props

  return (
    <HeadingTertiaryContainer>
      {text}
    </HeadingTertiaryContainer>
  )
}

export default HeadingTertiary
