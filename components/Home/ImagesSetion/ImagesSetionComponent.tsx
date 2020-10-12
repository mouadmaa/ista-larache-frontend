import { FC } from 'react'

import { ImagesSectionContainer } from './ImagesSetionStyles'

interface ImagesSectionProps {
  img1: string
  img2: string
  img3: string
}

const ImagesSection: FC<ImagesSectionProps> = props => {
  const { img1, img2, img3 } = props

  return (
    <ImagesSectionContainer>
      <img src={img1} alt="ista 1" />
      <img src={img2} alt="ista 2" />
      <img src={img3} alt="ista 3" />
    </ImagesSectionContainer>
  )
}

export default ImagesSection
