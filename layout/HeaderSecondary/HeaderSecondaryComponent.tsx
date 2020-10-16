import { FC } from 'react'
import Head from 'next/head'

import { HeaderSecondaryContainer } from './HeaderSecondaryStyles'
import HeadingPrimary from '@/components/UI/Heading/HeadingPrimary/HeadingPrimaryComponent'

interface HeaderSecondaryProps {
  title: string
  textMain: string
  textSub: string
}

const HeaderSecondary: FC<HeaderSecondaryProps> = props => {
  const { title, textMain, textSub } = props

  return (
    <HeaderSecondaryContainer>
      <Head>
        <title>{`${title} | ISTA LARACHE`}</title>
      </Head>
      <HeadingPrimary
        textMain={textMain}
        textSub={textSub}
      />
    </HeaderSecondaryContainer>
  )
}

export default HeaderSecondary
