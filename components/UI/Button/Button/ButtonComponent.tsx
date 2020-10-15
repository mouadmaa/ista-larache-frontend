import { Spin } from 'antd'
import { FC } from 'react'

import { ButtonContainer } from './ButtonStyles'

interface ButtonProps {
  text: string
  loading?: boolean
  onClick: () => void
}

const Button: FC<ButtonProps> = props => {
  const { text, loading = false, onClick } = props

  return (
    <ButtonContainer
      onClick={onClick}
      disabled={loading}
    >
      {loading && <Spin size='small' />}
      {text}
    </ButtonContainer>
  )
}

export default Button
