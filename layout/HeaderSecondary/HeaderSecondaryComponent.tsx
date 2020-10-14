import { FC } from 'react'

import { HeaderSecondaryContainer } from './HeaderSecondaryStyles'
import HeadingPrimary from '../../components/UI/Heading/HeadingPrimary/HeadingPrimaryComponent'

interface HeaderSecondaryProps {
  textMain: string
  textSub: string
}

const HeaderSecondary: FC<HeaderSecondaryProps> = props => {
  const { textMain, textSub } = props

  return (
    <HeaderSecondaryContainer>
      <HeadingPrimary
        textMain={textMain}
        textSub={textSub}
      />
    </HeaderSecondaryContainer>
  )
}

export default HeaderSecondary
