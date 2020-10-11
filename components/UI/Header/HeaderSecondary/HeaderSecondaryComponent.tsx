import { FC } from 'react'

import { HeaderSecondaryContainer } from './HeaderSecondaryStyles'

interface HeaderSecondaryProps {
  text: string
}

const HeaderSecondary: FC<HeaderSecondaryProps> = props => {
  const { text } = props

  return (
    <HeaderSecondaryContainer>
      {text}
    </HeaderSecondaryContainer>
  )
}

export default HeaderSecondary
