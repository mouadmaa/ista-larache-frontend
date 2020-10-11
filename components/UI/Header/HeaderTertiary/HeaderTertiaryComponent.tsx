import { FC } from 'react'

import { HeaderTertiaryContainer } from './HeaderTertiaryStyles'

interface HeaderTertiaryProps {
  text: string
}

const HeaderTertiary: FC<HeaderTertiaryProps> = props => {
  const { text } = props

  return (
    <HeaderTertiaryContainer>
      {text}
    </HeaderTertiaryContainer>
  )
}

export default HeaderTertiary
