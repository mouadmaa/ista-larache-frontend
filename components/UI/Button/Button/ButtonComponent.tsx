import { FC } from 'react'

import { ButtonContainer } from './ButtonStyles'

interface ButtonProps {
  text: string
  onClick: () => void
}

const Button: FC<ButtonProps> = props => {
  const { text, onClick } = props

  return (
    <ButtonContainer
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  )
}

export default Button
