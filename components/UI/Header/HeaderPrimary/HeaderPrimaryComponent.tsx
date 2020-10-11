import { FC } from 'react'
import { HeadingPrimaryContainer } from './HeaderPrimaryStyles'

interface HeaderPrimaryProps {
  textMain: string
  textSub: string
}

const HeaderPrimary: FC<HeaderPrimaryProps> = props => {
  const { textMain, textSub } = props

  return (
    <HeadingPrimaryContainer>
      <span>{textMain}</span>
      <span>{textSub}</span>
    </HeadingPrimaryContainer>
  )
}

export default HeaderPrimary
