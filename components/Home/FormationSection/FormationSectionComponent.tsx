import { FC } from 'react'

import { FormationSectionContainer, FormationSectionContent } from './FormationSectionStyles'
import HeadingSecondary from '../../UI/Heading/HeadingScondary/HeadingScondaryComponent'
import ImagesSection from '../ImagesSetion/ImagesSetionComponent'
import FormationCard from '../../Formation/FormationCard/FormationCardComponent'
import { Formation, Level, useFormationsQuery } from '../../../generated/graphql'

const FormationSection: FC = () => {
  const { data } = useFormationsQuery()

  const levelWithFormations = getLevelWithFormations(
    data.formations as Formation[]
  )

  return (
    <FormationSectionContainer>
      <HeadingSecondary
        text="Les Formations assurées à l' ista larache"
      />

      <FormationSectionContent>
        {levelWithFormations.map((item, index) => (
          <FormationCard
            key={index}
            level={item.level}
            formations={item.formations}
          />
        ))}
      </FormationSectionContent>

      <ImagesSection
        img1='images/ista-6.png'
        img2='images/ista-5.png'
        img3='images/ista-7.png'
      />

    </FormationSectionContainer>
  )
}

export default FormationSection

const getLevelWithFormations = (formations: Formation[]) => {
  const levelWithFormations = []
  Object.values(Level).map(level => {
    const formationCard = {
      level: level.replace('_', ' '),
      formations: formations.filter(
        formation => formation.level === level
      )
    }
    if (formationCard.formations.length) {
      levelWithFormations.push(formationCard)
    }
  })
  return levelWithFormations
}


