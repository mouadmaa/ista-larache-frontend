import { FC } from 'react'
import { HeadingPrimaryContainer } from './HeadingPrimaryStyles'

interface HeaderPrimaryProps {
  textMain: string
  textSub: string
}

const HeadingPrimary: FC<HeaderPrimaryProps> = props => {
  const { textMain, textSub } = props

  return (
    <HeadingPrimaryContainer>
      <span>{textMain}</span>
      <span>{textSub}</span>
    </HeadingPrimaryContainer>
  )
}

export default HeadingPrimary
