import { FC } from 'react'
import Link from 'next/link'

import { ButtonLinkContainer } from './ButtonLinkStyles'

interface ButtonLinkProps {
  text: string
  href: string
  as: string
}

const ButtonLink: FC<ButtonLinkProps> = props => {
  const { text, href, as } = props

  return (
    <Link href={href} as={as}>
      <ButtonLinkContainer>
        {text}
      </ButtonLinkContainer>
    </Link>
  )
}

export default ButtonLink
