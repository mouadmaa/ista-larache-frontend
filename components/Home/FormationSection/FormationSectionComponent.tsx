import { FC } from 'react'

import { FormationSectionContainer, FormationSectionContent } from './FormationSectionStyles'
import HeadingSecondary from '../../UI/Heading/HeadingScondary/HeadingScondaryComponent'
import ImagesSection from '../ImagesSetion/ImagesSetionComponent'
import { useFormationsQuery } from '../../../generated/graphql'

const FormationSection: FC = () => {
  const { data } = useFormationsQuery()

  return (
    <FormationSectionContainer>
      <HeadingSecondary text="Les Formations assurées à l' ista larache" />

      <ImagesSection
        img1='images/ista-6.png'
        img2='images/ista-5.png'
        img3='images/ista-7.png'
      />

      <FormationSectionContent>
        {JSON.stringify(data?.formations, null, 2)}
      </FormationSectionContent>
    </FormationSectionContainer>
  )
}

export default FormationSection
