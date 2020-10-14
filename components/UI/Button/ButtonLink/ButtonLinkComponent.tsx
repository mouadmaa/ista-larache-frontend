import { FC } from 'react'
import Link from 'next/link'

import { ButtonLinkContainer } from './ButtonLinkStyles'

interface ButtonLinkProps {
  text: string
  href: string
  as?: string
  passHref?: boolean
}

const ButtonLink: FC<ButtonLinkProps> = props => {
  const { text, href, as, passHref = false } = props

  return (
    <Link href={href} as={as} passHref={passHref}>
      <ButtonLinkContainer>
        {text}
      </ButtonLinkContainer>
    </Link>
  )
}

export default ButtonLink
