import { FC } from 'react'

import { CompositionImagesContainer } from './ImagesSetionStyles'

interface CompositionImagesProps {
  img1: string
  img2: string
  img3: string
}

const CompositionImages: FC<CompositionImagesProps> = props => {
  const { img1, img2, img3 } = props

  return (
    <CompositionImagesContainer>
      <img src={img1} alt="ista 1" />
      <img src={img2} alt="ista 2" />
      <img src={img3} alt="ista 3" />
    </CompositionImagesContainer>
  )
}

export default CompositionImages
