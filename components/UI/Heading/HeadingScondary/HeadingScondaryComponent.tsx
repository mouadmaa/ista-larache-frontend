import { FC } from 'react'

import { HeadingSecondaryContainer } from './HeadingScondaryStyles'

interface HeaderSecondaryProps {
  text: string
}

const HeadingSecondary: FC<HeaderSecondaryProps> = props => {
  const { text } = props

  return (
    <HeadingSecondaryContainer>
      {text}
    </HeadingSecondaryContainer>
  )
}

export default HeadingSecondary
